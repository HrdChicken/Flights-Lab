const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    create
}

function create(req, res){
    Flight.findById(req.params.id, function(err, flightDocument){
        Ticket.create(req.body, function(err, ticket){
            res.redirect(`/flights/${flightDocument._id}`)
        })
    })
}

