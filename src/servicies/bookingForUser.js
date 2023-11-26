const bookingForUser = async () => {
    const requestOptions = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem("token")
        },
    }
    return fetch(`http://localhost:4000/api/bookings/find-for-user`, requestOptions)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log("myBooking", data);
            return data;
        })
}

export default bookingForUser;