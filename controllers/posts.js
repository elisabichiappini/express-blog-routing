//importo modulo path, file system, file pizze, funzioni utili
const path = require("path");
const fs = require("fs");
const posts = require("../db/posts.json");

//funzioni da destruct

const index = (req, res) => {
    //content negotiation
    res.format({
        html: () => {
            let html = `
            <div style="font-family:sans-serif"> 
            <h2>leggi i posts</h2>
            <ul>
            `
            posts.forEach(p => {
                html +=`
                <li>
                <div>
                    <h2>${p.title}</h2>
                    <img width="200" src="/${p.image}" alt="img-${p.title}">
                    <ul>
                    ${p.tags.map(t => `<li>${t}</li>`).join(' ')}
                    </div>
                </li>`
                })
                html += `
            </ul>
            </div>
            `
            res.send(html);
        },
        json: () => {
            res.json({
                data: posts,
                count: posts.count
            })
        }
    })
};

const show = (req, res) => {
    const slugPostRichiesta = req.params.slug;
    const postRichiesto = posts.find(post => post.slug === slugPostRichiesta);
    //content negotiation
    res.format({
        html: () => {
            if(postRichiesto) {
                const p = postRichiesto;
                let html = `
                    <div class="card">
                        <h3>${p.title}</h3>
                        <img src="/${p.image}" alt="img-${p.title}">
                    </div>
                `
                res.send(html);
            } else {
                res.status(404).send(`<p>Pizza non trovata</p>`);
            }
        },
        json: () => {
            if(pizzaRichiesta) {
            res.json({
                ...postRichiesto,
                image_url: `http://${req.headers.host}/${postRichiesto.image}`
            });
        }else{
            res.status(404).json({
                error: 'NOT FOUND',
                description: `NON ESSITE UNA PIZZA CON LO SLUG ${slugPostRichiesta}`
            })
        }}
    });
}

const create = (req, res) => {
    const filePath = path.join(__dirname, '../index.html');
    res.sendFile(filePath);
};

module.exports = {
    index, show, create
}