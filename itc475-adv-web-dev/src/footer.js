import React from 'react';
import './styles.css';



class footer extends React.Component{
  render(){
    return(
        <footer>
        <div class="footer-text">
            <p>Copyright Protected. All rights reserved.</p>
            <div class= "footer-contact-info">
                <p>MEGA TRAVELS</p>
                <a href="mailto:mega@travels.com">mega@travels.com</a>
            </div>
        </div>
    </footer>
    );
  }
}

export default footer;
