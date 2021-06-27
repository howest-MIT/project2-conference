<?php

require_once dirname(__FILE__) . "/../database/database.php";
require_once dirname(__FILE__) . "/../model/ticket.php";

class TicketsRepository
{
    public static function getAlleTickets(){
        $arr = Database::getRows("SELECT * FROM tickets",null,"Ticket");
        return $arr;
    }
   
    public static function getTicketById($particketid){
        $item = Database::getSingleRow("SELECT ticketid, naam, voornaam, postcode, email, earlybird, regular, student, vip, besteldop FROM tickets WHERE id=? order by ticketid", [$particketid], "Ticket");
        return $item;
    }
    public static function getEarlybird($parearlybird){
        $item = Database::getRow("SELECT COUNT(earlybird) FROM tickets");
        return $item;
    }
    public static function getRegular($parregular){
        $item = Database::getRow("SELECT COUNT(regular) FROM tickets");
        return $item;
    }
    public static function getStudent($parstudent){
        $item = Database::getRow("SELECT COUNT(student) FROM tickets");
        return $item;
    }
    public static function getVip($parvip){
        $item = Database::getRow("SELECT COUNT(vip) FROM tickets");
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