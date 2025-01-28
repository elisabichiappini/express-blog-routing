//importo modulo path, file system, file pizze, funzioni utili
const path = require("path");
const fs = require("fs");
const posts = require("../db/posts.json");

//funzioni da destruct

const index = (req, res) => {
    res.send('<h1>Benvenuto in Eliblog</h1>')
}
const lista = (req, res) => {
    //content negotiation
    res.format({
        html: () => {
            // Inizializza la stringa HTML
            let html = `
                    <div>
                    <h2>Postsssssss</h2>
                        <ul>
                `;
            // Ciclo per ogni post
            posts.forEach(({ title, content, image, tags }) => {
                html += `
                        <li>
                            <h2>${title}</h2>
                            <p>${content}</p>
                            <img width="100" src="/${image}" alt="${title} photo">
                            <ul>
                            <li>${tags.map(t => `<span class="tag">${t.toLowerCase().replaceAll(' ', '-')}</span>`).join(' ')}</li>
                            </ul>
                        </li>
                    `;
            });

            // Chiudi la lista e il contenitore principale
            html += `
                        </ul>
                    </div>
                `;

            // Invia la risposta HTML
            res.send(html);
        },
        json: () => {
            res.json({
                data: posts,
                count: posts.length
            })
        }
    });
}

module.exports = {
    index, lista
}