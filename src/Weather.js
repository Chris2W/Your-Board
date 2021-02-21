import React, {useState} from "react";
import tw from 'twin.macro'

const Weather = props => {

    function getWoeid(pos) {
        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude; 
        fetch("metaweather.com/api/location/search?lattlong="+lat+","+lon, 
        {
            method: 'GET',
            //mode: 'no-cors'
        })
        .then(response => response.json())
        .then(data => {return data[0]["weoid"]})
        .catch(err => console.log("CORS error"));
    };

    function getCoords() {
        let woeid = navigator.geolocation.getCurrentPosition(getWoeid);

        fetch("https://www.metaweather.com/api/location/"+woeid, {
            method: "GET",
            //mode: 'no-cors'
        })
        .then(response => response.json())
        .then(data => {return data["consolidated_weather"]["the_temp"];})
        .catch(err => console.log("CORS error"));
    }
    
    return (
        getCoords(),
        <p tw="ml-auto w-max">24℃</p>
    );
};

export default Weather;