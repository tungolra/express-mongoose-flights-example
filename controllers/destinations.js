const Flight = require("../models/flight");

function create(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    if (err) return res.send(err.message);
    flight.destinations.push(req.body);
    flight.save(function (err) {
      if (err) return res.send(err.message);
      res.redirect(`/flights/${flight._id}`);
    });
  });
}
function deleteDestination(req, res){ 
Flight.findById(req.params.fID, function(err, flight){
  let idx = flight.destinations.findIndex(d => 
    d.id == req.params.dID)
    flight.destinations.splice(idx, 1)
    flight.save(function(err){
      if (err) return res.send(err.message)
      res.redirect(`/flights/${req.params.fID}`)
    })
})
}
module.exports = {
  create,
  deleteDestination
};
