import { useState } from "react";
import { TemperatureAtCoordinates } from "./TemperatureAtCoordinates";

const TEMPERATURE_TYPES = [
    {label: "Apparent Temperature", value: "apparent_temperature"},
    {label: "Real Temperature", value: "temperature_2m"}
]

export const Weather = () => {
    // Default values for Warsaw
    const [latitude, setLatitude] = useState(52.22);
    const [longitude, setLongitude] = useState(21.01);
    const [temperatureType, setTemperatureType] = useState(TEMPERATURE_TYPES[0].value);

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
                {TEMPERATURE_TYPES.map((type) => (
                    <option key={type.value} value={type.value}>
                        {type.label}
                    </option>
                ))}
            </select>

            <TemperatureAtCoordinates
                latitude={latitude}
                longitude={longitude}
                temperatureType={temperatureType}
            />
        </div>
    );
};



