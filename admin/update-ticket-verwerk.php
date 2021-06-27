<?php

require_once dirname(__FILE__) . "/src/helper/debug.php"; 
require_once dirname(__FILE__) . "/src/repository/ticketsrepository.php"; 

print_r_pre($_POST);

if (isset($_POST["submit"])){
    $aantalRijen = TicketsRepository::updateTicket($_POST["ticketid"], $_POST["naam"],$_POST["voornaam"],$_POST["email"],$_POST["postcode"],$_POST["type-ticket"],$_POST["besteldop"],$_POST["earlybird"],$_POST["student"],$_POST["regular"],$_POST["vip"] );
    if ($aantalRijen>0){
        header("location:index.php");
    }else{
        echo "er zijn geen tickets geupdated";
    }
}else{
    echo "toevoegen mislukt.";
}
?>