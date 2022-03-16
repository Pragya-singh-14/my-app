import React, { useState } from "react";
import Select from "react-select";
import data from "../data.json";

const Appointment = () => {
  const [location, setLocationList] = useState(null);
  const [doctor, setDoctor] = useState(null);
  const [doctorList, setDoctorList] = useState([]);
  const [slot, setSlot] = useState(null);
  const [visitReason, setVisitReason] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleLocationChange = (obj) => {
    console.log(obj);
    setLocationList(obj);
    setDoctorList(obj.doctors);
    setDoctor(null);
  };

  const handleDoctorChange = (obj) => {
    setDoctor(obj);
  };

  const handleAvailableSlot = (event) => {
    event.persist();
    setSlot(event.target.value);
  };
  const handleVisitReason = (event) => {
    event.persist();
    setVisitReason(event.target.value);
  };

  const handleSUbmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    let submitData = {
      location: location.code,
      doctor: doctor,
      slot: slot,
      visitReason: visitReason,
    };
    console.log(submitData);
  };

  return (
    <div className="App">
      <h2> BOOK AN APPOINTMENT NOW ! </h2>

      <form onSubmit={handleSUbmit}>
        <div style={{ width: 400, marginBottom: 20 }}>
          <b>Location</b>
          <Select
            placeholder="Select Location"
            value={location}
            options={data}
            onChange={handleLocationChange}
            getOptionLabel={(x) => x.location}
            getOptionValue={(x) => x.code}
          />
          <br />
          <b>Doctors</b>
          <Select
            placeholder="Select Doctor"
            value={doctor}
            options={doctorList}
            onChange={handleDoctorChange}
            getOptionLabel={(x) => x.name}
            getOptionValue={(x) => x.code}
          />
          <div className="form-group">
            <label> Slot </label>{" "}
            <input
              className="form-control"
              type="date"
              name="slot"
              value={slot}
              onChange={handleAvailableSlot}
            />{" "}
          </div>{" "}
          <div className="form-group">
            <label> Visit Reason </label>{" "}
            <input
              className="form-control"
              type="text"
              placeholder="Reason"
              name="visitReason"
              value={visitReason}
              onChange={handleVisitReason}
            />{" "}
          </div>{" "}
        </div>
        <div>
          {" "}
          <button className="btn btn-primary"> Submit </button>{" "}
        </div>{" "}
      </form>
    </div>
  );
};

export default Appointment;
