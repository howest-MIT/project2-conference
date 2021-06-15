<?php

require_once dirname(__FILE__) . "/../database/database.php";
require_once dirname(__FILE__) . "/../model/ticket.php";

class TicketsRepository
{
    public static function getAlleTickets(){
        $arr = Database::getRows("SELECT * FROM tickets");
        return $arr;
    }
   
    public static function getTicketById($particketid){
        $item = Database::getSingleRow("SELECT ticketid, naam, voornaam, postcode, email, earlybird, regular, student, vip, besteldop FROM `tickets` WHERE id=? order by ticketid", [$particketid], "Tickets");
        return $item;
    }
    public static function getEarlybird($parearlybird){
        $item = Database::getSinglerow("SELECT SUM(earlybird) FROM tickets",null, "earlybird");
        return $item;
    }
    public static function getRegular($parregular){
        $item = Database::getSinglerow("SELECT SUM(regular) FROM tickets",null, "regular");
        return $item;
    }
    public static function getStudent($parstudent){
        $item = Database::getSinglerow("SELECT SUM(student) FROM tickets",null, "student");
        return $item;
    }
    public static function getVip($parvip){
        $item = Database::getSinglerow("SELECT SUM(vip) FROM tickets",null, "vip");
        return $item;
    }
    public static function createTicket($parnaam, $parvoornaam, $paremail, $parpostcode, $parearlybird, $parstudent, $parvip, $parregular){
        $int = Database::execute("INSERT INTO tickets(naam, voornaam, email, postcode, earlybird, student, vip, regular) VALUES(?,?,?,?,?,?,?,?)", [$parnaam, $parvoornaam, $paremail, $parpostcode, $parearlybird, $parstudent, $parvip, $parregular]);
        return $int;
    }
    public static function updateTicket($particketid,$parnaam,$parvoornaam,$paremail,$parpostcode,$parearlybird,$parstudent,$parvip,$parregular){
        $int = Database::execute("UPDATE tickets SET naam=?, voornaam=?, email=?, postcode=?, earlybird=?, student=?, vip=?, regular=? WHERE id=?", [$particketid, $parnaam, $parvoornaam, $paremail, $parpostcode, $parearlybird, $parstudent, $parvip, $parregular]);
        return $int;
    }
    public static function deleteTicket($particketid){
        $int = Database::execute("DELETE FROM tickets WHERE id=?", [ $particketid]);
        return $int;
    }
}
?>