import React from "react";
import RestaurantDetail from "./RestaurantDetail";

const ConfirmedBooking = ({ confirmation, bookingForm }) => {
  return (
    <>
      <RestaurantDetail />
      <main className="booking">
        <div className="booking-page">
          <div></div>
          <div className="confirmation-wrapper">
            <h2 className="booking-form-title">Confirmation</h2>
            <p className="confirmation-subtitle">
              Your table has been reserved. Please check details below.
            </p>
            <div className="confirmation-row">
              <div>
                <h3>Confirmation Number:</h3>
                <h3>Name:</h3>
                <h3>Phone Number:</h3>
                <h3>Number of Guests:</h3>
                <h3>Date:</h3>
              </div>
              <div>
                <h3>{confirmation}</h3>
                <h3>{`${bookingForm.firstname} ${bookingForm.lastname}`}</h3>
                <h3>{bookingForm.phoneNumber}</h3>
                <h3>{bookingForm.numberOfGuests}</h3>
                <h3>{bookingForm.date}</h3>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </main>
    </>
  );
};

export default ConfirmedBooking;