export const booking_times = [
    "08:00", "09:00", "10:00",
    "11:00", "12:00", "13:00",
    "14:00", "15:00", "16:00",
];

// https://gist.github.com/miguelmota/5b67e03845d840c949c4
export function get_random_date(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

export function get_random_booking_time() {
  let i = Math.floor(Math.random() * booking_times.length);
  let random_booking_time = booking_times[i];

  return random_booking_time;
}

export function to_iso_date_string(date) {
  return date.toISOString().split('T')[0]; // YYY-MM-DD
}

export function generate_booking_date_with_times(start_date, end_date, unavailable_dates = [], amount_of_booking_times = 2) {
  if (amount_of_booking_times < 1 || amount_of_booking_times > booking_times.length)
    amount_of_booking_times = 2; // just in case

  let max_bookings = Math.floor(Math.random() * amount_of_booking_times + 1);
  let random_booking_times = [];

  for (let i = 0; i < max_bookings; i++) {
    let index = Math.floor(Math.random() * booking_times.length);
    let booking_time = booking_times[index];

    random_booking_times.push(booking_time);
  }

  random_booking_times = [...new Set(random_booking_times)]; // remove duplicates
  random_booking_times.sort((a, b) => {
    let hour_a = parseInt(a.split(':')[0], 10);
    let hour_b = parseInt(b.split(':')[0], 10);

    return hour_a - hour_b; // ascending order
  });

  let random_date = get_random_date(start_date, end_date);
  while (unavailable_dates.includes(random_date) || random_date.getDay() === 0) { // 0 is sunday btw!
    random_date = get_random_date(start_date, end_date);
  }

  let appointment = {
    date: to_iso_date_string(random_date),
    booking_times: random_booking_times,
  };

  return appointment;
}