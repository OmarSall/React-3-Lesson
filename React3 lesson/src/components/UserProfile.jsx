import React, { useState } from "react";

export default function UserProfile() {
    // Initialize both fields in a single object
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
    });

    // Handle Input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setUser({ ...user, [name]: value });
    };

    // Handle button click
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("First Name: ", user.firstName);
        console.log("Last Name: ", user.lastName);
    };

    return (
        <div>
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={user.firstName}
                onChange={handleChange}
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={user.lastName}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}