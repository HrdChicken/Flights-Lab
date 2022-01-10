const Flight = require('../models/flight');

module.exports = {
    create
}

function create(req, res){
    Flight.findById(req.params.id, function (err, flightDocument) {
        flightDocument.destination.push(req.body);
        flightDocument.save(function (err) {
          res.redirect(`/flights/${flightDocument._id}`);
        });
    });
};