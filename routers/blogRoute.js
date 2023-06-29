const express = require("express");
const {newPost, allPost, singleBlogPost, updateBlogPost, deleteBlog} = require("../controllers/blogController")

const Router = express.Router();

Router.post('/create', newPost)
Router.get('/all', allPost)
Router.get('/single/:id', singleBlogPost)
Router.put('/update/:id', updateBlogPost)
Router.delete('/delete/:id', deleteBlog)


module.exports = Router;