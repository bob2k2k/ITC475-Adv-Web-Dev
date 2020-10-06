import React from 'react';
import './styles.css';



class activities extends React.Component{
  render(){
    return(
        <div class="activities-wrapper">
            <select onClick={this.changeActivities}>
                <option value=""></option>
                <option value="newZealand">New Zealand</option>
                <option value="maldives">Maldives, South Asia</option>
                <option value="venice">Venice, Italy</option>
                <option value="cancun">Cancun</option>
            </select>

            <div class="activity-checkbox-container" id="newZealand-activities">
                <input type="checkbox" name="city-tours"></input><label for="city-tours">City Tours</label>
                <input type="checkbox" name="sports"></input><label for="sports">Sports</label>
                <input type="checkbox" name="cycling"></input><label for="cycling">Cycling</label>
                <input type="checkbox" name="museums"></input><label for="museums">Museums</label>
                <input type="checkbox" name="boating"></input><label for="boating">Boating</label>
            </div>

            <div class="activity-checkbox-container" id="maldives-activities">
                <input type="checkbox" name="museums"></input><label for="museums">Museums</label>
                <input type="checkbox" name="sailing"></input><label for="sailing">Sailing</label>
                <input type="checkbox" name="beach"></input><label for="beach">Beach</label>
                <input type="checkbox" name="hiking"></input><label for="hiking">Hiking</label>
                <input type="checkbox" name="boating"></input><label for="boating">Boating</label>
            </div>

            <div class="activity-checkbox-container" id="venice-activities">
                <input type="checkbox" name="museums"></input><label for="museums">Museums</label>
                <input type="checkbox" name="theatre"></input><label for="theatre">Theatre</label>
                <input type="checkbox" name="pandr"></input><label for="pandr">Parks and Recreation</label>
                <input type="checkbox" name="city-tours"></input><label for="city-tours">City Tours</label>
            </div>

            <div class="activity-checkbox-container" id="cancun-activities">
                <input type="checkbox" name="pandr"></input><label for="pandr">Parks and Recreation</label>
                <input type="checkbox" name="beach"></input><label for="beach">Beach</label>
                <input type="checkbox" name="boating"></input><label for="boating">Boating</label>
                <input type="checkbox" name="snorkling"></input><label for="snorkling">Snorkling</label>
            </div>

        </div>
    );
  }

  changeActivities(e){
    let location = e.target.value;
    switch(location) {
        case 'newZealand':
            document.getElementById('newZealand-activities').style.display = "block";
            document.getElementById('maldives-activities').style.display = "none";
            document.getElementById('venice-activities').style.display = "none";
            document.getElementById('cancun-activities').style.display = "none";
            break;
        case 'maldives':
            document.getElementById('newZealand-activities').style.display = "none";
            document.getElementById('maldives-activities').style.display = "block";
            document.getElementById('venice-activities').style.display = "none";
            document.getElementById('cancun-activities').style.display = "none";
            break;
        case 'venice':
            document.getElementById('newZealand-activities').style.display = "none";
            document.getElementById('maldives-activities').style.display = "none";
            document.getElementById('venice-activities').style.display = "block";
            document.getElementById('cancun-activities').style.display = "none";
            break;
        case 'cancun':
            document.getElementById('newZealand-activities').style.display = "none";
            document.getElementById('maldives-activities').style.display = "none";
            document.getElementById('venice-activities').style.display = "none";
            document.getElementById('cancun-activities').style.display = "block";
            break;
        default:
            document.getElementById('newZealand-activities').style.display = "none";
            document.getElementById('maldives-activities').style.display = "none";
            document.getElementById('venice-activities').style.display = "none";
            document.getElementById('cancun-activities').style.display = "none";
            break;
    }
  }
}

export default activities;
