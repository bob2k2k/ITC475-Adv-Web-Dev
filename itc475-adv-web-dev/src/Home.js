import React from 'react';
import './styles.css';
import maldives from './Images/maldives.PNG';
import mexico from './Images/mexico.PNG';
import newZealand from './Images/newzealand.PNG';
import venice from './Images/venice.PNG';


class homeContainer extends React.Component{
  render(){
    return(
    <div class= "page-containers" id="home-container">
        <section>
         <h1>Travel Packages</h1>
         <p class="section-paragraph">
             We are specialized with International Travels and Tours. Our expertized and experience can save you 100's 
             of dollars in your pocket. Beside the money, you can also save your valuable time at the time of transit or tour.
             You decide your budget and the time from your comfort zone. We will make it happen for your for an exceptional memory.
             Mega Travels is committed for an excellent service and support for all of its past, present, and future customers.
             We are here today only for you. We remind ourself everyday and every moment with a sincere gratitude.
         </p>
        </section>

        <section class="resort-card-container">
            <div class="resort-cards">
                <img src={maldives} alt="Maldives Resort" />
                <div class="prices-description">
                    <h1>Maldives Resort</h1>
                    <p class="current-price">$1800.99</p>
                    <p>Price you pay <span class="price-you-pay">$999.99</span></p>
                    <p class="price-savings">Your saving $801</p>
                </div>
            </div>

            <div class="resort-cards">
                <img src={mexico} alt="Mexico Resort" />
                <div class="prices-description">
                    <h1>Mexico Resort (All Inclusive!)</h1>
                    <p class="current-price">$2999.99</p>
                    <p>Price you pay <span class="price-you-pay">$2199.99</span></p>
                    <p class="price-savings">Your saving $800</p>
                </div>
            </div>

            <div class="resort-cards">
                <img src={newZealand} alt="New Zealand Trek" />
                <div class="prices-description">
                    <h1>New Zealand Trek</h1>
                    <p class="current-price">$2499.00</p>
                    <p>Price you pay <span class="price-you-pay">$2100.00</span></p>
                    <p class="price-savings">Your saving $399</p>
                </div>
            </div>

            <div class="resort-cards">
                <img src={venice} alt="Venice Italy" />
                <div class="prices-description">
                    <h1>Venice Italy</h1>
                    <p class="current-price">$4100.00</p>
                    <p>Price you pay <span class="price-you-pay">$3699.00</span></p>
                    <p class="price-savings">Your saving $400</p>
                </div>
            </div>
        </section>



    </div>
    );
  }
}


export default homeContainer;
