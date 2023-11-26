const deleteBooking = async (id) => {
    console.log('--------', id);
    const requestOptions = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem("token")
        },
    }
    return fetch(`http://localhost:4000/api/bookings/delete/${id}`, requestOptions)
        .then(response => {
            console.log(response);
            return response.status;
        })
}

export default deleteBooking;