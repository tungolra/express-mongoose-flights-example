const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

function index(req, res) {
  Flight.find({}, function (err, flights) {
    if (err) return res.send(err.message);
    flights.sort((a, b) => a.departs - b.departs);
    res.render("flights/index.ejs", { flights });
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    if (err) return res.send(err.message);
    flight.destinations.sort((a, b) => a.arrival - b.arrival);
    Ticket.find({ flight: flight._id }, function (err, tickets) {
      if (err) return res.send(err.message);
      res.render("flights/show", { title: "Flight Details", flight, tickets });
    });
  });
}

function newFlight(req, res) {
  const dateHolder = Date.now() + 31540000000;
  const newDate = new Date(dateHolder).toISOString().slice(0, 16);
  res.render("flights/add-flight-page", { newDate });
}
function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) {
      console.log(err.message);
      return res.send("There was an error");
    }
    res.redirect("flights");
  });
}

function deleteFlight(req, res){ 
  Flight.findById(req.params.id, function(err, flight){
    if (err) console.log(err.message)
    flight.remove()
    flight.save(function(err) {
      if (err) console.log(err.message)
    })
  })
  res.redirect("/flights")

}

module.exports = {
  newFlight,
  create,
  index,
  show,
  deleteFlight,
};
