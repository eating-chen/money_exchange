-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- 主機: localhost:8889
-- 產生時間： 2019 年 08 月 29 日 15:24
-- 伺服器版本: 5.7.23
-- PHP 版本： 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `money_change`
--

-- --------------------------------------------------------

--
-- 資料表結構 `exchange`
--

CREATE TABLE `exchange` (
  `country` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `exchange_rate` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 資料表的匯出資料 `exchange`
--

INSERT INTO `exchange` (`country`, `exchange_rate`) VALUES
('AUD', 21.58),
('CAD', 24.02),
('CHF', 32.37),
('GBP', 39.42),
('HKD', 4.051),
('JPY', 0.3007),
('SGD', 22.95),
('USD', 31.685);

--
-- 已匯出資料表的索引
--

--
-- 資料表索引 `exchange`
--
ALTER TABLE `exchange`
  ADD PRIMARY KEY (`country`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
