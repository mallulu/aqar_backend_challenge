-- MySQL dump 10.13  Distrib 8.0.30, for macos12.5 (arm64)
--
-- Host: localhost    Database: AQAR
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Apartments`
--

DROP TABLE IF EXISTS `Apartments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Apartments` (
  `ApartmentID` int NOT NULL AUTO_INCREMENT,
  `ApartmentName` varchar(45) NOT NULL,
  `CityID` int NOT NULL,
  `DistrictID` int NOT NULL,
  `ApartmentCoordinates` point NOT NULL,
  PRIMARY KEY (`ApartmentID`),
  UNIQUE KEY `ApartmentID_UNIQUE` (`ApartmentID`),
  KEY `Apartment_CityID_idx` (`CityID`),
  KEY `Apartment_DistrictID_idx` (`DistrictID`),
  CONSTRAINT `Apartment_CityID_FK` FOREIGN KEY (`CityID`) REFERENCES `Cities` (`CityID`) ON UPDATE CASCADE,
  CONSTRAINT `Apartment_DistrictID_FK` FOREIGN KEY (`DistrictID`) REFERENCES `Districts` (`DistrictID`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Apartments`
--

LOCK TABLES `Apartments` WRITE;
/*!40000 ALTER TABLE `Apartments` DISABLE KEYS */;
INSERT INTO `Apartments` VALUES (1,'Apartment 24',1,1,_binary '\0\0\0\0\0\0\0®€B=}\Ä8@\ö·\àŸbG@');
/*!40000 ALTER TABLE `Apartments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `AvailabilityCalendar`
--

DROP TABLE IF EXISTS `AvailabilityCalendar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `AvailabilityCalendar` (
  `AvailabilityCalendarID` int NOT NULL AUTO_INCREMENT,
  `ApartmentID` int NOT NULL,
  `FromDate` datetime NOT NULL,
  `ToDate` datetime NOT NULL,
  PRIMARY KEY (`AvailabilityCalendarID`),
  UNIQUE KEY `AvailabilityCalendarID_UNIQUE` (`AvailabilityCalendarID`),
  KEY `AvailabilityCalendar_ApartmentID_FK_idx` (`ApartmentID`),
  CONSTRAINT `AvailabilityCalendar_ApartmentID_FK` FOREIGN KEY (`ApartmentID`) REFERENCES `Apartments` (`ApartmentID`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AvailabilityCalendar`
--

LOCK TABLES `AvailabilityCalendar` WRITE;
/*!40000 ALTER TABLE `AvailabilityCalendar` DISABLE KEYS */;
INSERT INTO `AvailabilityCalendar` VALUES (1,1,'2022-01-17 00:00:00','2023-01-17 00:00:00');
/*!40000 ALTER TABLE `AvailabilityCalendar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Cities`
--

DROP TABLE IF EXISTS `Cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Cities` (
  `CityID` int NOT NULL AUTO_INCREMENT,
  `CityName` varchar(45) NOT NULL,
  PRIMARY KEY (`CityID`),
  UNIQUE KEY `CityID_UNIQUE` (`CityID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Cities`
--

LOCK TABLES `Cities` WRITE;
/*!40000 ALTER TABLE `Cities` DISABLE KEYS */;
INSERT INTO `Cities` VALUES (1,'Riyadh');
/*!40000 ALTER TABLE `Cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Districts`
--

DROP TABLE IF EXISTS `Districts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Districts` (
  `DistrictID` int NOT NULL AUTO_INCREMENT,
  `DistrictName` varchar(45) NOT NULL,
  `CityID` int NOT NULL,
  PRIMARY KEY (`DistrictID`),
  UNIQUE KEY `DistrictID_UNIQUE` (`DistrictID`),
  KEY `CityID_FK_idx` (`CityID`),
  CONSTRAINT `District_CityID_FK` FOREIGN KEY (`CityID`) REFERENCES `Cities` (`CityID`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Districts`
--

LOCK TABLES `Districts` WRITE;
/*!40000 ALTER TABLE `Districts` DISABLE KEYS */;
INSERT INTO `Districts` VALUES (1,'King Faisal District',1);
/*!40000 ALTER TABLE `Districts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-23 14:46:03
