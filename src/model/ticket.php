<?php
//plaats hier je ticket model
class Ticket{
    public $ticketid;
    public $naam;
    public $voornaam;
    public $postcode;
    public $email;
    public $earlybird;
    public $regular;
    public $student;
    public $vip;
    public $besteldop;

    public function __construct($particketid=-1, $parnaam ="", $parvoornaam="", $parpostcode = null, $paremail= "", $parearlybird= "", $parregular="", $parstudent="", $parvip="", $parbesteldop = null){
        $this->ticketid = $particketid;
        $this->naam = $parnaam;
        $this->voornaam = $parvoornaam;
        $this->email = $paremail;
        $this->postcode = $parpostcode;
        $this->earlybird = $parearlybird;
        $this->student = $parstudent;
        $this->vip = $parvip;
        $this->besteldop = $parbesteldop;
    }
}
?>