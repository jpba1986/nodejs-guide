exports.getPosts = (req,res,next) =>{
    res.status(200).json({
        posts:[{ 
            _id: '1',
            title:'First Post', 
            content: 'This is the first post!',
            imageUrl: 'images/1_500.jpg',
            creator: {
                name: 'JP'
            },
            createdAt: new Date()
        }]
    });
}

exports.createPost = (req,res,next) =>{
    const title = req.body.title;
    const content = req.body.content;
    res.status(201).json({ // 201 success creating resource
        message: 'Post created!', 
        post: { 
            _id: new Date().toISOString(), 
            title: title, 
            content:content,
            creator:{ name: 'JP'},
            createdAt: new Date() 
        }
    });
}