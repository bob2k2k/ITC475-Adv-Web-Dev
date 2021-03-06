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
    

    
    <p class="confirm">Thank you for submitting your travel agent contact request! Here is the information you submitted:</p>
  <div id="results">
    
    <ol>
        <li>First Name: <?php echo $_POST["firstName"]?></li> 
        <br>
        <li>Last Name: <?php echo $_POST["lastName"]?></li>
        <br>
        <li>Email: <?php echo $_POST["email"]?></li>
        <br>
        <li>Phone: <?php echo $_POST["phoneNum"]?></li>
        <br>
        <li>Party Size: <?php echo $_POST["partySize"]?></li>
        <br>
        <li>Date: <?php echo $_POST["date"]?></li>
        <br>
        <li>Destination: <?php echo $_POST["destination"]?></li>
        <br>
        <li>Activities: <?php
          $i = 0;
          
          foreach($_POST["activities"] as $activity){
            echo $activity;
            ++$i;
          }
          ?></li>
    </ol>
  </div>
  

  <?php
      $dbhost = "localhost";
      $dbuser = "root";
      $dbpass = "";
      $db = "formDB";
      
      $conn = mysqli_connect ($dbhost,$dbuser,$dbpass,$db);
      
      if(isset($_POST['submit']))
        if(!empty($_POST['firstName']) && !empty($_POST['lastName']) && !empty($_POST['email']) && !empty($_POST['phoneNum'])
        && !empty($_POST['date']) && !empty($_POST['partySize']) && !empty($_POST['destination'])) { 

          $firstName = $_POST['firstName'];
          $lastName = $_POST['lastName'];
          $email = $_POST['email'];
          $phoneNum = $_POST['phoneNum'];
          $date = $_POST['date'];
          $partySize = $_POST['partySize'];
          $destination = $_POST['destination'];
          
          $query = "INSERT INTO form_table(firstName, lastName, emailAddress, phoneNum, date, partySize, destination)
          VALUES ('$firstName', '$lastName', '$email', '$phoneNum','$date', '$partySize', '$destination')";
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