-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 10, 2022 at 05:01 AM
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
(4, 'ฝ่ายโครงสร้างระบบดิจิทัล', 'Digital Transformation Department', 'DT', '7'),
(5, 'ฝ่ายระบบธุรกิจอิเล็กทรอนิกส์', 'E-commerce Business Department', 'EC', '7'),
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
(22, 'ฝ่ายการเงิน', 'Financial Department', 'FND', '14'),
(23, 'ฝ่ายบัญชี', 'Accounting Department ', 'ACM', '14'),
(24, 'ฝ่ายทรัพยากรบุคคล', 'Human Resource Department ', 'HRM', '15'),
(25, 'ฝ่ายธุรการ', 'Administrative Department ', 'ADM', '15');

-- --------------------------------------------------------

--
-- Table structure for table `hr_position`
--

CREATE TABLE `hr_position` (
  `id_position` int(11) NOT NULL,
  `thai_position` text NOT NULL,
  `eng_position` text NOT NULL,
  `id_department` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hr_position`
--

INSERT INTO `hr_position` (`id_position`, `thai_position`, `eng_position`, `id_department`) VALUES
(12, 'รักษาความปลอดภัยและดูแลระบบ', 'Security & Admin System', '4'),
(13, 'ช่างเทคนิคและเครือข่าย', 'IT Technician & Network', '4'),
(14, 'เจ้าหน้าที่ไอที', 'IT Support Officer', '4'),
(15, 'วิศวกรไฟฟ้า', 'Electrical Engineer', '4'),
(16, '', 'Abaper sap', '4'),
(17, 'โปรแกรมเมอร์', 'Web & App Programmer', '4'),
(18, '', 'SAP Functional officer', '4'),
(19, 'โปรแกรมเมอร์', 'Web & App Programmer ', '5'),
(27, 'test', 'test', '10'),
(28, 'ทดสอบระบบ', 'System', '5');

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
(7, 'สายงานดิจิทัลและระบบธุรกิจอิเล็กทรอนิกส์', 'Digital & E-commerce ', 'DED'),
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
  `hr_run_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `project_hr`
--

INSERT INTO `project_hr` (`hr_employeeid`, `hr_employeename`, `hr_surname`, `hr_employee_eng`, `hr_lastname_eng`, `hr_nickname`, `hr_phone`, `id_position`, `id_department`, `hr_job_start`, `hr_email_user`, `hr_password`, `hr_employee_img`, `id_section`, `hr_emp`, `hr_run_id`) VALUES
('64245', 'ทดสอบ', 'ทดสอบ', 'test', 'test', 'เทส', '087121212', '17', '4', '2022-02-09', 'dsdad@fsd.com', '363636', 'image_64245.jpeg', '7', 'รายเดือน', 177),
('69696969', '69', '69', '69', '69', '69', '6969696969696969', '27', '10', '2022-02-09', 'adada@fgd.com', '6969696969', 'image_69696969.png', '10', 'รายวัน', 180),
('33333', '', '', '', '', '', '', '', '', '', '', '', 'image_33333.jpeg', '', '', 182),
('4299', 'ศิรชา', 'ปัญญาอุด', 'Siracha', 'panya-ud', 'เมย์', '0918560296', '19', '5', '2022-02-09', 'siracha5781@gmail.com', '03', 'image_4299.jpeg', '7', 'รายเดือน', 183),
('12121', 'กฟกฟห', 'อิแอแ', 'jgjg', 'nm,n', 'รยนร', '0232323', '27', '10', '2022-02-10', 'sds@dd.co.th', '12121', '', '10', 'รายวัน', 185),
('31', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 186),
('', '', '', '', '', '', '', '', '', '', '', '', 'image_.jpeg', '', '', 187),
('', '', '', '', '', '', '', '', '', '', '', '', 'image_.jpeg', '', '', 188),
('', '', '', '', '', '', '', '', '', '', '', '', 'image_.jpeg', '', '', 189),
('', '', '', '', '', '', '', '', '', '', '', '', 'image_.jpeg', '', '', 190),
('23', '23', '23', '23', '23', '23', '23', '28', '5', '2022-02-10', '23@h.com', '12', 'image_23.jpeg', '7', 'รายเดือน', 191);

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
  MODIFY `id_department` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `hr_position`
--
ALTER TABLE `hr_position`
  MODIFY `id_position` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

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
  MODIFY `hr_run_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=192;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
