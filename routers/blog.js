const express = require('express')
const Blog = require('../models/blog.js') // MODELO DEL RECURSO
const router = new express.Router()

 
router.post('/blogs' // NOMBRE DE RECURSOS
, async (req, res) => {
    const blog = new Blog(req.body)

    try {
        await blog.save()
       // res.redirect('/');
        res.status(201).send(blog) // Esto muestra lo añadido
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/blogs', async (req, res) => {
    try {
        const blog = await Blog.find({})
        res.send(blog)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/blogs/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const blog = await Blog.findById(_id)

        if (!blog) {
            return res.status(404).send()
        }

        res.send(blog)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/blogs/:title', async (req, res) => {
    const title = req.params.title

    try {
        const blog = await Blog.findById(title)

        if (!blog) {
            return res.status(404).send()
        }

        res.send(blog)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/blogs/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['pregunta', 'resp1','resp2','resp3','resp4','solucion',]
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!blog) {
            return res.status(404).send()
        }

        res.send(blog)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/blogs/:title', async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete('blogs' + req.params.title)

        if (!blog) {
            res.status(404).send()
        }

        res.send(blog)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router