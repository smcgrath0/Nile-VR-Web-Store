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
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES ('../img/oculus-rift-s-VR-Gaming-Headsetbg2.jpg',20,7),('../img/oculus-rift-s-VR-Gaming-Headsetbg3.jpg',21,7),('../img/oculus-rift-s-VR-Gaming-Headsetbg4.jpg',22,7),('../img/oculus-rift-s-VR-Gaming-Headset.jpg',23,7),('../img/Oculus-Go-Standalone-VR-Headset.jpg',24,8),('../img/Oculus-Go-Standalone-VR-Headsetbg2.jpg',25,8),('../img/Oculus-Go-Standalone-VR-Headsetbg3.jpg',26,8),('../img/OculusQuestAll-in-oneVR-64GBbg3.jpg',27,9),('../img/OculusQuestAll-in-oneVR-64GBbg2.jpg',28,9),('../img/OculusQuestAll-in-oneVR-64GBbg4.jpg',29,9),('../img/OculusQuestAll-in-oneVR-64GBbg5.jpg',30,9),('../img/OculusQuestAll-in-oneVR-64GBbg1.jpg',31,9),('../img/HTC-VIVE-Pro-Eye-VR-Systembg1.jpg',32,10),('../img/HTC-VIVE-Pro-Eye-VR-Systembg2.jpg',33,10),('../img/Ematic-EVR410bg1.jpg',34,11),('../img/Ematic-EVR410bg2.jpg',35,11),('../img/Ematic-EVR410bg3.jpg',36,11),('../img/Ematic-EVR410bg4.jpg',37,11),('../img/Ematic-EVR410bg5.jpg',38,11),('../img/Ematic-EVR410bg2.jpg',39,11),('../img/Samsung-HMD-Odyssey+-Windowsbg1.jpg',40,12),('../img/Samsung-HMD-Odyssey+-Windowsbg2.jpg',41,12),('../img/Samsung-HMD-Odyssey+-Windowsbg3.jpg',42,12),('../img/Samsung-HMD-Odyssey+-Windowsbg4.jpg',43,12),('../img/Samsung-HMD-Odyssey+-Windowsbg5.jpg',44,12),('../img/Samsung-HMD-Odyssey+-Windowsbg6.jpg',45,12),('../img/3D-VR-Box-for-iOS-and-Androidbg1.jpg',46,13),('../img/3D-VR-Box-for-iOS-and-Androidbg2.jpg',47,13),('../img/3D-VR-Box-for-iOS-and-Androidbg3.jpg',48,13),('../img/3D-VR-Box-for-iOS-and-Androidbg4.jpg',49,13),('../img/3D-VR-Box-for-iOS-and-Androidbg5.jpg',50,13),('../img/HTC-VIVE-Pro-VR-Headsetbg1.jpg',51,14),('../img/HTC-VIVE-Pro-VR-Headsetbg2.jpg',52,14),('../img/HTC-VIVE-Pro-VR-Headsetbg3.jpg',53,14),('../img/HTC-VIVE-Pro-VR-Headsetbg4.jpg',54,14),('../img/HTC-VIVE-Pro-VR-Headsetbg5.jpg',55,14),('../img/HTC-Vive-Replacement-Controllerbg1.jpg',56,15),('../img/HTC-Vive-Replacement-Controllerbg2.jpg',57,15),('../img/HTC-Vive-Replacement-Controllerbg3.jpg',58,15),('../img/HTC-Vive-Replacement-Controllerbg4.jpg',59,15),('../img/HTC-Vive-Replacement-Controllerbg5.jpg',60,15),('../img/Thrustmaster-Hotas-Warthog-Joystickbg1.jpg',61,16),('../img/Thrustmaster-Hotas-Warthog-Joystickbg2.jpg',62,16),('../img/Thrustmaster-Hotas-Warthog-Joystickbg3.jpg',63,16),('../img/Thrustmaster-Hotas-Warthog-Joystickbg4.jpg',64,16),('../img/Thrustmaster-Hotas-Warthog-Joystickbg5.jpg',65,16),('../img/Thrustmaster-T300-RSbg2.jpg',66,17),('../img/Thrustmaster-T300-RSbg1.jpg',67,17),('../img/Thrustmaster-T300-RSbg3.jpg',68,17),('../img/Thrustmaster-T300-RSbg4.jpg',69,17),('../img/Thrustmaster-T300-RSbg5.jpg',70,17),('../img/HTC-Vive-Replacement-Base-Stationbg3.jpg',71,18),('../img/HTC-Vive-Replacement-Base-Stationbg2.jpg',72,18),('../img/HTC-Vive-Replacement-Base-Stationbg1.jpg',73,18),('../img/HTC-Vive-Replacement-Base-Stationbg4.jpg',74,18),('../img/HTC-Vive-Replacement-Base-Stationbg5.jpg',75,18),('../img/Wireless-VR-for-VIVE-PCbg5.jpg',76,19),('../img/Wireless-VR-for-VIVE-PCbg3.jpg',77,19),('../img/Wireless-VR-for-VIVE-PCbg2.jpg',78,19),('../img/Wireless-VR-for-VIVE-PCbg1.jpg',79,19),('../img/Wireless-VR-for-VIVE-PCbg4.jpg',80,19),('../img/Oculus-Sensorbg1.jpg',81,20),('../img/Oculus-Sensorbg4.jpg',82,20),('../img/Oculus-Sensorbg3.jpg',83,20),('../img/Oculus-Sensorbg2.jpg',84,20),('../img/Oculus-Sensorbg5.jpg',85,20),('../img/borderlands-2-VRbg1.jpg',86,21),('../img/borderlands-2-VRbg2.jpg',87,21),('../img/borderlands-2-VRbg3.jpg',88,21),('../img/superhot-VRbg1.jpg',89,22),('../img/superhot-VRbg2.jpg',90,22),('../img/superhot-VRbg3.jpg',91,22),('../img/PS4-VRbg1.jpg',92,23),('../img/PS4-VRbg2.jpg',93,23),('../img/PS4-VRbg3.jpg',94,23),('../img/PS4-VRbg4.jpg',95,23),('../img/bladeandsorcerybg1.jpg',96,24),('../img/bladeandsorcerybg2.jpg',97,24),('../img/bladeandsorcerybg3.jpg',98,24),('../img/pavlov-VR-shooterbg3.jpg',99,25),('../img/pavlov-VR-shooterbg2.jpg',100,25),('../img/pavlov-VR-shooterbg1.jpg',101,25),('../img/beatsaberbg1.jpg',102,26),('../img/beatsaberbg2.jpg',103,26),('../img/beatsaberbg3.jpg',104,26),('../img/blood-and-truthbg1.jpeg',105,27),('../img/blood-and-truthbg3.jpg',106,27),('../img/blood-and-truthbg2.jpg',107,27);
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
  `shortdes` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `longdes` varchar(1000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `images` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `price` mediumint(8) unsigned NOT NULL,
  `typeOfProduct` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (7,'Oculus Rift S PC-Powered VR Gaming Headset','Top VR gaming library. Oculus Rift S lets you play hundreds of games and exclusives.','Improved Optics: deliver bright, vivid colors and reduced \"screen-door\" effect\r\nOculus Touch Controllers: Your slashes, throws and grabs appear in VR with intuitive, realistic precision, transporting your hands and gestures right into the game\r\nOculus Insight Tracking: Oculus Insight translates your movements into VR no matter which way you\'re facing and provides room-scale tracking without external sensors.','../img\\oculus-rift-s-VR-Gaming-Headset.jpg',39999,'systems'),(8,'Oculus Go Standalone, All-In-One VR Headset','Lightweight Headset - designed with innovative, breathable fabrics and injection foam molding.','Wide Quad, Fast-Switch LCD - dramatically improves visual clarity and reduces screen-door effect\r\nNext-generation Oculus Lenses - offering a wide field of view with significantly reduced glare\r\nIntegrated Spatial Audio - speakers built into the headset, transporting you straight into VR and making the headset easy to share with someone else\r\nStandalone VR - no additional devices required while in VR (Oculus Go requires the Oculus Companion App, downloadable from the iOS and Android store)','../img/Oculus-Go-Standalone-VR-Headset.jpg',20000,'systems'),(9,'Oculus Quest All-in-one VR Gaming Headset - 64GB','All-in-one VR: No PC / No wires / No limits - Oculus Quest is an all-in-one gaming system built for virtual reality (Now you can play almost anywhere with just a VR headset and controllers)','Oculus Touch Controllers: Arm yourself with the award-winning Oculus Touch controllers - Your slashes, throws and grabs appear in VR with intuitive, realistic precision, transporting your hands and gestures right into the game\r\nEasy set up: The world is your arcade - Set up is easy whether you\'re at home or someplace new (Oculus Quest works with your environment, so you can play standing or sitting in spaces big or small)\r\nGuardian Helps Keep You Safe: Explore the universe without tripping over the coffee table - The Oculus Guardian system is designed to help you avoid nearby objects while you\'re in-game\r\nSetup requires an iPhone (iOS 10 or higher) or Android (6.0 Marshmallow or higher) smartphone, the Oculus App (free download), 802.11 b/g/n wireless Internet access, and an Oculus account.','../img/OculusQuestAll-in-oneVR-64GBbg1.jpg',39900,'systems'),(10,'HTC VIVE Pro Eye VR System with Eye Tracking','Precision Eye Tracking - Consistent, accurate eye movement tracking and analysis for creative and commercial purposes.','Expanded User Analytics - Access deeper wells of information and real-time behavioral data\r\nFoveated Rendering - Allocate power to the user\'s line of sight and create beautiful visuals without taxing processing resources\r\nSimplified Input and Navigation - Make hand controllers optional and turn VR into a more natural, intuitive experience\r\nTOP-TIER Visual Fidelity - Deliver breathtaking graphics, text & textures in simulations\r\nComfort and Balance - Built to accommodate a wide range of head sizes and vision types for extended sessions in VR\r\nVIVEPORT Infinity - Enjoy on-demand access to over 600 VR games and apps (Promotional code included with purchase).','../img/HTC-VIVE-Pro-Eye-VR-Systembg1.jpg',159900,'systems'),(11,'Ematic EVR410 Universal VR Mobile Headset','Compatible with Android & iPhone.','Uses your phone\'s built-in sensors to detect movement\r\nFits smartphones with 4-6 inch screens\r\nAdjustable headbands for a comfortable fit.','../img/Ematic-EVR410bg1.jpg',2500,'systems'),(12,'Samsung HMD Odyssey+ Windows','3K anti-sde AMOLED display (2880 x 1600) with wide 110 degree field of view\r\nEasy setup process, leveraging inside-out tracking (no additional tracking equipment necessary).','Access to Windows mr store and steamer libraries for thousands of games & experiences\r\nPremium, built-in AKG headphones w/ 360 degree spatial Sound and Mic\r\nAdjustable headband, now 10% lighter with improved comfortable materials','../img/Samsung-HMD-Odyssey+-Windowsbg1.jpg',29900,'systems'),(13,'3D VR Box for iOS and Android','3D VR Box , VR Virtual Reality Glasses Headset with Head-mounted Headband for iPhone 6s Samsung Galaxy s6 Edge+ and Other 3.5\" - 6.0\" IOS Android','MOST COMPATIBLE WITH ANDROID AND IPHONE: Compatible with Android and IOS phones with 3.5 - 6.0 inches display, including iPhone 4S, iPhone 5s, Samsung Galaxy S3, S4, S5, S6, Note4, Note5, LG Nexus 5, LG G2,G3, LG flex, HTC One M, (Nexus 6 and LG V10 is NOT compatible!) Please notice your phone size before purchase.\r\nDURABLE AND ADJUSTABLE T-SHAPED STRAPS: T-shaped straps makes it possible to fit different group of people, from children to adults, what\'s more, the soft padding in front of the VR cardboard also make it comfortable to wear.\r\nFULLY ADJUSTABLE LENS: 3D VR box is made of high quality ABS+PC+PU and diameter spherical resin lens material. The large adjustable optical resin lenses reduce deformity and remove glare, preventing eye fatigue. Lens Focal Distance and Pupil Distance are fully adjustable to this smartphone VR virtual reality kit. Low myopia less than 600 degrees. Pupillary Distance adjustment range 2.55 - 2.16\". You can get a viewing angle of between 70 to 80 degress.','../img/3D-VR-Box-for-iOS-and-Androidbg1.jpg',1699,'systems'),(14,'HTC VIVE Pro Virtual Reality Headset','Important: This product requires base stations and controllers - The base stations and controllers currently sold with VIVE are compatible with this product','Enhanced Graphics - Super-rich colors and sharper than ever details: 2880 x 1660 and 615 PPI\r\nReal-life Movement - 360-degree controller and headset tracking covers your movements to the millimeter, floor-to-ceiling\r\nImmersive Audio - Feel sound all around you with hi-res, high impedance headphones with active noise cancellation\r\nDefine Your Playspace - Use VIVE seated, standing, or in a space up to 20 x 20 Feet, with supporting base stations\r\nDesigned for Comfort - Enhanced ergonomics of the headset allows for greater comfort in VR for longer game play.','../img/HTC-VIVE-Pro-VR-Headsetbg1.jpg',80000,'systems'),(15,'HTC Vive Replacement Controller','Only for the HTC VIVE','Includes one controller, lanyard, micro-USB cable and power adapter\r\nBattery capacity: 960 mAh','../img/HTC-Vive-Replacement-Controllerbg1.jpg',12999,'accessories'),(16,'Thrustmaster 2960720 Hotas Warthog Joystick','55 customizable button combos for personalized gameplay','55 customizable button combos for personalized gameplay\r\nTwo four-direction hat switches include push buttons for better accuracy\r\nCombo of throttle and joystick helps you control moves and speed\r\nWeighted base helps keep the joystick in place\r\nProgrammable LEDs help you see in low-light gaming situations','../img/Thrustmaster-Hotas-Warthog-Joystickbg1.jpg',48000,'accessories'),(17,'Thrustmaster T300 RS','1080 Degrees and the First Official Force-Feedback Wheel for PC and PlayStation 4','Official Licensed PlayStation 4 & PlayStation 3 High-End Racing Simulator; 1080 degree Force Feedback base featuring an industrial-class brushless motor; Detachable Racing GT Style Wheel\r\nOfficial licensed PS4 / PS3 with automatic recognition by the PS4 system; Official PlayStation 4 buttons included (PS, SHARE, OPTIONS); Internal memory and upgradeable firmware\r\nRobust and versatile attachment system; Compatible with all mounts (desks / tables / cockpits / etc.); Realistic: 11\" diameter racing wheel featuring a brushed metal central spokes\r\nRotation angle adjustable from 270 to 1080 degrees; Fully adjustable metal pedals included; Pedals fully adjustable in height and spacing for 6 possible positions for each pedal; The brake pedal also features progressive resistance\r\nCompatible with all currently available Thrustmaster detachable racing wheels: Ferrari F1 Add-on, Ferrari GTE Add-on, T500 RS GT Wheel, Base-Fixed Paddle Shifters kit; Compatible with T3PA & T500 RS pedal sets.','../img/Thrustmaster-T300-RSbg1.jpg',35000,'accessories'),(18,'HTC Vive Replacement Base Station','HTC VIVE ONLY Includes one base station and one power adapter per order','Includes one base station and one power adapter per order\r\nFits standard threaded mounting points\r\nCord: 8 foot 2 inches L','../img/HTC-Vive-Replacement-Base-Stationbg1.jpg',15000,'accessories'),(19,'Vive Wireless Adapter - PC','Wireless VR for VIVE PC VR headsets\r\nPowered by Intel WiGig technology with near-zero latency','Wireless VR for VIVE PC VR headsets\r\nPowered by Intel WiGig technology with near-zero latency\r\nAllows for multi-player VR in the same play space - up to 3 people in a single room-scale environment\r\nIncluded battery allows for up to 2.5 hours of play\r\nVIVEPORT Infinity - Enjoy on-demand access to over 600 VR games and apps (Promotional code included with purchase)\r\nRequires available PCIe slot\r\nFor compatibility with VIVE Pro, you will need to purchase an additional accessory - VIVE Pro Wireless Adapter Attachment Kit','../img/Wireless-VR-for-VIVE-PCbg1.jpg',29999,'accessories'),(20,'Oculus Sensor','For Oculus ONLY','With a clear line of sight, Oculus Sensor tracks constellations of IR LEDs to translate your movements in VR\r\nIts stand is ideal for most setups and its standard 1/4 20 mount works with most tripods\r\nRequires Rift, sold separately\r\nWhen used as a third sensor, requires an additional USB 20 or higher port','../img/Oculus-Sensorbg1.jpg',6000,'accessories'),(21,'Borderlands 2 VR','Virtually immerse yourself in the untamed world of Borderlands. ','Step into the boots of a treasure-seeking Vault Hunter armed with 87 bazillion guns on a quest to line your pockets with loot. Blast bandits with real-world aiming, punch psychos in the mouth, race across the desert in stolen bandit vehicles and free Pandora from Handsome Jack is clutches!\r\n\r\nPUT ON YOUR VIRTUAL BOOTS\r\nBecome one of four playable classes: Siren, Commando, Gunzerker and Assassin, each with unique skillsets and combat styles!\r\n\r\nGET VIRTUALLY LOADED\r\nShoot-and-loot with bazillions of procedurally-generated guns, each with their own capabilities and modifiers. Plus, lust after procedurally-generated shields, grenades, relics, class mods and more for maximum power and mayhem!\r\n\r\nVIRTUALLY SLOW TIME\r\nUse the new Slow-Mo ability to set up your next attack! Plus, with Teleport, glide across Pandora as gracefully as Claptrap, if he had grace.','../img/borderlands-2-VRbg1.jpg',2999,'games'),(22,'Superhot VR','Blurring the lines between cautious strategy and unbridled mayhem, SUPERHOT VR is the definitive VR FPS in which time moves only when you move.','Decisive winner of dozens of VR Game of the Year awards, SUPERHOT VR is a title reimagined and redesigned from the ground up for VR and hand tracking controllers. The fruit of over three years of close cooperation between the critically acclaimed SUPERHOT Team and Oculus, SUPERHOT VR brings the intensely visceral action of SUPERHOT directly into your head and soul.\r\n\r\n - GDCA Best VR Game 2018 Winner\r\n - SXSW Best VR Game 2018 Winner\r\n\r\n - Test your aim where only headshots take out enemies.\r\n - Race against your best scores in bullet-time and real-time.\r\n - Try to complete the game without shooting.\r\n - Get hardcore with faster enemies and less reaction time.\r\n\r\nThe game will test your limits. It will bring pain - of the good kind.\r\nIn the end you will prevail. You will be one with the system.\r\n','../img/superhot-VRbg1.jpg',2000,'games'),(23,'Sony PlayStation VR - White/Black','ONLY FOR PS4. Games Come First\r\nWith gamers in mind, PlayStation delivers new unexpected gaming experience through PlayStation VR.','Just Plug and Play\r\nGetting into PlayStation VR could not be easier. Just plug the PlayStation VR headset and your PlayStation Camera* into your PlayStation 4 system*. You are ready to go.\r\n\r\n3D Audio Technology\r\n3D Audio means that you will be able to pinpoint sounds above, below, and all around you. Instinctively turn your head to the source of a single footstep and be able to judge its distance, just as you would in real life.\r\n\r\nIndustry Leading Design\r\nThe PlayStation VR headset was engineered to be balanced, comfortable, and completely adjustable. It is designed to feel like it is not there - keeping you free from distraction as you explore new gaming worlds.\r\n\r\nMove With Purpose\r\nThe LEDs around the PlayStation VR headset, on the DUALSHOCK 4 and the PlayStation Move controllers are tracked by the PlayStation Camera, providing an incredibly precise capture of your natural movement in virtual space.\r\n\r\n*PlayStation 4 and Camera sold separately.','../img/PS4-VRbg1.jpg',30000,'systems'),(24,'Blade and Sorcery','A medieval fantasy sandbox like no other, focusing on melee, ranged and magic combat that fully utilizes a unique and realistic physics driven interaction and combat system.','The era of the VR weightless, wiggle-sword combat is over. Blade & Sorcery is a medieval fantasy sandbox like no other, focusing on melee, ranged and magic combat that fully utilizes a unique and realistic physics driven interaction and combat system.\r\n\r\nBuilt exclusively for VR, collisions are dictated by fine hitboxes, objects have weight and follow the laws of physics, creatures have full body physics and presence, and blades can be used to penetrate soft materials or deflect magic.\r\nIn Blade & Sorcery, the combat is limited only by your own creativity. Choose your weapon, choose your stance, choose your fighting style; Be the powerful warrior, ranger or sorcerer you always dreamed of becoming!','../img/bladeandsorcerybg1.jpg',4000,'games'),(25,'Pavlov VR','Pavlov is a multiplayer shooter in VR','Dedicated Servers\r\nCompetitive Search And Destroy game mode\r\nCasual fast-paced game modes\r\nBots\r\nMatchmaking\r\nOffline/Practice mode\r\nVoice Chat\r\nTouchpad and OOB locomotion','../img/pavlov-VR-shooterbg3.jpg',1000,'games'),(26,'Beat Saber','Enjoy tons of handcrafted levels and swing your way through the pulsing music beats, surrounded by a futuristic world. Use your sabers to slash the beats as they come flying at you .','Feel the Rhythm: Immerse yourself in the smoothest combination of music beats and visual effects in Beat Saber is truly unique gameplay.\r\nHandcrafted Levels & Music: Unlike other rhythm games with generated content, music and levels in Beat Saber are drawn precisely by hand to enhance the music experience.\r\nChallenging Campaign: Get better every day while completing objectives and challenges in the Campaign.\r\nRise Up the Global Leaderboards: Compete against other Beat Saberists around the world in various difficulties.\r\nEasy to Learn, Fun to Master: Everyone can understand the basic game mechanics. It is easy for anyone to pick up and play.\r\nGreat Exercise: Exercise while dancing and slashing the beats, Beat Saber gets you moving.\r\nSYSTEM REQUIREMENTS\r\nMINIMUM:\r\nOS: Windows 7/8.1/10 (64bit)\r\nProcessor: Intel Core i5 Sandy Bridge or equivalent\r\nMemory: 4 GB RAM\r\nGraphics: Nvidia GTX 960 or equivalent\r\nDirectX: Version 11\r\nStorage: 200 MB available space','../img/beatsaberbg1.jpg',2000,'games'),(27,'Blood and Truth','As a former soldier whose family is embroiled in an underworld crime war, the protagonist battles through a collection of shooting galleries and interactive cutscenes with a welcome amount of depth.','Star in your own explosive action movie blockbuster with this PS VR exclusive shooter.\r\n\r\nBattle through the crime-ridden London underworld as elite soldier Ryan Marks in your deadliest mission yet... to save your family from a ruthless criminal empire.\r\n\r\nTake out your targets with breathless, over-the-top epic gun play as you drive, parachute and rappel across the city amid exciting set pieces.','../img/blood-and-truthbg1.jpeg',6000,'games');
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

-- Dump completed on 2019-09-27 13:23:25
