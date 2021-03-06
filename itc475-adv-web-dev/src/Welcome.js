import React from 'react';
import Sun from './Images/sun.svg';
import Moon from './Images/night.svg'

function setGreeting() {
    let date = new Date(),
        hours = date.getHours(),
        time = date.toLocaleTimeString(),
        timeOfDay;

    if (hours < 12) {
        timeOfDay = "Morning";
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "Afternoon";
    } else {
        timeOfDay = "Evening";
    }
    return (
        React.createElement("h3", {id: "Welcome"}, " Good ", timeOfDay, "! ", React.createElement("p", {id: "WelcomeTime"}), time));
}

function setIcon() {
    let date = new Date(),
        hours = date.getHours(),
        min = date.getMinutes();

    if ((hours >= 6 && hours < 18) || (hours = 18 && min == 0)) {
        return (
            React.createElement("img", {
                src: Sun,
                width: "30px",
                alt: "day",
            }));
    } else {
        return (
            React.createElement("img", {
                src: Moon,
                width: "30px",
                alt: "night"
            }));
    }
    
}

function Welcome() {
    return(
        React.createElement("div", null, React.createElement(setGreeting, null), React.createElement(setIcon, null))
    )
}

setInterval(Welcome, 1000);

export default Welcome;