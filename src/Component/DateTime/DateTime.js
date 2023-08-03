import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaTrash } from "react-icons/fa";
import "./Date.css"

function DateTime({selectedDate, setSelectedDate}) {
 

 
  //date change
  function handleDateChange(date) {
    setSelectedDate(date);
  }

  //delete date
  function handleDelete() {
    setSelectedDate(null);
  }


  //date input fielded
  function CustomInput(props) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "full"
        }}
      >
        <span
          style={{
            width: "40px",
            height: "100%",
            alignItems: "center",
            margin: "16px",
            borderRight: "1px solid black",
            position: "absolute",
            paddingRight: "6px",
            paddingTop: "16px"
          }}
        >
          <img src="https://i.ibb.co/7y66wZs/calendar-1.png" />
        </span>
        <input
          style={{
            paddingTop: "20px",
            paddingBottom: "20px",
            paddingLeft: "65px",
            width: "100%",
            backgroundColor: "white",
            fontWeight: "bold",
            border: "1px solid black",
            color: "black "
          }}
          type="text"
          defaultValue={""} // Set the default value here
          {...props}
        />
        {selectedDate && (
          <FaTrash
            onClick={handleDelete}
            style={{
              marginLeft: "5px",
              position: "absolute",
              right: "35",
              cursor: "pointer"
            }}
          />
        )}
      </div>
    );
  }

  ///calender designed
  function calendarContainer({ children }) {
    return (
      <div
        style={{
          width: "100%",
          marginLeft: "20px",
          display: "block"
        }}
      >
        {children}
      </div>
    );
  }

  //calender header
  function renderCustomHeader({ date, decreaseMonth, increaseMonth }) {
    const monthName = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    return (
      <div className="custom-header ">
        <button className="prev-month-btn" onClick={decreaseMonth}>
          <h1 className="text-black ">Prev</h1>
        </button>
        <div className="month-year">
          <span className="month">{monthName}</span>
          <span className="year">{year}</span>
        </div>
        <button className="next-month-btn text-black" onClick={increaseMonth}>
          Next
        </button>
      </div>
    );
  }

  const today = new Date();
  return (
    <div style={{ backgroundColor: "white" }}>
      <DatePicker
        minDate={today}
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
        dateFormat="yyyy/MM/dd HH:mm"
        placeholderText="Date & Time"
        showPopperArrow={false}
        popperModifiers={{
          preventOverflow: {
            enabled: true,
            escapeWithReference: false,
            boundariesElement: "viewport"
          }
        }}
        customInput={
          <CustomInput value={selectedDate ? "just now" : ""} readOnly />
        }
        calendarContainer={calendarContainer}
        renderCustomHeader={renderCustomHeader}
      />
    </div>
  );
}

export default DateTime;
