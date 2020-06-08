const express = require('express');
const router = express.Router();
const Articles = require('../../DB/artSchema');
const Comments =  require('../../DB/artSchema');

//Request to get all articles
router.get('/', (req, res) => {
    Articles.find()
    .then(article => res.json(article))
    .catch((err) => {
        res.status(400).json(`Erroor: ${err}`)
    })
});

//Request to add new article
router.post('/add', (req, res) => {
    const newArticle = new Articles({
        title: req.body.title,
        article: req.body.article,
        authorname: req.body.authorname,
        category: req.body.category,
        tag: [req.body.category]
    })
    newArticle.save()
    .then(() => res.json('The new article has been posted successfully!'))
    .catch((err) => {
        res.status(400).json(`Error: ${err}`)
    })
})

//Request find article by ID
router.get('/:id', (req, res) => {
    Articles.findById(req.params.id)
    .then(article => res.json(article))
    .catch((err) => {
        res.status(400).json(`Error: ${err}`)
    })
})

//Request find article by ID and update
router.put('/update/:id', (req, res) => {
    Articles.findById(req.params.id)
    .then(article => {
        article.title = req.body.title;
        article.article = req.body.article;
        article.authorname = req.body.authorname;
        article.category = req.body.category;
        article.tag = req.body.tag;

        article.save()
        .then(() => res.json("The article is successfully updated!!"))
        .catch((err) => {
            res.status(400).json(`Error: ${err}`)
        })
    })
})

//Request find article by ID and delete
router.delete('/:id', (req, res) => {
    Articles.findByIdAndDelete(req.params.id)
    .then(() => res.json("Article successfully deleted!"))
    .catch((err) => {
        res.status(400).json(`Error: ${err}`)
    })
})


module.exports = router