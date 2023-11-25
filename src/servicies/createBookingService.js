const createBooking = async (booking) => {
    console.log('--------', booking);
    const requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem("token")
        },
        body: JSON.stringify(booking)
    }
    fetch("http://localhost:4000/api/bookings/create", requestOptions)
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw new Error('La solicitud no fue exitosa, booking');
            }
            return response.text();
        })
        .then(data => {
            const newBooking = JSON.parse(data);
            console.log("NewData", newBooking);
        })
}

export default createBooking;