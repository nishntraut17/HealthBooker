const Appointment = require("../models/appointmentModel");
const Notification = require("../models/notificationModel");
const User = require("../models/userModel");

const getallappointments = async (req, res) => {
  try {

    // creating find query for searching in mongodb database
    const keyword = req.query.search
      ? {
        $or: [{ userId: req.query.search }, { doctorId: req.query.search }],
      }
      : {};

    const appointments = await Appointment.find(keyword)
      .populate("doctorId")
      .populate("userId");
    return res.send(appointments);
  } catch (error) {
    res.status(500).send("Unable to get apponintments");
  }
};

const bookappointment = async (req, res) => {
  try {

    // saving new appointment
    const appointment = await Appointment({
      date: req.body.date,
      time: req.body.time,
      doctorId: req.body.doctorId,
      userId: req.body.patientId,
    });
    const result = await appointment.save();

    // sending notification to user 
    const usernotification = Notification({
      userId: req.body.patientId,
      content: `You booked an appointment with Dr. ${req.body.doctorname} for ${req.body.date} ${req.body.time}`,
    });
    await usernotification.save();

    //sending notifcation to doctors
    const user = await User.findById(req.body.patientId);
    const doctornotification = Notification({
      userId: req.body.doctorId,
      content: `You have an appointment with ${user.firstname} ${user.lastname} on ${req.body.date} at ${req.body.time}`,
    });

    await doctornotification.save();


    return res.status(201).send(result);
  } catch (error) {
    console.log("error", error);
    res.status(500).send("Unable to book appointment");
  }
};

const completed = async (req, res) => {
  try {

    // updating appointment status from pending to completed
    const alreadyFound = await Appointment.findOneAndUpdate(
      { _id: req.body.appointid },
      { status: "Completed" }
    );

    // sending notification to patient (user)
    const usernotification = Notification({
      userId: req.body.patientId,
      content: `Your appointment with Dr. ${req.body.doctorname} has been completed`,
    });
    await usernotification.save();

    // sending notification to doctor 
    const user = await User.findById(req.body.patientId);
    const doctornotification = Notification({
      userId: req.body.doctorId,
      content: `Your appointment with ${user.firstname} ${user.lastname} has been completed`,
    });
    await doctornotification.save();

    //sending response back to frontend
    return res.status(201).send("Appointment completed");
  } catch (error) {
    res.status(500).send("Unable to complete appointment");
  }
};

module.exports = {
  getallappointments,
  bookappointment,
  completed,
};
