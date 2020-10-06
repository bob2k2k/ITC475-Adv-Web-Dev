import React from 'react';
import './styles.css';
import Activities from './activitiesSelector';


class contactAgent extends React.Component{
  render(){
    return(
        <div class= "page-containers" id="contact-agent">
        <section>
         <h1>Contact an Agent</h1>
         <p class="section-paragraph">
             We would love to know more about your travel plans. Please fill out this contact form to get in touch
             with a travel agent.
         </p>
        </section>

        <Activities />

    </div>
    );
  }
}

export default contactAgent;
