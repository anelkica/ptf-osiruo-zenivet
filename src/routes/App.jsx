import { useState, useRef, useEffect } from "react";

import Header from "../components/Header";

import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

import Bookings from "../components/Bookings";

import Footer from "../components/Footer";

import { get_random_date, to_iso_date_string, generate_booking_date_with_times } from "../utils/random_datetime";

function App() {
  const [calendar_value, set_calendar_value] = useState(new Date());

  const [unavailable_dates, set_unavailable_dates] = useState([]);
  const [current_booking_times, set_current_booking_times] = useState([]);
  const generated_dates_with_times = useRef({});

  const today = new Date();
  const end_of_next_month = new Date(today.getFullYear(), today.getMonth() + 3, 0);

  // initializing values
  useEffect(() => {
    let random_dates = [];

    for (let i = 0; i < 12; i++) {
      let random_date = get_random_date(today, end_of_next_month);

      random_dates.push(random_date);
    };

    set_unavailable_dates(random_dates);
  }, []);

  // calendar tileDisabled handler
  // returns true if the date should be disabled, false if it should be enabled
  function check_if_date_is_disabled({date, view}) {
    let is_sunday = date.getDay() === 0;
    let is_unavailable_date = unavailable_dates.some(unavailable_date => to_iso_date_string(unavailable_date) === to_iso_date_string(date)); // + prefix to convert dates to timestamps for comparison

    return is_unavailable_date || is_sunday;
  }

  function on_change(next_value) {
    if (calendar_value === next_value) return;
    
    let booking = generate_booking_date_with_times(next_value, next_value, unavailable_dates, 5);

    if (!generated_dates_with_times[booking.date])
      generated_dates_with_times[booking.date] = booking.booking_times;

    console.log(generated_dates_with_times);
    set_current_booking_times(generated_dates_with_times[booking.date]);
    set_calendar_value(next_value);
  }

  // DODATI <Footer /> KAD VIDIMO DA JE SVE OKIDOKI
  return (
    <>
      <Header />

      <h1>Zenivet</h1>
      <Calendar
        onChange={on_change}
        value={calendar_value}

        minDate={today}
        maxDate={end_of_next_month}

        maxDetail="month"
        minDetail="month"

        tileDisabled={check_if_date_is_disabled}
      />
      <Bookings list_of_bookings={current_booking_times} />

      <div style={{ height: '5rem' }}></div>
    </>
  );
}

export default App;