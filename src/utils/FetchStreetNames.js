const key = "AIzaSyCLs0L0ov1TCNp3GOw4baNSne0fh1qyAMk";

async function getStreetAddress(latlng) {
    const request = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}&result_type=street_address&key=AIzaSyCLs0L0ov1TCNp3GOw4baNSne0fh1qyAMk`)
        .then((response) => response.json())
        .then((data) => {
            const streetName = data.results[0].formatted_address;
            if (streetName) {
                return streetName
            }
            return null;
        })
        .catch(() => {
            return null;
        })
    return request;
}

async function getApartmentWithStreetName(apartment) {
    const latlng = apartment.ApartmentCoordinates.coordinates.join(',');
    const streetName = await getStreetAddress(latlng);
    if (streetName) {
        apartment.StreetAddress = streetName;
    }
    return apartment;
}

async function getApartmentsWithStreetNames(apartments) {
    apartments = apartments.map(async (apartment) => {
        apartment = await getApartmentWithStreetName(apartment);
        return apartment;
    });
    return apartments;
}


module.exports = {
    getStreetAddress,
    getApartmentWithStreetName,
    getApartmentsWithStreetNames
};