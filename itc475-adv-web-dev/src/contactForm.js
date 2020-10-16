import React from 'react';
import './styles.css';



class contactForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNum: '',
            partySize: '',
            date: '',
            destination: '',
            activities: []
        }
        this.handleDataChanges = this.handleDataChanges.bind(this);
        this.handleActivityData = this.handleActivityData.bind(this);
        this.submitFormData = this.submitFormData.bind(this);
    }
    render(){
        return(
            <form>
                <div class = "form-wrapper">
                    <div class = "form-input-wrapper">
                        <label for = "first-name">First Name</label>
                        <input type = "text" name = "firstName" id = "first-name" required value={this.state.firstName} onChange = {this.handleDataChanges}></input>
                    </div>
                    <div class = "form-input-wrapper">
                        <label for = "last-name">Last Name</label>
                        <input type = "text" name = "lastName" id = "last-name" required value={this.state.lastName} onChange = {this.handleDataChanges}></input>
                    </div>
                </div>
                <div class = "form-wrapper">
                    <div class = "form-input-wrapper">
                        <label for = "email">E-Mail</label>
                        <input type = "text" name = "email" id = "email" required required value={this.state.email} onChange = {this.handleDataChanges}></input>
                    </div>
                    <div class = "form-input-wrapper">
                        <label for = "phone-number">Phone Number</label>
                        <input type = "number" name = "phoneNum" id = "phone-number" required value={this.state.phoneNum} onChange = {this.handleDataChanges}></input>
                    </div>
                </div>
                <div class = "form-wrapper">
                    <div class = "form-input-wrapper">
                        <label for = "party-size">Party Size</label>
                        <input type = "number" name = "partySize" id = "party-size" required value={this.state.partySize} onChange = {this.handleDataChanges}></input>
                    </div>
                    <div class = "form-input-wrapper">
                        <label for = "trip-date">Date</label>
                        <input type = "date" name = "date" id = "trip-date" required value={this.state.date} onChange = {this.handleDataChanges}></input>
                    </div>
                </div>

                <div class="activities-wrapper">
                    <div class = "form-input-wrapper">
                        <label for = "destination">Destination</label>
                        <select onClick={this.changeActivities} name = "destination" id = "destination" required value={this.state.destination} onChange = {this.handleDataChanges}>
                            <option value=""></option>
                            <option value="newZealand">New Zealand</option>
                            <option value="maldives">Maldives, South Asia</option>
                            <option value="venice">Venice, Italy</option>
                            <option value="cancun">Cancun</option>
                        </select>
                    </div>

                    <div class = "activity-checkbox-wrapper">
                        <div class="activity-checkbox-container" id="newZealand-activities">
                            <div><input type="checkbox" name="city-tours" value="City Tours" onChange = {this.handleActivityData}></input><label for="city-tours">City Tours</label></div>
                            <div><input type="checkbox" name="sports" value="Sports" onChange = {this.handleActivityData}></input><label for="sports">Sports</label></div>
                            <div><input type="checkbox" name="cycling" value="Cycling" onChange = {this.handleActivityData}></input><label for="cycling">Cycling</label></div>
                            <div><input type="checkbox" name="museums" value="Museums" onChange = {this.handleActivityData}></input><label for="museums">Museums</label></div>
                            <div><input type="checkbox" name="boating" value="Boating" onChange = {this.handleActivityData}></input><label for="boating">Boating</label></div>
                        </div>

                        <div class="activity-checkbox-container" id="maldives-activities">
                            <div><input type="checkbox" name="museums" value="Museums" onChange = {this.handleActivityData}></input><label for="museums">Museums</label></div>
                            <div><input type="checkbox" name="sailing" value="Sailing" onChange = {this.handleActivityData}></input><label for="sailing">Sailing</label></div>
                            <div><input type="checkbox" name="beach" value="Beach" onChange = {this.handleActivityData}></input><label for="beach">Beach</label></div>
                            <div><input type="checkbox" name="hiking" value="Hiking" onChange = {this.handleActivityData}></input><label for="hiking">Hiking</label></div>
                            <div><input type="checkbox" name="boating" value="Boating" onChange = {this.handleActivityData}></input><label for="boating">Boating</label></div>
                        </div>

                        <div class="activity-checkbox-container" id="venice-activities">
                            <div><input type="checkbox" name="museums" value="Museums" onChange = {this.handleActivityData}></input><label for="museums">Museums</label></div>
                            <div><input type="checkbox" name="theatre" value="Theatre" onChange = {this.handleActivityData}></input><label for="theatre">Theatre</label></div>
                            <div><input type="checkbox" name="pandr" value="Parks and Recreation" onChange = {this.handleActivityData}></input><label for="pandr">Parks and Recreation</label></div>
                            <div><input type="checkbox" name="city-tours" value="City Tours" onChange = {this.handleActivityData}></input><label for="city-tours">City Tours</label></div>
                        </div>

                        <div class="activity-checkbox-container" id="cancun-activities">
                            <div><input type="checkbox" name="pandr" value="Parks and Recreation" onChange = {this.handleActivityData}></input><label for="pandr">Parks and Recreation</label></div>
                            <div><input type="checkbox" name="beach" value="Beach" onChange = {this.handleActivityData}></input><label for="beach">Beach</label></div>
                            <div><input type="checkbox" name="boating" value="Boating" onChange = {this.handleActivityData}></input><label for="boating">Boating</label></div>
                            <div><input type="checkbox" name="snorkling" value="Snorkling" onChange = {this.handleActivityData}></input><label for="snorkling">Snorkling</label></div>
                        </div>

                    </div>

                </div>

                <button class = "contact-form-button" type = "submit" onClick = {this.submitFormData}>Submit Form</button>
                <button class = "contact-form-button" type = "submit" onClick = {this.clearFormData}>Clear Form</button>

                

            </form>
        )
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

      handleDataChanges(event){
        let target = event.target,
            value = target.value,
            name = target.name
        this.setState({
            [name]: value
        })
      }

      handleActivityData(event){
          let target = event.target,
          checked = target.checked,
          value = target.value;

          if(checked){
              this.state.activities.push(value);
          } else {
            let index = this.state.activities.indexOf(value);
            if (index > -1) {
                this.state.activities.splice(index, 1);
            }
          }
      }

      submitFormData(e){
          e.preventDefault();
          console.log(this.state);
      }

      clearFormData(){
          window.location.reload();
          return false;
      }
       

}

export default contactForm;