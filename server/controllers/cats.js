var mongoose = require('mongoose');
var Cat = mongoose.model('Cat') // We are retrieving this Schema from our Models, named 'User'

module.exports = {
    find: function(req, res) {
        Cat.find({}, function(err, cats) {
            res.json(cats);
        })

    },

    save: function(req, res) {
        var cat = new Cat({ name: req.body.name, color: req.body.color });
        cat.save(function(err) {
            // if there is an error console.log that something went wrong!
            if (err) {
                console.log('something went wrong', err);
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully added a cat!');
                res.json(cat);
            }
        })
    },

    findOne: function(req, res) {
        Cat.findOne({ _id: req.params.id }, function(err, cat) {
            if (!cat) {
                res.redirect('/')
            }
            res.render('edit', { cat: cat });
        })
    },

    findTwo: function(req, res) {
        Cat.findOne({ _id: req.params.id }, function(err, cat) {
            if (!cat) {
                res.redirect('/')
            }
            res.render('cat', { cat: cat });
        })
    },

    edit: function(req, res) {
        Cat.findOne({ _id: req.params.id }, function(err, cat) {
            if (!cat) {
                res.redirect('/');
            }
            cat.name = req.body.name;
            cat.color = req.body.color;
            cat.save(function(err) {
                if (err) {
                    res.render('edit', { cat: cat });
                } else {
                    res.redirect('/cat/' + cat._id);
                }
            })

        })
    },
    remove: function(req, res) {
        Cat.remove({ _id: req.params.id }, function(err) {
            res.redirect('/');
        });
    }
}