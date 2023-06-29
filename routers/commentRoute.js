const express = require("express");
const {newComment, allComments, singleBlogComment, deleteComment} = require('../controllers/commentController')


const Route = express.Router();

Route.post('/newcom/:id', newComment)
Route.get('/allcom', allComments)
Route.get('/single/:id', singleBlogComment)
Route.delete('/delete/:blogId/:commentId', deleteComment)

module.exports = Route;