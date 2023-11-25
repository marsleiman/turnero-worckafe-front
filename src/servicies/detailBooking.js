const createBooking = async (id) => {
    console.log('--------', id);
    const requestOptions = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem("token")
        },
    }
    fetch(`http://localhost:4000/api/bookings/find/${id}`, requestOptions)
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