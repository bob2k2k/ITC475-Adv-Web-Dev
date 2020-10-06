import React from 'react';
import './styles.css';
import logo from './Images/mega_travel_logo.png';
import Welcome from './Welcome';


class header extends React.Component{
  render(){
    return(
      <div>
        <div class="logo-header">
            <img class="logo" src={logo} alt="Mega Travel Logo" />
        </div>
        <div class="time-wrap">
          <Welcome />
        </div>
        {/* <Welcome /> */}
        <nav>
            <ul>
                <li><a class="nav-element" onClick={this.showHome}>Home</a></li>
                <li><a class="nav-element" onClick={this.showAboutUs}>About Us</a></li>
                <li><a class="nav-element" onClick={this.showContactAgent}>Contact Agent</a></li>
            </ul>
        </nav>
    </div>
    );
  }

  showHome(){
    document.getElementById('about-us-container').style.display = "none";
    document.getElementById('contact-agent').style.display = "none";
    document.getElementById('home-container').style.display = "block";
  }

  showAboutUs(){
    document.getElementById('about-us-container').style.display = "block";
    document.getElementById('contact-agent').style.display = "none";
    document.getElementById('home-container').style.display = "none";
  }

  showContactAgent(){
    document.getElementById('about-us-container').style.display = "none";
    document.getElementById('contact-agent').style.display = "block";
    document.getElementById('home-container').style.display = "none";
  }
}

export default header;
