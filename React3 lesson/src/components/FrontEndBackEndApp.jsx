import { useEffect, useState } from "react";

export const ToggleWords = () => {
    const [isFrontend, setIsFrontend] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsFrontend((currentState) => !currentState);
        }, 1000);

        // Cleanup the interval on unmount
        return () => clearInterval(intervalId)

    }, []);

    return <p>{isFrontend ? "Frontend" : "Backend"}</p>;
};
