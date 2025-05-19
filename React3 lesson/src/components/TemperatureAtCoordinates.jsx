import { useEffect, useState } from "react";

export const TemperatureAtCoordinates = ({ latitude, longitude, temperatureType }) => {
    const [temperature, setTemperature] = useState(null);

    useEffect(() => {
        if (!latitude || !longitude || !temperatureType) {
            return;
        }

        const fetchTemperature = async () => {
            try {
                const searchParams = new URLSearchParams({
                    latitude,
                    longitude,
                    current: temperatureType,
                });

                const response = await fetch(`https://api.open-meteo.com/v1/forecast?${searchParams.toString()}`)
                const data = await response.json();
                setTemperature(data.current[temperatureType]);
            } catch (error) {
                console.error("Failed to fetch temperature:", error);
            }
        };

        fetchTemperature();
    }, [latitude, longitude, temperatureType]);

    return (
      <p>Current {temperatureType.replace('_', ' ')}: {temperature !== null ? `${temperature}°C` : 'Loading...'}</p>
    );
}

