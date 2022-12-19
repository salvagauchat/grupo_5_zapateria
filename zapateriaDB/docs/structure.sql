-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-11-2022 a las 01:00:04
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `structure`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

CREATE TABLE `brands` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Nike', NULL, NULL),
(2, 'Adidas', NULL, NULL),
(3, 'Topper', NULL, NULL),
(4, 'Puma', NULL, NULL),
(5, 'Asics', NULL, NULL),
(6, 'Reebok', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carts`
--

CREATE TABLE `carts` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `userId` int(10) UNSIGNED DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `carts`
--

INSERT INTO `carts` (`id`, `name`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, '', 8, '2022-11-08 21:12:53', '2022-11-08 21:12:53');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Running', NULL, NULL),
(2, 'Fútbol', NULL, NULL),
(3, 'Street', NULL, NULL),
(4, 'Verano', NULL, NULL),
(5, 'Hockey', NULL, NULL),
(6, 'Básquet', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colors`
--

CREATE TABLE `colors` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `colors`
--

INSERT INTO `colors` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Blanco', NULL, NULL),
(2, 'Negro', NULL, NULL),
(3, 'Amarillo', NULL, NULL),
(4, 'Violeta', NULL, NULL),
(5, 'Rojo', NULL, NULL),
(6, 'Azul', NULL, NULL),
(7, 'verde', NULL, NULL),
(8, 'Rosa', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gender`
--

CREATE TABLE `gender` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `gender`
--

INSERT INTO `gender` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Masculino', NULL, NULL),
(2, 'Femenino', NULL, NULL),
(3, 'Unisex', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productcart`
--

CREATE TABLE `productcart` (
  `id` int(10) UNSIGNED NOT NULL,
  `productId` int(10) UNSIGNED DEFAULT NULL,
  `cartId` int(10) UNSIGNED DEFAULT NULL,
  `productPrice` decimal(8,2) DEFAULT NULL,
  `quantity` int(10) UNSIGNED DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `productcart`
--

INSERT INTO `productcart` (`id`, `productId`, `cartId`, `productPrice`, `quantity`, `createdAt`, `updatedAt`) VALUES
(1, 18, 1, NULL, NULL, '2022-11-08 21:12:53', '2022-11-08 21:12:53');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productcategory`
--

CREATE TABLE `productcategory` (
  `id` int(10) UNSIGNED NOT NULL,
  `productId` int(10) UNSIGNED DEFAULT NULL,
  `categoryId` int(10) UNSIGNED DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `productcategory`
--

INSERT INTO `productcategory` (`id`, `productId`, `categoryId`, `createdAt`, `updatedAt`) VALUES
(17, 16, 1, '2022-03-22 02:52:50', '2022-03-22 02:52:50'),
(18, 17, 1, '2022-03-22 14:50:59', '2022-03-22 14:50:59'),
(19, 18, 3, '2022-03-22 14:52:09', '2022-03-22 14:52:09'),
(20, 19, 1, '2022-03-22 14:53:10', '2022-03-22 14:53:10'),
(21, 20, 1, '2022-03-22 14:56:15', '2022-03-22 14:56:15'),
(22, 21, 1, '2022-03-22 14:58:11', '2022-03-22 14:58:11'),
(23, 21, 3, '2022-03-22 14:58:11', '2022-03-22 14:58:11'),
(24, 22, 1, '2022-03-22 15:00:29', '2022-03-22 15:00:29'),
(25, 23, 3, '2022-03-22 15:02:05', '2022-03-22 15:02:05'),
(28, 25, 1, '2022-03-22 15:04:57', '2022-03-22 15:04:57'),
(29, 26, 1, '2022-03-22 15:05:52', '2022-03-22 15:05:52');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productcolor`
--

CREATE TABLE `productcolor` (
  `id` int(10) UNSIGNED NOT NULL,
  `productId` int(10) UNSIGNED DEFAULT NULL,
  `colorId` int(10) UNSIGNED DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `productcolor`
--

INSERT INTO `productcolor` (`id`, `productId`, `colorId`, `createdAt`, `updatedAt`) VALUES
(9, 16, 6, '2022-03-22 02:52:50', '2022-03-22 02:52:50'),
(10, 17, 1, '2022-03-22 14:50:59', '2022-03-22 14:50:59'),
(11, 17, 2, '2022-03-22 14:50:59', '2022-03-22 14:50:59'),
(12, 17, 3, '2022-03-22 14:50:59', '2022-03-22 14:50:59'),
(13, 18, 1, '2022-03-22 14:52:09', '2022-03-22 14:52:09'),
(14, 18, 2, '2022-03-22 14:52:09', '2022-03-22 14:52:09'),
(15, 18, 5, '2022-03-22 14:52:09', '2022-03-22 14:52:09'),
(16, 18, 6, '2022-03-22 14:52:09', '2022-03-22 14:52:09'),
(17, 19, 1, '2022-03-22 14:53:10', '2022-03-22 14:53:10'),
(18, 19, 2, '2022-03-22 14:53:10', '2022-03-22 14:53:10'),
(19, 20, 1, '2022-03-22 14:56:15', '2022-03-22 14:56:15'),
(20, 20, 2, '2022-03-22 14:56:15', '2022-03-22 14:56:15'),
(21, 21, 1, '2022-03-22 14:58:11', '2022-03-22 14:58:11'),
(22, 21, 2, '2022-03-22 14:58:11', '2022-03-22 14:58:11'),
(23, 21, 5, '2022-03-22 14:58:11', '2022-03-22 14:58:11'),
(24, 21, 6, '2022-03-22 14:58:11', '2022-03-22 14:58:11'),
(25, 22, 1, '2022-03-22 15:00:29', '2022-03-22 15:00:29'),
(26, 22, 3, '2022-03-22 15:00:29', '2022-03-22 15:00:29'),
(27, 22, 4, '2022-03-22 15:00:29', '2022-03-22 15:00:29'),
(28, 22, 5, '2022-03-22 15:00:29', '2022-03-22 15:00:29'),
(29, 22, 6, '2022-03-22 15:00:29', '2022-03-22 15:00:29'),
(30, 23, 1, '2022-03-22 15:02:05', '2022-03-22 15:02:05'),
(31, 23, 2, '2022-03-22 15:02:05', '2022-03-22 15:02:05'),
(32, 23, 4, '2022-03-22 15:02:05', '2022-03-22 15:02:05'),
(36, 25, 1, '2022-03-22 15:04:57', '2022-03-22 15:04:57'),
(37, 25, 2, '2022-03-22 15:04:57', '2022-03-22 15:04:57'),
(38, 26, 1, '2022-03-22 15:05:52', '2022-03-22 15:05:52'),
(39, 26, 2, '2022-03-22 15:05:52', '2022-03-22 15:05:52'),
(40, 26, 3, '2022-03-22 15:05:52', '2022-03-22 15:05:52'),
(41, 26, 4, '2022-03-22 15:05:52', '2022-03-22 15:05:52'),
(42, 26, 5, '2022-03-22 15:05:52', '2022-03-22 15:05:52');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT 'no-image.png',
  `description` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `brandId` int(10) UNSIGNED DEFAULT NULL,
  `genderId` int(10) UNSIGNED DEFAULT NULL,
  `userId` int(10) UNSIGNED DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`, `description`, `brandId`, `genderId`, `userId`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(16, 'ELIMINAR', '12999.00', '1647917570739_img.jpg', 'Calzado Botines Nike Jr Superfly Vii Elite Fg De Fútbol', 1, 3, NULL, '2022-03-22 02:52:50', '2022-03-22 02:52:50', '2022-03-22 15:14:05'),
(17, 'Zapatillas Nike Running Revolution', '20000.00', '1647960659577_img.jpg', 'Zapatillas de diseño clásico ideales para running ', 1, 3, NULL, '2022-03-22 14:50:59', '2022-03-22 14:50:59', NULL),
(18, 'Zapatilla Adidas Hoops', '18000.00', '1647960728991_img.jpg', 'Zapatillas de diseño clásico retro ideales para utilizar en tu día a día gracias a su comodidad', 2, 1, NULL, '2022-03-22 14:52:08', '2022-03-22 14:52:08', NULL),
(19, 'Zapatillas Adidas Run Falcon', '19400.00', '1647960790679_img.jpg', 'Zapatillas cómodas, ideales para realizar running o una caminata', 2, 2, NULL, '2022-03-22 14:53:10', '2022-03-22 14:53:10', NULL),
(20, 'Zapatilla Adidas Hoops 2.0', '20000.00', '1647960975061_img.jpg', 'Zapatillas de diseño clásico retro ideales para utilizar en tu día a día gracias a su comodidad', 2, 1, NULL, '2022-03-22 14:56:15', '2022-03-22 14:56:15', NULL),
(21, 'Zapatilla Puma Retaliate', '22400.00', '1647961091195_img.jpg', 'Zapatilla cómoda, de diseño moderno que se adapta de manera excelente a los pies de cualquier atleta', 4, 3, NULL, '2022-03-22 14:58:11', '2022-03-22 14:58:11', NULL),
(22, 'Zapatilla Reebok Rewind', '19400.00', '1647961229091_img.jpg', 'El upper mantiene su fidelidad a los orígenes en cuanto a estética se refiere, respecto a los materiales utilizado, se ha dado paso a un piel sintética más ligera, cuyo interior esta reforzado con un forro textil muy suave al tacto.', 6, 2, NULL, '2022-03-22 15:00:29', '2022-03-22 15:00:29', NULL),
(23, 'Zapatilla Reebok Gilde Riple', '24500.00', '1647961325612_img.jpg', 'El upper mantiene su fidelidad a los orígenes en cuanto a estética se refiere, respecto a los materiales utilizado, se ha dado paso a un piel sintética más ligera, cuyo interior esta reforzado con un forro textil muy suave al tacto.', 6, 2, NULL, '2022-03-22 15:02:05', '2022-03-22 15:02:05', NULL),
(24, 'Zapatillas Nike Court Vision Mid', '29999.00', '1647961390337_img.jpg', 'Zapatillas estilo Basket que se desempeñan no solo de manera excelente en las canchas, sino que también brindan un diseño \"cool\" que se adapta a cualquier vestimenta street ', 1, 3, NULL, '2022-03-22 15:03:10', '2022-03-23 23:44:53', NULL),
(25, 'Zapatillas Puma Running Enzo', '21199.00', '1647961497008_img.jpg', 'Zapatillas de diseño ergonómico que de adapta perfectamente a tus entrenamientos.', 4, 3, NULL, '2022-03-22 15:04:57', '2022-03-22 15:04:57', NULL),
(26, 'Zapatilla Aesic Trail Lite', '18999.00', '1647961552632_img.jpg', 'Zapatillas cómodas, ideales para realizar running o una caminata', 5, 2, NULL, '2022-03-22 15:05:52', '2022-03-22 15:05:52', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productsize`
--

CREATE TABLE `productsize` (
  `id` int(10) UNSIGNED NOT NULL,
  `productId` int(10) UNSIGNED DEFAULT NULL,
  `sizeId` int(10) UNSIGNED DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `productsize`
--

INSERT INTO `productsize` (`id`, `productId`, `sizeId`, `createdAt`, `updatedAt`) VALUES
(16, 16, 6, '2022-03-22 02:52:50', '2022-03-22 02:52:50'),
(17, 16, 7, '2022-03-22 02:52:50', '2022-03-22 02:52:50'),
(18, 16, 8, '2022-03-22 02:52:50', '2022-03-22 02:52:50'),
(19, 17, 1, '2022-03-22 14:50:59', '2022-03-22 14:50:59'),
(20, 17, 3, '2022-03-22 14:50:59', '2022-03-22 14:50:59'),
(21, 17, 5, '2022-03-22 14:50:59', '2022-03-22 14:50:59'),
(22, 17, 6, '2022-03-22 14:50:59', '2022-03-22 14:50:59'),
(23, 17, 7, '2022-03-22 14:50:59', '2022-03-22 14:50:59'),
(24, 18, 4, '2022-03-22 14:52:09', '2022-03-22 14:52:09'),
(25, 18, 6, '2022-03-22 14:52:09', '2022-03-22 14:52:09'),
(26, 18, 7, '2022-03-22 14:52:09', '2022-03-22 14:52:09'),
(27, 18, 8, '2022-03-22 14:52:09', '2022-03-22 14:52:09'),
(28, 18, 9, '2022-03-22 14:52:09', '2022-03-22 14:52:09'),
(29, 19, 1, '2022-03-22 14:53:10', '2022-03-22 14:53:10'),
(30, 19, 5, '2022-03-22 14:53:10', '2022-03-22 14:53:10'),
(31, 19, 6, '2022-03-22 14:53:10', '2022-03-22 14:53:10'),
(32, 19, 7, '2022-03-22 14:53:10', '2022-03-22 14:53:10'),
(33, 19, 8, '2022-03-22 14:53:10', '2022-03-22 14:53:10'),
(34, 19, 9, '2022-03-22 14:53:10', '2022-03-22 14:53:10'),
(35, 20, 1, '2022-03-22 14:56:15', '2022-03-22 14:56:15'),
(36, 20, 2, '2022-03-22 14:56:15', '2022-03-22 14:56:15'),
(37, 20, 3, '2022-03-22 14:56:15', '2022-03-22 14:56:15'),
(38, 20, 4, '2022-03-22 14:56:15', '2022-03-22 14:56:15'),
(39, 20, 5, '2022-03-22 14:56:15', '2022-03-22 14:56:15'),
(40, 21, 1, '2022-03-22 14:58:11', '2022-03-22 14:58:11'),
(41, 21, 2, '2022-03-22 14:58:11', '2022-03-22 14:58:11'),
(42, 21, 3, '2022-03-22 14:58:11', '2022-03-22 14:58:11'),
(43, 21, 4, '2022-03-22 14:58:11', '2022-03-22 14:58:11'),
(44, 22, 1, '2022-03-22 15:00:29', '2022-03-22 15:00:29'),
(45, 22, 2, '2022-03-22 15:00:29', '2022-03-22 15:00:29'),
(46, 22, 3, '2022-03-22 15:00:29', '2022-03-22 15:00:29'),
(47, 22, 4, '2022-03-22 15:00:29', '2022-03-22 15:00:29'),
(48, 22, 5, '2022-03-22 15:00:29', '2022-03-22 15:00:29'),
(49, 23, 6, '2022-03-22 15:02:05', '2022-03-22 15:02:05'),
(50, 23, 7, '2022-03-22 15:02:05', '2022-03-22 15:02:05'),
(51, 23, 8, '2022-03-22 15:02:05', '2022-03-22 15:02:05'),
(52, 23, 9, '2022-03-22 15:02:05', '2022-03-22 15:02:05'),
(64, 25, 7, '2022-03-22 15:04:57', '2022-03-22 15:04:57'),
(65, 25, 8, '2022-03-22 15:04:57', '2022-03-22 15:04:57'),
(66, 25, 9, '2022-03-22 15:04:57', '2022-03-22 15:04:57'),
(67, 26, 1, '2022-03-22 15:05:52', '2022-03-22 15:05:52'),
(68, 26, 2, '2022-03-22 15:05:52', '2022-03-22 15:05:52'),
(69, 26, 3, '2022-03-22 15:05:52', '2022-03-22 15:05:52'),
(70, 26, 4, '2022-03-22 15:05:52', '2022-03-22 15:05:52'),
(71, 26, 5, '2022-03-22 15:05:52', '2022-03-22 15:05:52');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sizes`
--

CREATE TABLE `sizes` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sizes`
--

INSERT INTO `sizes` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, '35', NULL, NULL),
(2, '36', NULL, NULL),
(3, '37', NULL, NULL),
(4, '38', NULL, NULL),
(5, '39', NULL, NULL),
(6, '40', NULL, NULL),
(7, '41', NULL, NULL),
(8, '42', NULL, NULL),
(9, '43', NULL, NULL),
(10, '44', NULL, NULL),
(11, '45', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT 'no-image.png',
  `cartId` int(10) UNSIGNED DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `image`, `cartId`, `createdAt`, `updatedAt`, `deletedAt`) VALUES

(1, 'Stefano', 'stefano@gmail.com', '$2a$10$kOpZvjgrJrrBvjkXFG5BI.MoO2g6J2dExXkZ777E84YsOPkgfKAva', '1667937678568_img.png', NULL, '2022-11-08 20:01:18', '2022-11-08 20:01:18', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `gender`
--
ALTER TABLE `gender`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productcart`
--
ALTER TABLE `productcart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`),
  ADD KEY `cartId` (`cartId`);

--
-- Indices de la tabla `productcategory`
--
ALTER TABLE `productcategory`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indices de la tabla `productcolor`
--
ALTER TABLE `productcolor`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`),
  ADD KEY `colorId` (`colorId`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `brandId` (`brandId`);

--
-- Indices de la tabla `productsize`
--
ALTER TABLE `productsize`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`),
  ADD KEY `sizeId` (`sizeId`);

--
-- Indices de la tabla `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `cartId` (`cartId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `gender`
--
ALTER TABLE `gender`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `productcart`
--
ALTER TABLE `productcart`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `productcategory`
--
ALTER TABLE `productcategory`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `productcolor`
--
ALTER TABLE `productcolor`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `productsize`
--
ALTER TABLE `productsize`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT de la tabla `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `productcart`
--
ALTER TABLE `productcart`
  ADD CONSTRAINT `productcart_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `productcart_ibfk_2` FOREIGN KEY (`cartId`) REFERENCES `carts` (`id`);

--
-- Filtros para la tabla `productcategory`
--
ALTER TABLE `productcategory`
  ADD CONSTRAINT `productcategory_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `productcategory_ibfk_2` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`);

--
-- Filtros para la tabla `productcolor`
--
ALTER TABLE `productcolor`
  ADD CONSTRAINT `productcolor_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `productcolor_ibfk_2` FOREIGN KEY (`colorId`) REFERENCES `colors` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brandId`) REFERENCES `brands` (`id`);

--
-- Filtros para la tabla `productsize`
--
ALTER TABLE `productsize`
  ADD CONSTRAINT `productsize_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `productsize_ibfk_2` FOREIGN KEY (`sizeId`) REFERENCES `sizes` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `cartId` FOREIGN KEY (`cartId`) REFERENCES `carts` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
