const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
};

// function addToTicket(req, res) {
//     Flight.findById(req.params.id, function(err, flight) {
//         flight.ticket.push(req.body.ticketId);
//         flight.save(function(err) {
//             res.redirect(`/flights/${flight._id}`);
//         });
//     });
// }

function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function(err, ticket) {
        res.redirect(`/flights/${req.params.id}`);
    });
}

function newTicket(req, res) {
    Ticket.find({})
    .exec(function(err, tickets) {
        res.render('tickets/new', {
            title: 'Add Ticket',
            tickets
        });
    });
}