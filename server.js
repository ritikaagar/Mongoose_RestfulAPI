var express = require('express');
// var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// mongoose.connect('mongodb://localhost/cats');
// var CatSchema = new mongoose.Schema({
//     name: String,
//     color: String
// }, { timestamps: true });
// mongoose.model('Cat', CatSchema); // We are setting this Schema in our Models as 'User'
// var Cat = mongoose.model('Cat') // We are retrieving this Schema from our Models, named 'User'
var app = express();

app.use(bodyParser.json());
var path = require('path');

app.use(express.static(path.join(__dirname, './client/static')));

app.set('views', path.join(__dirname, './client/views'));

app.set('view engine', 'ejs');

// app.get('/', function(req, res) {
//     Cat.find({}, function(err, cat) {
//         res.render('index', { cat: cat });
//     });
// })

// app.get('/cat/new', function(req, res) {
//     res.render('new');
// })

// app.post('/cat', function(req, res) {
//     console.log("POST DATA", req.body);
//     var cat = new Cat({ name: req.body.name, color: req.body.color });
//     cat.save(function(err) {
//         // if there is an error console.log that something went wrong!
//         if (err) {
//             console.log('something went wrong', err);
//             res.redirect('/');
//         } else { // else console.log that we did well and then redirect to the root route
//             console.log('successfully added a cat!');
//             res.redirect('/');
//         }
//     })
// })

// app.get('/cat/edit/:id', function(req, res) {
//     Cat.findOne({ _id: req.params.id }, function(err, cat) {
//         if (!cat) {
//             res.redirect('/')
//         }
//         res.render('edit', { cat: cat });
//     })
// })

// app.get('/cat/:id', function(req, res) {
//     Cat.findOne({ _id: req.params.id }, function(err, cat) {
//         if (!cat) {
//             res.redirect('/')
//         }
//         res.render('cat', { cat: cat });
//     })
// })

// app.post('/cat/:id', function(req, res) {
//     Cat.findOne({ _id: req.params.id }, function(err, cat) {
//         if (!cat) {
//             res.redirect('/');
//         }
//         cat.name = req.body.name;
//         cat.color = req.body.color;
//         cat.save(function(err) {
//             if (err) {
//                 res.render('edit', { cat: cat });
//             } else {
//                 res.redirect('/cat/' + cat._id);
//             }
//         })

//     })
// })

// app.post('/cat/destroy/:id', function(req, res) {
//     Cat.remove({ _id: req.params.id }, function(err) {
//         res.redirect('/');
//     });
// });
require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
})