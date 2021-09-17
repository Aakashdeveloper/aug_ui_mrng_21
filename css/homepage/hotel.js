var url = "https://developerfunnel.herokuapp.com/location";
var hotelUrl = "https://developerfunnel.herokuapp.com/hotels?city="

const getCity = async () => {
    var response = await fetch(url);
    var data = await response.json();
    data.map((item) => {
        var element = document.createElement('option')  //<option></option>
        var text = document.createTextNode(item.city_name) // delhi
        element.appendChild(text) // <option>delhi</option>
        element.value = item._id // <option value="1">delhi</option>
        document.getElementById('city').appendChild(element) //<select><option value="1">delhi</option></select>
    })
}

function getHotels(){
    var selectedId = document.getElementById('city').value;
    var hotellist = document.getElementById('secondselect');

    while(hotellist.length>0){
        hotellist.remove(0)
    }

    fetch(`${hotelUrl}${selectedId}`)
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
            var element = document.createElement('option')  //<option></option>
            var text = document.createTextNode(`${item.name} | ${item.locality}`) // delhi
            element.appendChild(text) // <option>delhi</option>
            element.value = item._id // <option value="1">delhi</option>
            document.getElementById('secondselect').appendChild(element) //<select><option value="1">delhi</option></select>
        })
    })
}

//https://developerfunnel.herokuapp.com/booking