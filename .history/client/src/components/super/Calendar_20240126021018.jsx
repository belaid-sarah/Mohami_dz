import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactCalendar from "react-calendar";
import { FixedSizeList } from "react-window";
import { add, format, isAfter } from "date-fns";
import { getDaysArray, INTERVAL } from "../../config";
/* import Availability from "./Availability";
 */ import "../../Calendar.css";

const TimeRow = ({ index, style, data, activeTime, onClick }) => {
  const isActive = activeTime
    ? activeTime.getTime() === data[index].getTime()
    : false;

  return (
    <div
      style={{ ...style }}
      className={`py-2 px-3 cursor-pointer font-semibold hover:bg-gray-200 rounded-md my-3 ${
        isActive ? " bg-blue-200 hover:bg-blue-200" : ""
      }`}
      onClick={() => onClick(data[index])}
    >
      {format(data[index], "kk:mm")}
    </div>
  );
};

const TimeSelection = ({
  allTimes,
  activeTime,
  onClick,
  onBack,
  onNext,
  onCancel,
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 120 },
    }}
    className="bg-D4AD6B flex flex-col justify-around px-3 py-2 rounded-md"
  >
    <div className="mb-3 border-b pb-2 flex justify-between items-center px-1">
      <h4 className="text-white">Selected time slot:</h4>
      <span
        onClick={onBack}
        className="border p-1.5 cursor-pointer hover:bg-gray-300 text-white"
      >
        Back
      </span>
    </div>
    <FixedSizeList
      height={360}
      width={200}
      itemSize={50}
      itemCount={allTimes.length}
      itemData={{
        times: allTimes,
        activeTime,
        onClick,
      }}
    >
      {({ index, style }) => (
        <TimeRow
          index={index}
          style={style}
          data={allTimes}
          activeTime={activeTime}
          onClick={onClick}
        />
      )}
    </FixedSizeList>
    <div className="flex justify-between mt-3">
      <button
        onClick={onCancel}
        className="bg-red-500 text-white p-2 rounded cursor-pointer"
      >
        Cancel
      </button>
      <button
        onClick={onNext}
        className="bg-blue-500 text-white p-2 rounded cursor-pointer"
      >
        Next
      </button>
    </div>
  </motion.div>
);

export const Calendar = () => {
  const [date, setDate] = useState({
    justDate: undefined,
    dateTime: undefined,
  });

  const [activeTime, setActiveTime] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTimeSelection, setShowTimeSelection] = useState(false);
  const [daysArray, setDaysArray] = useState(getDaysArray());

  const handleUpdateDaysArray = (updatedDaysArray) => {
    setDaysArray(updatedDaysArray);
  };

  const getTimes = () => {
    if (!date.justDate) return [];
    const { justDate } = date;
    const selectedDay = daysArray.find(
      (day) => day.date.getTime() === justDate.getTime()
    );

    const beginningMorning = add(justDate, {
      hours: selectedDay.morning.openingTime,
    });
    const endMorning = add(justDate, {
      hours: selectedDay.morning.closingTime,
    });
    const beginningAfternoon = add(justDate, {
      hours: selectedDay.afternoon.openingTime,
    });
    const endAfternoon = add(justDate, {
      hours: selectedDay.afternoon.closingTime,
    });
    const interval = INTERVAL;

    const times = [];
    for (
      let i = beginningMorning;
      i <= endMorning;
      i = add(i, { minutes: interval })
    ) {
      times.push(new Date(i));
    }

    for (
      let i = beginningAfternoon;
      i <= endAfternoon;
      i = add(i, { minutes: interval })
    ) {
      times.push(new Date(i));
    }
    return times;
  };

  const handleDateClick = (selectedDate) => {
    setDate((prev) => ({ ...prev, justDate: selectedDate }));
    setActiveTime(null);
    setShowTimeSelection(false); // Close time selection when a new date is selected
  };

  const handleTimeRowClick = (selectedTime) => {
    setActiveTime(selectedTime);
    console.log(activeTime);
  };

  const handleTimeSelectionBackClick = () => {
    setActiveTime(null);
    setShowTimeSelection(false);
  };

  const handleTimeSelectionNextClick = () => {
    // Logic for handling next button in time selection
    // You can implement booking logic here
    // For now, let's just log the selected date and time
    console.log("Selected Date:", date.justDate);
    console.log("Selected Time:", activeTime);

    // TODO: Implement your booking logic

    // Clear state after booking
    setActiveTime(null);
    setDate((prevDate) => ({ ...prevDate, justDate: undefined }));
    setShowTimeSelection(false);
  };

  const handleTimeSelectionCancelClick = () => {
    // Clear state when canceling time selection
    setActiveTime(null);
    setDate((prevDate) => ({ ...prevDate, justDate: undefined }));
    setShowTimeSelection(false);
  };

  const [allTimes, setAllTimes] = useState([]);

  useEffect(() => {
    setAllTimes(getTimes());
  }, [date.justDate]);

  const maxDate = add(new Date(), { days: 30 });
  const tileDisabled = ({ date }) => isAfter(date, maxDate);

  return (
    <div className=" flex flex-col">
      <div className="bg-slate-600 flex w-screen gap-6 justify-center">
        <div className="flex flex-col">
          <h2 className="text-white">Choose date and time</h2>
          <div className="flex">
            <div>
              <p className="text-white">1/ Choose Date:</p>
              {!showCalendar && (
                <button onClick={() => setShowCalendar(true)}>Select a Date</button>
              )}
              {showCalendar && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { type: "tween", duration: 0.2 },
                  }}
                  className="bg-white flex flex-col justify-around pl-3 py-2 pr-3 rounded-md"
                >
                  <ReactCalendar
                    minDate={new Date()}
                    maxDate={maxDate}
                    className="REACT-CALENDAR"
                    view="month"
