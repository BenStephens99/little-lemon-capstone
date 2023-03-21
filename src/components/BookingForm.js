import React from "react";

function BookingForm(props) {
    return (
        <div className={`booking-form ${props.formStatus}`}>
            <span onClick={props.toggleForm}>X</span>
            <h2>Booking</h2>
            <form name="booking" method="POST" action="">
                <fieldset>

                    <div className="inputBox">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" required />
                    </div>

                    <div className="inputBox">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required />
                    </div>

                    <div className="inputBox">
                        <label htmlFor="people">People</label>
                        <input type="number" name="people" required min={1} max={10}></input>
                    </div>


                    <div className="inputBox">
                        <label htmlFor="date">Date</label>
                        <input type="date" name="date" required></input>
                    </div>

                    <div className="inputBox">
                        <label htmlFor="time">Time</label>
                        <select
                            id="occasion"
                        >
                            <option>18:00</option>
                            <option>18:30</option>
                            <option>19:00</option>
                            <option>19:30</option>
                            <option>20:00</option>
                        </select>
                    </div>
               


                    <div className="inputBox">
                        <label htmlFor="time">Occasion</label>
                        <select
                            id="occasion"
                        >
                            <option>None</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Engagement</option>
                            <option>Other</option>
                        </select>
                    </div>

                </fieldset>
                <button id="submitButton" type="submit"> Submit </button>
            </form>
        </div>
    )
}

export default BookingForm;