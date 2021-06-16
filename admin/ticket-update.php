<?php
    //geef de mogelijkheid om een ticket (bestelling aan te passen)
    require_once dirname(__FILE__) . "/../src/helper/debug.php";
    require_once dirname(__FILE__) . "/../src/repository/ticketsrepository.php";

    if (isset($_GET["ticketid"])){
        $TicketItem = ticketsrepository::getTicketById($_GET["ticketid"]);
        $arrTickets = ticketsrepository::getAlleTickets();
    }else{
        echo "Er is geen querystring opgegeven. Ik weet dus niet welke ticket er moet getoond worden";
        exit();
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Tickets</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="../scss/screen.css"/>
  <script src="../script/dataHandler.js"></script>
</head>
<body>
<nav class="c-navbar navbar-expand-md navbar-dark mb-5 pb-3">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
          <ul class="navbar-nav ">
            <a href="index.html" class="navbar-brand">
                <img src="../img/logo.png" style="width: 75px;height: 35px;">
            </a>  
            <li class="nav-item">
              <a class="nav-link "  href="index.html">Home</a>
            </li>
            <li class="nav-item">   
              <a class="nav-link" href="speakers.html">Speakers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="schedule.html">Schedule</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sponsors.html">Sponsors</a>
              </li> 
              <li class="nav-item">
                <a class="nav-link c-active" href="tickets.html">Tickets</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>
              <li>
                <form class="example" action="#" style="margin:auto;max-width:300px">
                  <input type="text" placeholder="Search.." name="search2">
                  
                </form></li>      
          </ul>
        </div>  
      </nav>
      <main>
    <section class="container">
        <h1>Edit Afspraak</h1>
        <h1>Nieuwe afspraak</h1>
        <form method="post" action="update-afspraak-verwerk.php" class="form">
            <div class="form-group">
                <label for="id">id</label>
                <input type="text" readonly class="form-control" name="id" id="id"  placeholder="Wat is je afspraak?" value="<?php echo $TicketItem->ticketid?>">
            </div>

            <div class="form-group">
                <label for="omschrijving">Omschrijving</label>
                <input type="text" class="form-control" name="omschrijving" id="omschrijving"  placeholder="Wat is je afspraak?" value="<?php echo $TicketItem->naam?>">
            </div>
            <div class="form-group">
                <label for="datum">Datum</label>
                <input type="date" class="form-control" name="datum" id="datum" value="<?php echo $afspraakItem->datum?>" ></input>
            </div>
</body>
</html>