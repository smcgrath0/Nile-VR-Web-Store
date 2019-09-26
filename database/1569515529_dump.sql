-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: wickedsales
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `cartID` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `created` datetime NOT NULL,
  PRIMARY KEY (`cartID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,'2019-09-24 09:19:20'),(2,'2019-09-24 10:37:16'),(3,'2019-09-24 10:37:23'),(4,'2019-09-24 10:37:46'),(5,'2019-09-24 10:38:56'),(6,'2019-09-24 10:39:29');
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cartItems`
--

DROP TABLE IF EXISTS `cartItems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cartItems` (
  `cartitemID` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `productID` mediumint(8) unsigned NOT NULL,
  `count` smallint(5) unsigned NOT NULL,
  `added` datetime NOT NULL,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cartID` mediumint(8) unsigned NOT NULL,
  PRIMARY KEY (`cartitemID`),
  UNIQUE KEY `cart` (`productID`,`cartID`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartItems`
--

LOCK TABLES `cartItems` WRITE;
/*!40000 ALTER TABLE `cartItems` DISABLE KEYS */;
INSERT INTO `cartItems` VALUES (1,6,1,'2019-09-23 13:21:07','2019-09-23 20:21:07',1),(7,4,5,'2019-09-23 15:25:07','2019-09-23 23:14:59',1),(47,1,2,'2019-09-24 09:39:59','2019-09-24 18:07:31',2),(56,5,1,'2019-09-24 10:36:41','2019-09-24 17:36:41',1),(58,5,3,'2019-09-24 10:37:23','2019-09-24 17:37:38',3),(61,5,2,'2019-09-24 10:37:46','2019-09-24 17:37:55',4),(63,1,6,'2019-09-24 10:38:56','2019-09-24 17:38:59',5),(69,1,6,'2019-09-24 10:39:29','2019-09-24 17:39:36',6),(75,2,7,'2019-09-24 10:39:47','2019-09-24 17:39:48',6);
/*!40000 ALTER TABLE `cartItems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `image` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `imageID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `productID` int(11) NOT NULL,
  PRIMARY KEY (`imageID`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES ('https://bit.ly/2JtVNE6',1,1),('../img/shake-weight-man.jpg',2,1),('../img/shake-weight-woman.jpg',3,1),('../img/shake-weight-meme.jpg',4,1),('../img/shamwowseenontv.jpg',9,2),('../img/shamwowguy.jpg',10,2),('https://bit.ly/2LVHYAk',11,3),('https://bit.ly/2EjCU2a',12,4),('https://bit.ly/2VD80b8',13,5),('https://bit.ly/2w9EmzO',19,6),('../img/oculus-rift-s-VR-Gaming-Headsetbg2.jpg',20,7),('../img/oculus-rift-s-VR-Gaming-Headsetbg3.jpg',21,7),('../img/oculus-rift-s-VR-Gaming-Headsetbg4.jpg',22,7),('../img/oculus-rift-s-VR-Gaming-Headset.jpg',23,7),('../img/Oculus-Go-Standalone-VR-Headset.jpg',24,8);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `shortdes` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `longdes` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `images` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `price` mediumint(8) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Shake Weight','Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.','Shaking up the way you work out, the Shake Weight is a revolution in strength training. Boasting a legion of devotees who enthusiastically confirm the Shake Weight\'s claim that it shapes and tones the upper body, this product is hard to ignore.\\nThe way it works is this: a special pulsating dumbbell with dynamic inertia technology increases upper body muscle activity by 300 percent compared to traditional weights as you shake the 5-lb weight several different ways. ',' https://bit.ly/2JtVNE6',2999),(2,'ShamWow','It\'s like a chamois, towel, and sponge, all in one! Soaks up to 10x it\'s weight in any liquid!','It\'s like a chamois, towel, and sponge, all in one! Soaks up to 10x it\'s weight in any liquid!','https://bit.ly/2w9C3Nm',2595),(3,'Snuggie','Super-Soft Fleece with pockets! One Size fits all Adults! Keeps you Warm & Your Hands-Free!','Super-Soft Fleece with pockets! One Size fits all Adults! Keeps you Warm & Your Hands-Free!','https://bit.ly/2LVHYAk',2900),(4,'Wax Vac','Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.','Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.','https://bit.ly/2EjCU2a',999),(5,'Ostrich Pillow','Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.','Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.','https://bit.ly/2VD80b8',9900),(6,'Tater Mitts','8 Seconds is All You Need with Tater Mitts!','8 Seconds is All You Need with Tater Mitts Quickly and easily prepare all your favorite potato dishes with Tater Mitts.','https://bit.ly/2w9EmzO',830),(7,'Oculus Rift S PC-Powered VR Gaming Headset','Top VR gaming library. Oculus Rift S lets you play hundreds of games and exclusives.','Improved Optics: deliver bright, vivid colors and reduced \"screen-door\" effect\r\nOculus Touch Controllers: Your slashes, throws and grabs appear in VR with intuitive, realistic precision, transporting your hands and gestures right into the game\r\nOculus Insight Tracking: Oculus Insight translates your movements into VR no matter which way you\'re facing and provides room-scale tracking without external sensors.','../img\\oculus-rift-s-VR-Gaming-Headset.jpg',39999),(8,'Oculus Go Standalone, All-In-One VR Headset','Lightweight Headset - designed with innovative, breathable fabrics and injection foam molding.','Wide Quad, Fast-Switch LCD - dramatically improves visual clarity and reduces screen-door effect\r\nNext-generation Oculus Lenses - offering a wide field of view with significantly reduced glare\r\nIntegrated Spatial Audio - speakers built into the headset, transporting you straight into VR and making the headset easy to share with someone else\r\nStandalone VR - no additional devices required while in VR (Oculus Go requires the Oculus Companion App, downloadable from the iOS and Android store)','../img/Oculus-Go-Standalone-VR-Headset.jpg',20000);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-26  9:32:09
