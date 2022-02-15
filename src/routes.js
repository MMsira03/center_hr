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
//

import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/TableList.js";
import Maps from "views/Maps.js";
import Upgrade from "views/Upgrade.js";
import UserPage from "views/UserPage.js";
import Userform from "views/userform";
import Report from "views/report";
import Position from "views/position";
import Edit from "views/edit";
import Reportposition from "views/report_position";
import Position_ed from "views/position_ed";


var dashRoutes = [
  {
    path: "/userform",
    name: "form",
    icon: "users_single-02",
    component: Userform,
    layout: "/admin",
  },
  {
    path: "/report",
    name: "report",
    icon: "files_paper",
    component: Report,
    layout: "/admin",
  },
  {
    path: "/position",
    name: "position",
    icon: "design-2_ruler-pencil",
    component: Position,
    layout:"/admin",
  },
  {
    path: "/report_position",
    name: "repost position",
    icon: "design-2_ruler-pencil",
    component: Reportposition,
    layout:"/admin",
  },
  {
    path: "/Position_ed",
    name: "แก้ไขตำแหน่ง",
    icon: "design-2_ruler-pencil",
    component: Position_ed,
    layout:"/admin",
  },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "location_map-big",
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "ui-1_bell-53",
  //   component: Notifications,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user-page",
  //   name: "User Profile",
  //   icon: "users_single-02",
  //   component: UserPage,
  //   layout: "/admin",
  // },
  // {
  //   path: "/extended-tables",
  //   name: "Table List",
  //   icon: "files_paper",
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "design-2_ruler-pencil",
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "objects_spaceship",
  //   component: Upgrade,
  //   layout: "/admin",
  // },
];
export default dashRoutes;
