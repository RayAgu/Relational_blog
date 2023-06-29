const blogModel = require("../models/blogModel")

// to create
exports.newPost = async(req, res)=>{
    try{
        const newPosts = await blogModel.create(req.body)
        res.status(201).json({
            message: "Created successful",
            date: newPosts
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message
        })
    }
};

// get all
exports.allPost = async(req, res)=>{
    try{
        const all = await blogModel.find()
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

// get a single post
exports.singleBlogPost = async(req, res)=>{
    try{
        const singlePost = await blogModel.findById(req.params.id).populate("comment")
        res.status(201).json({
            message: "Single blog post",
            data: singlePost
        })
    } catch (error){
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
};

//update a blog
exports.updateBlogPost = async(req, res)=>{
    try{
        const updateblog = await blogModel.findIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(201).json({
            message: "updated blog successfuly",
            data: updateblog
        })
    } catch (error) {
        res.status(401).json({
            status: "Failed",
            message: error.message
        })
    } 
};

// delete blog post
exports.deleteBlog = async(req, res)=>{
    try{
        const removeBlog = await blogModel.findByIdAndDelete(req.params.id)
        res.status(201).json({
            message: "blog post successfuly deleted",
            data: removeBlog
        })
    } catch (error){
        res.status(401).json({
            status: "Failed to delete",
            message: error.message
        })
    }
}