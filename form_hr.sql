-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 21, 2022 at 02:26 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `form_hr`
--

-- --------------------------------------------------------

--
-- Table structure for table `hr_department`
--

CREATE TABLE `hr_department` (
  `id_department` int(11) NOT NULL,
  `thai_department` text NOT NULL,
  `eng_department` text NOT NULL,
  `name_department` text NOT NULL,
  `id_section` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hr_department`
--

INSERT INTO `hr_department` (`id_department`, `thai_department`, `eng_department`, `name_department`, `id_section`) VALUES
(4, 'ฝ่ายโครงสร้างระบบดิจิทัล', 'Digital Transformation Department', 'DTM', '7'),
(5, 'ฝ่ายระบบธุรกิจอิเล็กทรอนิกส์', 'E-commerce Business Department', 'ECM', '7'),
(8, 'ฝ่ายวิจัยและพัฒนาผลิตภัณฑ์', 'Research and Development Department', 'RBM', '10'),
(9, 'ฝ่ายห้องปฏิบัติการทดสอบ', 'Laboratory Dapartment', 'LBM', '10'),
(10, 'ฝ่ายคลังสินค้า', 'Warehouse Department ', 'WHM', '10'),
(11, 'ฝ่ายจัดส่ง', 'Logistic Department', 'LGM', '11'),
(12, 'ฝ่ายจัดซื้อและจัดหา', 'Purchasing & Procurement Department ', 'PCM', '11'),
(13, 'ฝ่ายผลิตโรงงาน 1', 'Production Factory 1 Department', 'PDM1', '12'),
(14, 'ฝ่ายผลิตโรงงาน 2', 'Production Factory 2 Department ', 'PDM2', '12'),
(15, 'ฝ่ายผลิตโรงงาน 5 ', 'Prodution Factory 5 Department ', 'PDM5', '12'),
(16, 'ฝ่ายผลิตโรงงาน 7 ', 'Production Factory 7 Department ', 'PDM7', '12'),
(17, 'ฝ่ายวางแผนการผลิต', 'Production Planning Department ', 'PLM', '12'),
(18, 'ฝ่ายวิศวกรรม', 'Engineering Department ', 'ENM', '12'),
(19, 'ฝ่ายประกันคุณภาพและควบคุมคุณภาพ', 'Quality Assurance and Quality Control Department ', 'QAM', '12'),
(20, 'ฝ่ายขาย', 'Sales Department', 'SLM', '13'),
(21, 'ฝ่ายการตลาด', 'Marketing Department', 'MKM', '13'),
(22, 'ฝ่ายการเงิน', 'Financial Department', 'FNM', '14'),
(23, 'ฝ่ายบัญชี', 'Accounting Department ', 'ACM', '14'),
(24, 'ฝ่ายทรัพยากรบุคคล', 'Human Resource Department ', 'HRM', '15'),
(25, 'ฝ่ายธุรการ', 'Administrative Department ', 'ADM', '15'),
(26, 'ผู้อำนวยการ', 'Director', 'Director', '');

-- --------------------------------------------------------

--
-- Table structure for table `hr_position`
--

CREATE TABLE `hr_position` (
  `id_position` int(11) NOT NULL,
  `thai_position` text NOT NULL,
  `eng_position` text NOT NULL,
  `id_section` int(11) NOT NULL,
  `id_department` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hr_position`
--

INSERT INTO `hr_position` (`id_position`, `thai_position`, `eng_position`, `id_section`, `id_department`) VALUES
(37, 'วิศวะไฟฟ้า', 'Electrical Engineer', 7, 4),
(39, 'Abaper SAP', 'Abaper SAP', 7, 4),
(40, 'SAP Functional', 'SAP Functional', 7, 4),
(41, 'เว็บแอพพลิเคชั่น และ โปรแกรมเมอร์', 'Web Application & Programmer', 7, 4),
(42, 'เว็บแอพพลิเคชั่น และ โปรแกรมเมอร์', 'Web Application & Programmer', 7, 5),
(50, 'ผู้อำนวยการ', 'Director', 0, 26),
(51, 'ผู้จัดการ', 'Manager', 0, 0),
(55, 'ปหหหห', 'test', 13, 21),
(56, '', 'fgfhgf', 10, 10),
(57, 'test', 'test', 10, 10),
(58, 'test', '', 12, 17),
(59, 'กหกฟ', 'eeeee', 10, 9),
(60, 'กกกกก', 'wwwww', 14, 23),
(61, 'aaaa', 'aaaa', 12, 15),
(62, 'aaaaaa', 'aaaaa', 14, 22),
(63, 'ูผู้ช่วยผู้จัดการ', 'Asst.Manager', 7, 4),
(64, 'IT Technician & Network', 'IT Technician & Network', 7, 4),
(65, 'IT Support', 'IT Support', 7, 4),
(66, 'หัวหน้าแผนก', 'Supervisor', 7, 5),
(67, 'Sap', 'Sap', 7, 5);

-- --------------------------------------------------------

--
-- Table structure for table `hr_section`
--

CREATE TABLE `hr_section` (
  `id_section` int(11) NOT NULL,
  `thai_section` text NOT NULL,
  `eng_section` text NOT NULL,
  `name_section` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hr_section`
--

INSERT INTO `hr_section` (`id_section`, `thai_section`, `eng_section`, `name_section`) VALUES
(7, 'สายงานดิจิทัลและระบบธุรกิจอิเล็กทรอนิกส์', 'Digital & E-commerce Division', 'DED'),
(9, 'สายงานกิจการระหว่างประเทศ', 'International Corporate Affairs Division ', 'IAD'),
(10, 'สายงานวิจัยและพัฒนาผลิตภัณฑ์', 'Research and Development Division', 'RDD'),
(11, 'สายงานการจัดการห่วงโซ่อุปทาน', 'Supply Chain Management Division', 'SCD'),
(12, 'สายงานปฏิบัติการโรงงาน', 'Operation Division', 'OPD'),
(13, 'สายงานการตลาดและขาย', 'Sales & Marketing Division ', 'SMD'),
(14, 'สายงานบัญชีและการเงิน', 'Accounting & Financial Division', 'AFD'),
(15, 'สายงานทรัพยากรบุคคลและธุรการ', 'Human Resource & Administrative Division ', 'HAD');

-- --------------------------------------------------------

--
-- Table structure for table `main_hr`
--

CREATE TABLE `main_hr` (
  `main_hr_id` int(11) NOT NULL,
  `id_section` int(11) NOT NULL,
  `id_department` int(11) NOT NULL,
  `id_position` int(11) NOT NULL,
  `hr_run_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `project_hr`
--

CREATE TABLE `project_hr` (
  `hr_employeeid` text NOT NULL,
  `hr_employeename` text NOT NULL,
  `hr_surname` text NOT NULL,
  `hr_employee_eng` text NOT NULL,
  `hr_lastname_eng` text NOT NULL,
  `hr_nickname` text NOT NULL,
  `hr_phone` text NOT NULL,
  `id_position` text NOT NULL,
  `id_department` text NOT NULL,
  `hr_job_start` text NOT NULL,
  `hr_email_user` text NOT NULL,
  `hr_password` text NOT NULL,
  `hr_employee_img` text NOT NULL,
  `id_section` text NOT NULL,
  `hr_emp` text NOT NULL,
  `hr_run_id` int(11) NOT NULL,
  `number_emp` text NOT NULL,
  `status_emp` text NOT NULL,
  `job_out` text NOT NULL,
  `birthday_emp` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `project_hr`
--

INSERT INTO `project_hr` (`hr_employeeid`, `hr_employeename`, `hr_surname`, `hr_employee_eng`, `hr_lastname_eng`, `hr_nickname`, `hr_phone`, `id_position`, `id_department`, `hr_job_start`, `hr_email_user`, `hr_password`, `hr_employee_img`, `id_section`, `hr_emp`, `hr_run_id`, `number_emp`, `status_emp`, `job_out`, `birthday_emp`) VALUES
('12', 'k', '1', '1', '1', '1', '1', '40', '4', '2022-03-11', 'cfdgd@sd.com', '1111', 'image_12.png', '7', 'รายเดือน', 262, '212', 'ทำงานอยู่', '', '2022-03-10'),
('123456', 'ตรีเกษม', 'สิงห์โตแก้ว', 'Treekasem', 'Singtokaew', 'อ๊าฟ', '0904298893', '41', '4', '2022-03-10', 'aph_549@gmail.com', '123456', 'image_123456.png', '7', 'รายเดือน', 263, '', 'ทำงานอยู่', '', '2022-03-10'),
('999', '11', '222', '222', '222', '222', '22222', '60', '23', '2022-03-10', '', '2222222222', '', '14', 'รายเดือน', 264, '1222', 'ทำงานอยู่', '', '2022-03-29'),
('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 265, '', 'ทำงานอยู่', '', ''),
('', '', '', '', '', '', '', '', '', '', '', '45', '', '', '', 266, '', 'ทำงานอยู่', '', ''),
('55', '4', '4', '4', '4', '4', '444', '60', '23', '2022-03-10', '', '55', 'image_55.png', '14', 'รายเดือน', 267, '55', 'ทำงานอยู่', '', '2022-03-21'),
('1', '1', '1', '1', '1', '1', '1', '50', '26', '2022-03-10', '', '1', '', '7', 'ผู้อำนวยการ', 268, '1', 'ทำงานอยู่', '', '2022-01-08'),
('789', 'บ', 'บ', 'บ', 'บ', 'บ', '789', '63', '4', '2022-03-11', 'adsads@fs.com', '789', 'image_789.jpeg', '7', 'ผู้ช่วยผู้จัดการ', 269, '789', 'ทำงานอยู่', '', '2022-03-10'),
('222', 'แสงเดือน', 'เพ็ชรประดิษฐ', 'แสงเดือน', 'เพ็ชรประดิษฐ', 'พี่แมว', '081-625-4198', '50', '26', '2022-03-11', 'saaaa@das.com', '222', 'image_222.png', '7', 'ผู้อำนวยการ', 270, '2222', 'ทำงานอยู่', '', '2022-03-03'),
('333', 'อาทิตย์', 'อาพันธ์', 'อาทิตย์', 'อาพันธ์', 'พี่เอ็ม', '087-666-4435', '63', '4', '2022-03-11', 'it@veninecable.com', '333', 'image_333.png', '7', 'ผู้ช่วยผู้จัดการ', 271, '333', 'ทำงานอยู่', '', '2022-03-11'),
('444', 'โกมล', 'เกษพาณิช', 'โกมล', 'เกษพาณิช', 'พี่ตูน', '085-939-7683', '64', '4', '2022-03-11', 'it@veninecable.com', '444', 'image_444.png', '7', 'รายเดือน', 272, '444', 'ทำงานอยู่', '', '2022-01-20'),
('555', 'อารดา', 'วันทนาสินธุ์', 'อารดา', 'วันทนาสิทธุ์', 'พี่นัท', '08999999', '65', '4', '2022-03-11', 'it@veninecable.com', '555', 'image_555.png', '7', 'รายเดือน', 273, '555', 'ทำงานอยู่', '', '2022-04-07'),
('666', 'ธนานันท์', 'รอดแผ้วพาล', 'ธนานันท์', 'รอดแผ้วพาล', 'พี่หนุ่ม', '080-286-6239', '39', '4', '2022-03-11', 'it@veninecable.com', '666', 'image_666.png', '7', 'รายเดือน', 274, '666', 'ทำงานอยู่', '', '2022-04-01'),
('777', 'ตรีเกษม', 'สิงห์โตแก้ว', 'ตรีเกษม', 'สิงห์โตแก้ว', 'พี่อ๊าฟ', '090-429-8893', '41', '4', '2022-03-11', 'it@veninecable.com', '777', 'image_777.png', '7', 'รายเดือน', 275, '777', 'ทำงานอยู่', '', '2022-03-20'),
('888', 'ศิรชา', 'ปัญญาอุด', 'siracha', 'panya-ud', 'เมย์', '091-856-0296', '42', '5', '2022-03-11', 'it@veninecable.com', '', 'image_888.png', '7', 'รายเดือน', 277, '888', 'ลาออก', '2022-03-31', '1999-04-03'),
('9', 'วาสนา', 'ภิญโญ', 'วาสนา', 'ภิญโญ', 'พี่โอ', '08444444444', '66', '5', '2022-03-11', 'it@veninecable.com', '9', 'image_9.png', '7', 'รายเดือน', 278, '9', 'ทำงานอยู่', '', '2022-03-11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hr_department`
--
ALTER TABLE `hr_department`
  ADD PRIMARY KEY (`id_department`);

--
-- Indexes for table `hr_position`
--
ALTER TABLE `hr_position`
  ADD PRIMARY KEY (`id_position`);

--
-- Indexes for table `hr_section`
--
ALTER TABLE `hr_section`
  ADD PRIMARY KEY (`id_section`);

--
-- Indexes for table `main_hr`
--
ALTER TABLE `main_hr`
  ADD PRIMARY KEY (`main_hr_id`);

--
-- Indexes for table `project_hr`
--
ALTER TABLE `project_hr`
  ADD PRIMARY KEY (`hr_run_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hr_department`
--
ALTER TABLE `hr_department`
  MODIFY `id_department` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `hr_position`
--
ALTER TABLE `hr_position`
  MODIFY `id_position` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `hr_section`
--
ALTER TABLE `hr_section`
  MODIFY `id_section` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `main_hr`
--
ALTER TABLE `main_hr`
  MODIFY `main_hr_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `project_hr`
--
ALTER TABLE `project_hr`
  MODIFY `hr_run_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=279;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
