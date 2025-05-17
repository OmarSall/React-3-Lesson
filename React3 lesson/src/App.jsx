import "./App.css"
import React from "react"
import UserProfile from "./components/UserProfile"
import UserList from "./components/UserList"
import { Weather } from "./components/Weather"
import { ToggleWords } from "./components/FrontEndBackEndApp.jsx";

function App() {
    return (
        <>
            <div>
                <UserProfile />
                <UserList />
                <h1>Weather App</h1>
                <Weather />
                <h1>FrontEnd - BackEnd App</h1>
                <ToggleWords />

            </div>
        </>
    )
}

export default App
