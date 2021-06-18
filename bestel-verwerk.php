<?php
require_once dirname(__FILE__) . "/src/helper/debug.php"; 
require_once dirname(__FILE__) . "/src/repository/ticketsrepository.php"; 

// print_r_pre($_POST);

if (isset($_POST["submit"])){
    $aantalRijen = ticketsrepository::createTicket($_POST["naam"], $_POST["voornaam"], $_POST["email"], $_POST["earlybird"], $_POST["regular"],$_POST["student"], $_POST["vip"], $_POST["besteldop"] );
    if ($aantalRijen>0){
        //echo "toevoegen gelukt";
        header("location:index.html");
    }else{
        echo "toevoegen mislukt";
    }
}else{
    echo "toevoegen mislukt. (Je kwam niet vanaf het formulier)";
}


?>  