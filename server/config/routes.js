var mongoose = require('mongoose');
var cats = require('../controllers/cats.js');

var Cat = mongoose.model('Cat') // We are retrieving this Schema from our Models, named 'User'

module.exports = function(app) {
    app.get('/', function(req, res) {
        // Cat.find({}, function(err, cat) {
        //     res.render('index', { cat: cat });
        // });
        cats.find(req, res);
    })

    app.get('/cat/new', function(req, res) {
        res.render('new');
    })

    app.post('/cat', function(req, res) {
        console.log("POST DATA", req.body);
        // var cat = new Cat({ name: req.body.name, color: req.body.color });
        // cat.save(function(err) {
        //     // if there is an error console.log that something went wrong!
        //     if (err) {
        //         console.log('something went wrong', err);
        //         res.redirect('/');
        //     } else { // else console.log that we did well and then redirect to the root route
        //         console.log('successfully added a cat!');
        //         res.redirect('/');
        //     }
        // })

        cats.save(req, res);
    })

    app.get('/cat/edit/:id', function(req, res) {
        // Cat.findOne({ _id: req.params.id }, function(err, cat) {
        //     if (!cat) {
        //         res.redirect('/')
        //     }
        //     res.render('edit', { cat: cat });
        // })
        cats.findOne(req, res);
    })

    app.get('/cat/:id', function(req, res) {
        // Cat.findOne({ _id: req.params.id }, function(err, cat) {
        //     if (!cat) {
        //         res.redirect('/')
        //     }
        //     res.render('cat', { cat: cat });
        // })
        cats.findTwo(req, res);
    })

    app.post('/cat/:id', function(req, res) {
        // Cat.findOne({ _id: req.params.id }, function(err, cat) {
        //     if (!cat) {
        //         res.redirect('/');
        //     }
        //     cat.name = req.body.name;
        //     cat.color = req.body.color;
        //     cat.save(function(err) {
        //         if (err) {
        //             res.render('edit', { cat: cat });
        //         } else {
        //             res.redirect('/cat/' + cat._id);
        //         }
        //     })

        // })
        cats.edit(req, res);
    })

    app.post('/cat/destroy/:id', function(req, res) {
        // Cat.remove({ _id: req.params.id }, function(err) {
        //     res.redirect('/');
        // });
        cats.remove(req, res);
    });
}