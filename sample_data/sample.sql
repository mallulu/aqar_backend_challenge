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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Apartments`
--

LOCK TABLES `Apartments` WRITE;
/*!40000 ALTER TABLE `Apartments` DISABLE KEYS */;
INSERT INTO `Apartments` VALUES (1,'Apartment 24',1,1,_binary '\0\0\0\0\0\0\0ÆÄB=}\ƒ8@\ˆ∑\‡übG@'),(2,'Apartment 35',1,1,_binary '\0\0\0\0\0\0\0O]˘,\œ\√8@πƒë\"cG@'),(3,'Apartment 12',1,2,_binary '\0\0\0\0\0\0\0\◊1Æ∏8\Œ8@\⁄8b->_G@'),(4,'Apartment 5',1,2,_binary '\0\0\0\0\0\0\0j1xò\Œ8@ü°ºè_G@'),(5,'Apartment 13',1,1,_binary '\0\0\0\0\0\0\0√º«ô&\ƒ8@˙\—p\ \‹bG@'),(6,'Apartment 12',2,3,_binary '\0\0\0\0\0\0\0 •\ÒØ∞5@=\1XçC@'),(7,'Apartment 12',2,3,_binary '\0\0\0\0\0\0\0®˝\÷Nî∞5@∏¨\¬fÄçC@'),(8,'Apartment 12',2,3,_binary '\0\0\0\0\0\0\0¡´\Â\ŒL∞5@ø—é~çC@'),(9,'Apartment 12',2,3,_binary '\0\0\0\0\0\0\0\ﬁt\À\ÒØ5@DLâ$zçC@'),(10,'Apartment 12',2,4,_binary '\0\0\0\0\0\0\0J$\—\À(r5@kGqé:§C@'),(11,'Apartment 12',2,4,_binary '\0\0\0\0\0\0\035	ﬁêr5@|õ˛\ÏG§C@'),(12,'Apartment 12',2,4,_binary '\0\0\0\0\0\0\0YâyV\“r5@eß\‘E§C@'),(13,'Apartment 12',2,4,_binary '\0\0\0\0\0\0\0\›(≤\÷Pr5@\ÃC¶|§C@'),(14,'Apartment 12',2,4,_binary '\0\0\0\0\0\0\0≠£™	r5@Sv˙A]§C@');
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AvailabilityCalendar`
--

LOCK TABLES `AvailabilityCalendar` WRITE;
/*!40000 ALTER TABLE `AvailabilityCalendar` DISABLE KEYS */;
INSERT INTO `AvailabilityCalendar` VALUES (1,1,'2022-01-17 00:00:00','2023-01-17 00:00:00'),(2,2,'2022-05-01 00:00:00','2023-01-02 00:00:00'),(3,3,'2022-05-01 00:00:00','2023-01-02 00:00:00'),(4,4,'2022-05-01 00:00:00','2022-09-01 00:00:00'),(5,5,'2022-01-01 00:00:00','2023-02-01 00:00:00'),(6,6,'2022-03-01 00:00:00','2023-01-01 00:00:00'),(7,7,'2022-07-01 00:00:00','2022-12-01 00:00:00'),(8,8,'2022-01-01 00:00:00','2023-05-01 00:00:00'),(9,9,'2022-02-01 00:00:00','2022-08-01 00:00:00'),(10,10,'2022-08-01 00:00:00','2022-12-01 00:00:00'),(11,11,'2022-09-01 00:00:00','2023-01-01 00:00:00'),(12,11,'2022-11-01 00:00:00','2023-05-01 00:00:00'),(13,12,'2022-12-01 00:00:00','2023-03-01 00:00:00'),(14,13,'2022-01-01 00:00:00','2023-01-01 00:00:00'),(15,14,'2022-04-01 00:00:00','2022-10-01 00:00:00'),(16,2,'2022-07-01 00:00:00','2023-01-01 00:00:00'),(17,10,'2022-10-01 00:00:00','2023-02-01 00:00:00'),(18,11,'2022-09-01 00:00:00','2023-03-01 00:00:00');
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Cities`
--

LOCK TABLES `Cities` WRITE;
/*!40000 ALTER TABLE `Cities` DISABLE KEYS */;
INSERT INTO `Cities` VALUES (1,'Riyadh'),(2,'Jeddah');
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Districts`
--

LOCK TABLES `Districts` WRITE;
/*!40000 ALTER TABLE `Districts` DISABLE KEYS */;
INSERT INTO `Districts` VALUES (1,'King Faisal District',1),(2,'Qurtubah',1),(3,'Al Murjan',2),(4,'Al Adl',2);
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

-- Dump completed on 2022-09-23 18:23:16
