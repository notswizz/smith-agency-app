import React from 'react';

const BookingData = ({ bookings, onDeleteBooking, onShowBookingDetails }) => {
    const getTotalDays = (agentCounts) => {
        return Array.isArray(agentCounts) ? agentCounts.reduce((a, b) => a + b, 0) : 0;
    };

    return (
        <div className="data-container">
            {bookings.map(booking => (
                <div className="data-item" key={booking.id} onClick={() => onShowBookingDetails(booking)}>
                    <h3>{booking.client}</h3>
                    <p>   </p>
                    <p>{booking.show}</p>
                    <p>{booking.startDate}</p>
                    <p>{booking.endDate}</p>
                    <p>Total Days: {getTotalDays(booking.agentCounts)}</p>
                    <button onClick={(e) => {e.stopPropagation(); onDeleteBooking(booking.id);}} className="delete-button">Delete</button>
                </div>
            ))}
        </div>
    );
};

export default BookingData;
