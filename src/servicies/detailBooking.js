const detailBooking = async (id) => {
    console.log('--------', id);
    const requestOptions = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem("token")
        },
    }
    return fetch(`http://localhost:4000/api/bookings/find/${id}`, requestOptions)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .catch((error) => {
            console.error("función enRechazo invocada: ", error);
          })
        .then(data => {
            console.log("myBooking", data);
            return data;
        })
}

export default detailBooking;