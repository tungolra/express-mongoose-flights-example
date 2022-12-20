const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

function newTicket(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    if (err) return res.send(err.message);
    res.render("flights/new-ticket-page", {
      title: "Add Ticket",
      flight,
    });
  });
}

function create(req, res) {
  Ticket.create(req.body, function (err, ticket) {
    if (err) return err.message;
    Flight.findById(req.params.id, function (err, flight) {
      ticket.flight.push(`${flight._id}`);
      ticket.save(function (err) {
        res.redirect(`/flights/${req.params.id}`);
      });
    });
  });
}

module.exports = {
  newTicket,
  create,
};
