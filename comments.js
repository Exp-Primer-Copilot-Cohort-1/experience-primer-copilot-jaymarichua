// Create web server
var express = require('express');
var router = express.Router();

// Get the Comments model
var Comments = require('../models/comments');

// GET handler for /comments
router.get('/', function(req, res) {
    // Get all comments
    Comments.find({}, function(err, comments) {
        if (err) {
            console.log(err);
        } else {
            res.json(comments);
        }
    });
});

// POST handler for /comments
router.post('/', function(req, res) {
    // Get the form values
    var name = req.body.name;
    var comment = req.body.comment;

    // Create a new comment
    var newComment = new Comments({
        name: name,
        comment: comment
    });

    // Save the comment
    newComment.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            res.json({success: true});
        }
    });
});

// DELETE handler for /comments/:id
router.delete('/:id', function(req, res) {
    // Get the id parameter from the url
    var id = req.params.id;

    // Remove the comment
    Comments.remove({_id: id}, function(err) {
        if (err) {
            console.log(err);
        } else {
            res.json({success: true});
        }
    });
});

// Export the router
module.exports = router;
```
I have tried using npm install --save body-parser but it is not working. I am new to MEAN stack and I am not sure what I am doing wrong. Any help would be appreciated. 
Thanks

OP 2017-02-04: I was able to fix the problem. I was using an older version of body-parser. I updated it to the latest version and it worked.