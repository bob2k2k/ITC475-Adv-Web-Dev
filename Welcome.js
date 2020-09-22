
function setGreeting() {
    let currentTime = new Date().toLocaleTimeString();
    let militaryTime = new Date().toLocaleTimeString('en-US', {hour12: false});
    militaryTimeArray = militaryTime.split(':');
    militaryTime = militaryTimeArray[0] + militaryTimeArray[1];
    
    let greeting;

    if (militaryTime >= 0000 && militaryTime <= 1159) {
        greeting = 'Good Morning!';
    } else if (militaryTime >= 1200 && militaryTime <= 1700) {
        greeting = 'Good Afternoon!';
    } else if (militaryTime >= 1701 && militaryTime <= 2359) {
        greeting = 'Good Evening!';
    }

    return (React.createElement("p", {}, greeting + ' ' + currentTime));
}

function setIcon() {
    let militaryTime = new Date().toLocaleTimeString('en-US', {hour12: false});
    militaryTimeArray = militaryTime.split(':');
    militaryTime = militaryTimeArray[0] + militaryTimeArray[1];

    let sunMoon = document.createElement("img");
    if (militaryTime >= 0600 && militaryTime <= 1800) {
        return (ReactDOM.render(React.createElement("img", {src:"./Images/sun.svg"}, null), document.getElementById("time-image")));
    } else {
        return (ReactDOM.render(React.createElement("img", {src:"./Images/night.svg"}, null), document.getElementById("time-image")));
    }
    
}

function setTimeContainer() {
    setIcon();
    ReactDOM.render(React.createElement("div", null, React.createElement(setGreeting, null)), 
    document.getElementById("time-container"));
}

setInterval(setTimeContainer, 1000);


