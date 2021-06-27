-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: com-linweb393.srv.combell-ops.net:3306
-- Gegenereerd op: 15 jun 2021 om 09:39
-- Serverversie: 5.7.33-36-log
-- PHP-versie: 7.1.25-1+0~20181207224605.11+jessie~1.gbpf65b84

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ID309644_project2`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `tickets`
--

CREATE TABLE `tickets` (
  `ticketid` int(5) NOT NULL,
  `naam` varchar(100) NOT NULL,
  `voornaam` varchar(100) NOT NULL,
  `postcode` varchar(10) NOT NULL,
  `email` varchar(100) NOT NULL,
  `earlybird` int(11) NOT NULL,
  `regular` int(11) NOT NULL,
  `student` int(11) NOT NULL,
  `vip` int(11) NOT NULL,
  `besteldop` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `tickets`
--

INSERT INTO `tickets` (`ticketid`, `naam`, `voornaam`, `postcode`, `email`, `earlybird`, `regular`, `student`, `vip`, `besteldop`) VALUES
(1, 'Steven', 'Van Gucht', '8050', 'StevenVanGucht@corona.com', 0, 2, 0, 0, '2021-06-15 09:31:44'),
(2, 'Jurgen', 'Conings', '8000', 'Jurgenconings@defensie.com', 1, 0, 0, 0, '2021-06-15 09:31:44'),
(3, 'Phillipe', 'Geubels', '5060', 'PhillipeGeubels@comedy.be', 0, 0, 0, 5, '2021-06-15 09:31:44');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`ticketid`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `tickets`
--
ALTER TABLE `tickets`
  MODIFY `ticketid` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
