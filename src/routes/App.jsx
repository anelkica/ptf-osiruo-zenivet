import { useState } from "react";

import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

import Bookings from "../components/Bookings";

import { get_random_date, to_iso_date_string, generate_booking_date_with_times } from "../utils/random_datetime";

function App() {
  const today = new Date();
  const end_of_next_month = new Date(today.getFullYear(), today.getMonth() + 3, 0);
  let unavailable_dates = [];

  for (let i = 0; i < 12; i++) {
    let random_date = get_random_date(today, end_of_next_month);

    unavailable_dates.push(random_date);
  };

  // calendar tileDisabled handler
  // returns true if the date should be disabled, false if it should be enabled
  function check_if_date_is_disabled({date, view}) {
    let is_sunday = date.getDay() === 0;
    let is_unavailable_date = unavailable_dates.some(unavailable_date => to_iso_date_string(unavailable_date) === to_iso_date_string(date)); // + prefix to convert dates to timestamps for comparison

    return is_unavailable_date || is_sunday;
  }

  let booking = generate_booking_date_with_times(today, end_of_next_month, unavailable_dates, 5);


  return (
    <>
      <h1>Main Application</h1>
      <Calendar 
        minDate={today}
        maxDate={end_of_next_month}

        maxDetail="month"
        minDetail="month"

        tileDisabled={check_if_date_is_disabled}
      />
      <Bookings list_of_bookings={booking.booking_times} />
    </>
  );
}

export default App;