import { useState } from "react";
import { TemperatureAtCoordinates } from "./TemperatureAtCoordinates";

export const Weather = () => {
    // Default values for Warsaw
    const [latitude, setLatitude] = useState(52.22);
    const [longitude, setLongitude] = useState(21.01);
    const [temperatureType, setTemperatureType] = useState("apparent_temperature");

    return (
        <div>
            <input
                value={latitude}
                onChange={(event) => setLatitude(parseFloat(event.target.value))}
                placeholder="Latitude"
                type="number"
            />
            <input
                value={longitude}
                onChange={(event) => setLongitude(parseFloat(event.target.value))}
                placeholder="Longitude"
                type="number"
            />
            <select
                value={temperatureType}
                onChange = {(event) => setTemperatureType(event.target.value)}
            >
                <option value="apparent_temperature">Apparent Temperature</option>
                <option value="temperature_2m">Real Temperature</option>
            </select>

            <TemperatureAtCoordinates
                latitude={latitude}
                longitude={longitude}
                temperatureType={temperatureType}
            />
        </div>
    );
};



