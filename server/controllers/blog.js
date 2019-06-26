const Blog = require('../models/blog');
const AsyncLock = require('async-lock');
const lock = new AsyncLock();

exports.getBlogById = (req, res) => {
    const blogId = req.params.id;

    Blog.findById(blogId, (err, foundBlog) => {
        if(err) {
            return res.status(422).send(err);
        }

        return res.json(foundBlog);
    })
}

exports.createBlog = (req, res) => {
    const lockId = req.query.lockId;
    
    if(!lock.isBusy(lockId)) {
        lock.acquire(lockId, function(done) {
            const blogData = req.body;
            const blog = new Blog(blogData);
            if(req.user) {
                blog.userId = req.user.sub;
                blog.author = req.user.name;
            }
    
            blog.save((err, createdBlog) => {
                setTimeout(() => done(), 5000);
    
                if(err) {
                    return res.status(422).send(err);
                }
    
                return res.json(createdBlog);
            })
        }, function(err, ret) {
            err && console.error(err)
        });
    } else {
        return res.status(422).send({message: 'Blog is saving!!'});
    }
    
}