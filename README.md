### About 
A minimally-designed application demonstrating the use of Express middlewares and EJS. Users are able to create flights by inputting form data, re: the Airline, Airport, Flight No., and departure times. 

RESTful APIs are implemented to create, update, or delete Flights, Destinations and Tickets. Flights and Tickets schemas share a one-to-many relationship where objects are held in MongoDB. Destinations are embedded within Flights where they also share a one-to-many relationship. 

After the creation of a flight, users can create tickets available for a particular flight by inputting form data, re: Seat Assignment and Price. They can also add Destinations for that flight by inputting form data, re: Arrival Airport and Arrival time. A Flight Details page is accessible through the Flights List page where that they navigate by clicking the "DETAILS" link. 

### Technologies
- MongoDB 
- Express
- JavaScript
- EJS 
- CSS 

### Credits
This application was created through a module within General Assembly's Software Immersion program. 

Completed Oct 2022