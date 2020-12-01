<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mega Travel</title>
        <link rel="stylesheet" href="styles.css">
        <body>
        <header>
        <div>
        <div class="logo-header">
            <img class="logo" src="mega_travel_logo.png" alt="Mega Travel Logo" />
        </div>
        <div class="time-wrap">
          <h3 id= "Welcome"></h3>
          <p id="WelcomeTime"></p><span id="timeImg"></span>
        </div>
        
        <nav>
            <ul>
                <li><a class="nav-element" onClick={this.showHome}>Home</a></li>
                <li><a class="nav-element" onClick={this.showAboutUs}>About Us</a></li>
                <li><a class="nav-element" onClick={this.showContactAgent} href="#contact">Contact Agent</a></li>
            </ul>
        </nav>
      </div>
            
  
      <script>
        let date = new Date(),
          hours = date.getHours(),
          min = date.getMinutes(),
          time = date.toLocaleTimeString(),
          timeOfDay, img;

        if (hours < 12) {
            timeOfDay = "Morning";
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "Afternoon";
        } else {
            timeOfDay = "Evening";
        };

        if ((hours >= 6 && hours < 18) || (hours = 18 && min == 0)) {
            img = `<img src="../src/Images/Sun.svg" width="30px" alt="day">`
        } else {
          img = `<img src="../src/Images/Moon.svg" width="30px" alt="night">`
        }

        document.getElementById('Welcome').innerHTML = `Good ${timeOfDay}!`;
        document.getElementById('WelcomeTime').innerHTML = time;
        document.getElementByid('timeImg').innerHTML = img;
      </script>
    

    <?php
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "formDB";
    
    $conn = mysqli_connect ($dbhost,$dbuser,$dbpass,$db);


    ?>
  
  
    <footer>
        <div class="footer-text">
            <p>Copyright Protected. All rights reserved.</p>
            <div class= "footer-contact-info">
                <p>MEGA TRAVELS</p>
                <a href="mailto:mega@travels.com">mega@travels.com</a>
            </div>
        </div>
    </footer>
        
        
      </body>
    </head>
</html>