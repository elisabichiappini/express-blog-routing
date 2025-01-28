const posts = [
    {
        title: 'hot',
        content: 'sono felice così',
        image: '01.png',
        tags: ['#life', '#style', '#young']
    },
    {
        title: 'snow',
        content: 'guarda come nevica',
        image: '02.png',
        tags: ['#snow', '#game', '#young']
    },
    {
        title: 'sunny',
        content: 'mente sane corpore sane',
        image: '03.png',
        tags: ['#yoga', '#young']
    },
    {
        title: 'festival',
        content: 'sono felice così',
        image: '04.png',
        tags: ['#musica', '#hardcore', '#young time']
    },
    // {
    //     title: 'hot',
    //     content: 'sono felice così',
    //     image: 'hot.jpg',
    //     tags: ['#life', '#style', '#young']
    // },
];

module.exports = {
    lista: (req, res) => {
        //content negotiation
        res.format({
            html: () => {
                // Inizializza la stringa HTML
                let html = `
                    <div>
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
    },
};
