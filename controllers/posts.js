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
                html += `
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
    const post = posts.find((p) => p.slug === req.params.slug);
    if (post) {
      const imageUrl = `http://localhost:3000/${post.image}`;
      res.type("json").json({ ...post, image_url: imageUrl });
    } else {
      res.status(404).send({ error: "Post not found" });
    }
  };
  

const create = (req, res) => {
    res.format({
        html: () => {
            res.send('<h2>Creazione nuovo post</h2>');
        },
        default: () => {
            res.status(406).send('not acceptable');
        }
    })
};

const download = (req, res) => {
    const post = posts.find((p) => p.slug === req.params.slug);
    if (post) {
        const filePath = path.join(__dirname, `/${post.image}`);
        res.download(filePath);
    } else {
        res.status(404).json({ error: "Post not found" });
    }
}

module.exports = {
    index,
    show,
    create,
    download
}