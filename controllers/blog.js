const Blog = require('../models/blog')

module.exports = {
	getAllPosts,
	getOnePost,
	createPost,
    deletePost,
    edit
}

function createPost(req, res) {
    Blog.create(req.body).then(post=> {
      res.status(201).json(post);
    }).catch(error => res.status(500).json(error.message));
}

function getAllPosts(req, res) {
    Blog.find({}).then(posts => {
        res.status(200).json(posts);
    }).catch(error => res.status(500).json(error.message));
}

function getOnePost(req, res) {
    Blog.findById(req.params.id).then(post=>{
        res.status(200).json(post);
    }).catch(error => res.status(500).json(error.message));
}

function edit(req, res){
    Blog.findByIdAndUpdate(req.params.id, req.body, {new:true}).then(post =>{
        res.status(200).json(post)
    }).catch(error => res.status(500).json(error.message))
}

function deletePost(req, res) {
    Blog.findByIdAndRemove(req.params.id).then(blog=>{
        res.status(200).json(blog);
    }).catch(error => res.status(500).json(error.message))
}

// function deletePost(req, res) {
//     Blog.findByIdAndRemove(req.params.id, (err, blog)=>{
//         if(err) return res.status(400).json({"Error": "nothing was here to delete"})
//         res.status(200).json(blog);
//     })
// }



