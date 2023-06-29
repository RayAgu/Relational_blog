const commentModel = require('../models/commentModel')
const blogModel = require('../models/blogModel')

// comment
exports.newComment = async(req, res)=>{
    try{
        const blog = await blogModel.findById(req.params.id)
        const postComments = await new commentModel(req.body)
        postComments.posts = blog;
        await postComments.save()
        blog.comment.push(postComments)
        await blog.save()
        res.status(201).json({
            status: "success",
            message: "commented successful",
            date: blog
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message
        })
    }
};

// get all blog comments
exports.allComments = async(req, res)=>{
    try{
        const all = await commentModel.find()
        res.status(201).json({
            message: "All blog post",
            data: all
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message
        })
    }
};

// get a single post comments
exports.singleBlogComment = async(req, res)=>{
    try{
        const singleComment = await commentModel.findById(req.params.id)
        res.status(201).json({
            message: "Single comment",
            data: singleComment
        })
    } catch (error){
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
};


// delete blog comment
exports.deleteComment = async(req, res)=>{
    try{
        const commentId = req.params.commentId
        const blogId = req.params.blogId
        const blog = await blogModel.findById(blogId);
        const deleteComments = await commentModel.findIdAndDelete(commentId)

        await blog.comment.pull(deleteComments)
        await blog.save()
        res.status(201).json({
            message: "comment successfuly deleted",
        })
    } catch (error){
        res.status(401).json({
            status: "Failed to delete",
            message: error.message
        })
    }
}