-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Dec 03, 2015 at 05:07 PM
-- Server version: 5.5.42
-- PHP Version: 5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `wallpapers`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category_name`) VALUES
(1, 'Nature'),
(2, 'Girls'),
(3, 'Architecture'),
(4, 'Animals');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `file` varchar(255) NOT NULL,
  `category` int(11) NOT NULL,
  `tags` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `file`, `category`, `tags`) VALUES
(1, 'stock-photo-130918089.jpg', 1, 'tree,water'),
(2, 'stock-photo-130918371.jpg', 2, 'girl,brunette,stockings'),
(3, 'stock-photo-130918381.jpg', 3, 'blocks,building,venice'),
(4, 'stock-photo-130919435.jpg', 1, 'mountain,city,village'),
(5, 'stock-photo-130921279.jpg', 4, 'chipmunk,hamster,food,tree'),
(6, 'stock-photo-130921571.jpg', 1, 'house,lonely'),
(7, 'stock-photo-130922417.jpg', 1, 'birds,small,flying'),
(8, 'stock-photo-130923193.jpg', 3, 'man,two,roof'),
(9, 'stock-photo-130924199.jpg', 1, 'photo,city,sky'),
(10, 'stock-photo-130926321.jpg', 4, 'bird,drink,water'),
(11, 'stock-photo-130929587.jpg', 2, 'girl,dress,white'),
(12, 'stock-photo-130936471.jpg', 3, 'blocks,night'),
(13, 'stock-photo-130938489.jpg', 2, 'girl,brunette,tunnel'),
(14, 'stock-photo-130944917.jpg', 3, 'abstract'),
(15, 'stock-photo-130947177.jpg', 1, 'house,lake,tree,red'),
(16, 'stock-photo-130949961.jpg', 1, 'freeze,snow,ice'),
(17, 'stock-photo-130949977.jpg', 2, 'dreaming,sleeping,book'),
(18, 'stock-photo-130953589.jpg', 1, 'thunder,lighnting'),
(19, 'stock-photo-130960983.jpg', 4, 'fox,snow,yellow'),
(20, 'stock-photo-130963067.jpg', 2, 'blacknwhite,gray,face,girl,cute'),
(21, 'stock-photo-130974685.jpg', 1, 'tunnel,leaf,fall');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=22;
