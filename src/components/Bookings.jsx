import { booking_times } from "../utils/random_datetime";
import "./Bookings.css";

function Bookings({list_of_bookings = []}) {
  const middle = Math.ceil(list_of_bookings.length / 2);

  const left_column = list_of_bookings.slice(0, middle);
  const right_column = list_of_bookings.slice(middle);

  console.log(list_of_bookings);

  // maybe add a 2 column layout?????' in the future
  return (
    <table className="bookings">
      <thead>
        <tr><th colSpan={"2"}>Termini</th></tr>
      </thead>
      <tbody>
          {list_of_bookings.map(
            (booking, i) => (
              <tr key={`row-${i}`} className="booking-col"><td>{booking}</td></tr>
            )
          )}
      </tbody>
    </table>
  );
}

export default Bookings;