const express = require("express");
const router = express.Router();
const ContactModel = require("../models/ContactModel");
const AppointmentModel = require("../models/AppointmentModel");

//  Contact
router.post("/contact", (req, res) => {
  const Contact = new ContactModel({
    name: req.body.name,
    email: req.body.email,
    text: req.body.text,
  });
  Contact.save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.get("/contact", (req, res) => {
  ContactModel.find().then((result) => {
    res.send(result);
  });
});
router.delete("/contact/:id", (req, res) => {
  ContactModel.deleteOne({ _id: req.params.id }).then((result) => {
    res.send(result);
  });
});

//  Appointment
router.post("/appointment", (req, res) => {
  const currentTime = new Date();
  const Appointment = new AppointmentModel({
    name: req.body.name,
    email: req.body.email,
    dob: req.body.dob,
    schedule: req.body.schedule,
    problem: req.body.problem,
    appointmentTime: `${currentTime.toLocaleTimeString()} ${currentTime.toLocaleDateString()}`,
  });
  Appointment.save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.get("/appointment", (request, res) => {
  AppointmentModel.find().then((result) => {
    res.send(result);
  });
});
router.delete("/appointment/:id", (req, res) => {
  AppointmentModel.deleteOne({ _id: req.params.id }).then((result) => {
    res.send(result);
  });
});

// Zoom Signature
router.post("/signature/", (req, res) => {
  debugger
  const timestamp = new Date().getTime() - 30000
  const msg = Buffer.from(process.env.ZOOM_JWT_API_KEY + req.body.meetingNumber + timestamp + req.body.role).toString('base64')
  const hash = crypto.createHmac('sha256', process.env.ZOOM_JWT_API_SECRET).update(msg).digest('base64')
  const signature = Buffer.from(`${process.env.ZOOM_JWT_API_KEY}.${req.body.meetingNumber}.${timestamp}.${req.body.role}.${hash}`).toString('base64')
  res.json({
    signature: signature
  })
})

module.exports = router;
