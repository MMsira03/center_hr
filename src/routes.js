/*!

=========================================================
* Now UI Dashboard React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

//

import Userform from "views/userform";
import Report from "views/report";
import Position from "views/position";
// import Edit from "views/edit";
import Editposition from "views/edit_position";
import Approve from "views/Approve";



// import Edit_position from "views/edit_po";

const name_department = localStorage.getItem('name_department');
const hr_emp = localStorage.getItem('hr_emp');
const id_position = localStorage.getItem('id_position');

let dashRoutes = []
if(name_department.slice(1, -1) === "DTM" ){
  dashRoutes.push({
   path: "/form",
  // name: `form`,
  name:"form",
   icon: "users_circle-08",
   component: Userform,
   layout: "/admin",
 },
 {
   path: "/report",
   name: "report",
   icon: "ui-1_send",
   component: Report,
   layout: "/admin",
 },
 {
   path: "/position",
   name: "position",
   icon: "ui-1_simple-add",
   component: Position,
   layout:"/admin",
 },
 {
   path: "/edit_position",
   name: "edit position",
   icon: "education_paper",
   component: Editposition,
   layout:"/admin",
 },
//  {
//   path: "/approve",
//  name:"approve",
//   icon: "users_circle-08",
//   component: Approve,
//   layout: "/admin",
// },
 )

 }else if (name_department.slice(1, -1) !== "HRM" && hr_emp.slice(1, -1) !== "รายวัน" && hr_emp.slice(1, -1) !== "รายเดือน"){
   dashRoutes.push(
   {
     path: "/report",
     name: "report",
     icon: "ui-1_send",
     component: Report,
     layout: "/admin",
   }
   )
 }

export default dashRoutes;
