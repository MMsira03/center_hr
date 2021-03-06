const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.static("files"));
app.use(express.urlencoded({ extended: true }));

const mysql = require("mysql");
app.use(express.json());
var cors = require("cors");
app.use(cors());
const fileupload = require("express-fileupload");
const { result } = require("lodash");
const { response, request } = require("express");
const { data } = require("jquery");
const { Select } = require("antd");
const sharp = require("sharp");
const { clearScreenDown } = require("readline");
const bcrypt = require("bcryptjs");

app.use(fileupload());
app.use(express.static("files"));
app.use(express.urlencoded({ extended: true }));
//file รูปภาพ
// app.use(express.static("files"));

const port = 4000; //กำหนด  port ของ server

//Database Connect
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "form_hr",
});
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});
global.db = db;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

app.post("/post_form_hr", (req, res) => {
  let hr_employeeid = req.body.hr_employeeid;
  let hr_job_start = req.body.hr_job_start;
  let hr_employeename = req.body.hr_employeename;
  let hr_surname = req.body.hr_surname;
  let hr_employee_eng = req.body.hr_employee_eng;
  let hr_lastname_eng = req.body.hr_lastname_eng;
  let hr_nickname = req.body.hr_nickname;
  let hr_phone = req.body.hr_phone;
  //let hr_position = req.body.hr_position;
  // let hr_department = req.body.hr_department;

  let hr_email_user = req.body.hr_email_user;
  let hr_password = req.body.hr_password;
  //let hr_section = req.body.hr_section;
  let hr_employee_img = req.body.hr_employee_img;
  let hr_emp = req.body.hr_emp;
  let id_section = req.body.id_section;
  let id_department = req.body.id_department;
  let id_position = req.body.id_position;
  let number_emp = req.body.number_emp;
  let birthday_emp = req.body.birthday_emp;

  let status_emp = "ทำงานอยู่";

  let insert_project_hr =
    "insert into project_hr(hr_employeeid,hr_job_start,hr_employeename,hr_surname,hr_employee_eng,hr_lastname_eng,hr_nickname,hr_phone, hr_email_user, hr_password, hr_employee_img,hr_emp,id_section,id_department,id_position,number_emp,status_emp,birthday_emp)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  let array_project_hr = [
    hr_employeeid,
    hr_job_start,
    hr_employeename,
    hr_surname,
    hr_employee_eng,
    hr_lastname_eng,
    hr_nickname,
    hr_phone,
    hr_email_user,
    hr_password,
    hr_employee_img,
    hr_emp,
    id_section,
    id_department,
    id_position,
    number_emp,
    status_emp,
    birthday_emp,
  ];

  db.query(insert_project_hr, array_project_hr, (err, result) => {
    if (err) {
      console.log(err);
      res.send({
        message: "เพิ่มข้อมูลไม่สำเร็จ",
      });
    } else {
      console.log(result);
      res.send({
        status: "ok",
        message: "เพิ่มข้อมูลสำเร็จ",
        id: result.insertId,
      });
    }
  });
});

//=========== import file image database ========= //
app.post("/upload", (req, res) => {
  // console.log("file")
  if (!req.files) {
    console.log("No image");
    res.redirect("/");
  } else {
    // console.log(hr_employeeid)

    //resize รูปจ้าาา เอดวก
    const newpath = __dirname + "/files/";
    const file = req.files.file;

    let hr_employeeid = req.body.hr_employeeid;
    const filename = "image_" + hr_employeeid;
    const filetype = file.mimetype.split("/")[1];
    const file_success = filename + "." + filetype;

    // sharp(file_success.path)
    //   .resize({ width: 236, height: 236, withoutEnlargement: true })
    //   .toFile(file_success, (err) => {
    //     response.render();
    //   });

    file.mv(`${newpath}${file_success}`, (err) => {
      if (err) {
        res.status(500);
      }
      res.send(req.files);
    });

    let update_main =
      "UPDATE  project_hr set hr_employee_img = '" +
      file_success +
      "' where hr_employeeid = '" +
      hr_employeeid +
      "' ";
    db.query(update_main, (err, result) => {
      if (err) {
        console.log(err);
        res.redirect("/");
      }
    });
  }
});

//=========== import file edit ========= //
app.post("/upload_edit", (req, res) => {
  if (!req.files) {
    console.log("ไม่มีรูป");
  } else {
    let hr_run_id = req.body.hr_run_id;
    console.log("มีรูป");
    console.log(hr_run_id);
    const file = req.files.file;
    const newpath = __dirname + "/files/";
    const filename = "image_" + hr_run_id;
    const filetype = file.mimetype.split("/")[1];
    const file_success = filename + "." + filetype;
    const old_image = req.body.old_image;
    console.log(old_image);
    console.log(filename);

    fs.unlink(`${newpath}${old_image}`, (err) => {
      if (err) {
      }
    });

    file.mv(`${newpath}${file_success}`, (err) => {
      if (err) {
        res.status(500);
      }
      res.send(req.files);
    });

    let update_main =
      "UPDATE project_hr set hr_employee_img = '" +
      file_success +
      "' where hr_run_id = '" +
      hr_run_id +
      "' ";
    db.query(update_main, (err, result) => {
      if (err) {
        console.log(err);
      }
    });
  }
});

app.get("/post_form_hr", (req, res) => {
  db.query(
    "SELECT project_hr.*,hr_section.eng_section,hr_department.eng_department,hr_position.eng_position,hr_section.name_section FROM project_hr INNER JOIN hr_section ON project_hr.id_section = hr_section.id_section INNER JOIN hr_department ON project_hr.id_department = hr_department.id_department INNER JOIN hr_position ON project_hr.id_position = hr_position.id_position ORDER BY project_hr.hr_run_id DESC",
    (err, result) => {
      //("SELECT project_hr.* , hr_department.thai_department FROM `project_hr` inner join hr_department on project_hr.id_department = hr_department.id_department;", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        let img = "/";
        res.send(result);
        // res.send({

        // })
      }
    }
  );
});
app.get("/port_section", (req, res) => {
  db.query("SELECT * FROM hr_section", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      let section = result;

      db.query("SELECT * FROM hr_department", (err, result) => {
        if (err) {
          console.log(err);
        } else {
          let department = result;

          db.query("SELECT * from hr_position", (err, result) => {
            if (err) {
              console.log(err);
            } else {
              let position = result;
              res.send({
                section: section,
                department: department,
                position: position,
              });
            }
          });
        }
      });
    }
  });
});

// app.use(express.static('files'));
// app.use('/uploads',express.static('files'));

//========== file image

//======= select ข้อมูล hr
app.get("/set_project_hr/:id", (req, res) => {
  let id = req.params.id;
  db.query(
    "SELECT project_hr.*,hr_section.eng_section,hr_department.eng_department,hr_position.eng_position FROM project_hr INNER JOIN hr_section ON project_hr.id_section = hr_section.id_section INNER JOIN hr_department ON project_hr.id_department = hr_department.id_department INNER JOIN hr_position ON project_hr.id_position = hr_position.id_position where project_hr.hr_run_id = '" +
      id +
      "' ORDER BY project_hr.hr_run_id DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result[0]);
      }
    }
  );
});
//แก้ไข ลบ position=======
app.get("/post_addposition_edit", (req, res) => {
  db.query(
    "SELECT hr_position.*,hr_section.id_section,hr_department.id_department,hr_section.eng_section,hr_department.eng_department FROM hr_position INNER JOIN hr_section ON hr_position.id_section = hr_section.id_section INNER JOIN hr_department ON hr_position.id_department = hr_department.id_department where hr_position.id_position ORDER BY hr_section.id_section DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        let img = "/";
        res.send(result);
        // res.send({

        // })
      }
    }
  );
});

// app.get(
//   "/addposition_edit/:id_section/:id_department/:id_position",
//   (req, res) => {
//     let id_section = req.params.id_section;
//     let id_department = req.params.id_department;
//     let id_position = req.params.id_position;

//     console.log(id_section)

//     db.query(
//       "SELECT hr_position.*,hr_section.id_section,hr_department.id_department,hr_section.eng_section,hr_department.eng_department FROM hr_position INNER JOIN hr_section ON hr_position.id_section = hr_section.id_section INNER JOIN hr_department ON hr_position.id_department = hr_department.id_department where hr_position.id_position = '" +
//         id_position +
//         "' and hr_department.id_department = '" +
//         id_department +
//         "' and hr_section.id_section = '" +
//         id_section +
//         "' ",
//       (err, result) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(result);
//           res.send(result[0]);
//         }
//       }
//     );
//   }
// );

//=======Dynamic_สายงาน
app.get("/dynamic_section", (req, res) => {
  db.query("SELECT * from hr_section", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//Dynamic ฝ่ายงาน
app.get("/dynamic_department/:id_section", (req, res) => {
  let id_section = req.params.id_section;
  db.query(
    "SELECT * from hr_department where id_section = '" + id_section + "' ",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//Dynamic ตำแหน่ง
app.get("/dynamic_position/:id_department", (req, res) => {
  let id_department = req.params.id_department;
  db.query(
    "SELECT * from hr_position where id_department = '" + id_department + "' ",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/post_addposition", (req, res) => {
  let id_section = req.body.id_section;
  let id_department = req.body.id_department;
  let thai_position = req.body.thai_position;
  let eng_position = req.body.eng_position;

  let insert_hr_position =
    "insert into hr_position(id_section,id_department,thai_position,eng_position)values(?,?,?,?)";
  let array_hr_position = [
    id_section,
    id_department,
    thai_position,
    eng_position,
  ];
  db.query(insert_hr_position, array_hr_position, (err, result) => {
    if (err) {
      console.log(err);
      res.send({
        message: "เพิ่มข้อมูลไม่สำเร็จ",
      });
    } else {
      res.send({
        status: "ok",
        message: "เพิ่มข้อมูลสำเร็จ",
      });
    }
  });
});

app.post("/post_form_hr_edit", (req, res) => {
  let hr_employeeid_edit = req.body.hr_employeeid_edit;
  let hr_employeename_edit = req.body.hr_employeename_edit;
  let hr_surname_edit = req.body.hr_surname_edit;
  let hr_nickname_edit = req.body.hr_nickname_edit;
  let hr_phone_edit = req.body.hr_phone_edit;
  let hr_job_start_edit = req.body.hr_job_start_edit;
  let hr_email_user_edit = req.body.hr_email_user_edit;
  let hr_password_edit = req.body.hr_password_edit;
  let hr_employee_eng_edit = req.body.hr_employee_eng_edit;
  let hr_lastname_eng_edit = req.body.hr_lastname_eng_edit;
  let id_section_edit = req.body.id_section_edit;
  let id_department_edit = req.body.id_department_edit;
  let id_position_edit = req.body.id_position_edit;
  let hr_emp_edit = req.body.hr_emp_edit;
  let id = req.body.id;
  let number_emp_edit = req.body.number_emp_edit;
  let status_emp_edit =req.body.status_emp_edit;
  let job_out_edit = req.body.job_out_edit;
  let birthday_emp_edit = req.body.birthday_emp_edit;

  console.log(status_emp_edit);

  let update_project_hr =
    "update project_hr set hr_employeeid = '" +
    hr_employeeid_edit +
    "',hr_job_start = '" +
    hr_job_start_edit +
    "',hr_employeename = '" +
    hr_employeename_edit +
    "',hr_surname= '" +
    hr_surname_edit +
    "',hr_employee_eng = '" +
    hr_employee_eng_edit +
    "',hr_lastname_eng = '" +
    hr_lastname_eng_edit +
    "',hr_nickname = '" +
    hr_nickname_edit +
    "',hr_phone = '" +
    hr_phone_edit +
    "',hr_emp = '" +
    hr_emp_edit +
    "',id_section = '" +
    id_section_edit +
    "',number_emp = '"+number_emp_edit+"',id_department = '" +
    id_department_edit +
    "',id_position = '" +
    id_position_edit +
    "',hr_email_user= '" +
    hr_email_user_edit +
    "',hr_password= '" +
    hr_password_edit +
    "',job_out= '"+	job_out_edit +"',status_emp= '"+status_emp_edit+"',birthday_emp='"+birthday_emp_edit+"' where hr_run_id ='" +
    id +
    "' ";

  

  db.query(update_project_hr, (err, result) => {
    if (err) {
      console.log(err);
      res.send({
        message: "แก้ไขข้อมูลไม่สำเร็จ",
      });
    } else {
      res.send({
        status: "success",
        message: "แก้ไขข้อมูลสำเร็จ",
        id : id 
      });
    }
  });
});

app.post("/position_edit", (req, res) => {  
  let thai_position_edit = req.body.thai;
  let eng_position_edit = req.body.eng;
  let id_position = req.body.id_position;

  console.log(`ID : ${id_position} \n Thai : ${thai_position_edit} \n Eng : ${eng_position_edit}`)
    
  let update_hr_position = "update hr_position set thai_position = '" +thai_position_edit +"' , eng_position = '" +eng_position_edit +"' where hr_position.id_position ='" +
  id_position +"' ";
  
  
  db.query(update_hr_position, (err, result) => {
    if (err) {
      console.log(err);
      res.send({
        message: "แก้ไขตำแหน่งไม่สำเร็จ",
      });
    } else {
      res.send({
        status: "ok",
        message: "แก้ไขสำเร็จ",
      });
    }
  });
});

app.get("/set_addposition/:id_section/:id_department/:id_position",
  (req, res) => {
    // let hr_run_id = "138";
    let id_section = req.params.id_section;
    let id_department = req.params.id_department;
    let id_position = req.params.id_position;
    // console.log(id_section)
    db.query(
      "SELECT hr_position.*,hr_section.id_section,hr_department.id_department,hr_section.eng_section,hr_department.eng_department FROM hr_position INNER JOIN hr_section ON hr_position.id_section = hr_section.id_section INNER JOIN hr_department ON hr_position.id_department = hr_department.id_department where hr_position.id_position = '" +
        id_position +
        "' and hr_department.id_department = '" +
        id_department +
        "' and hr_section.id_section = '" +
        id_section +
        "' ORDER BY hr_position.id_position DESC",
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
        
          res.send(result[0]);
          console.log(result[0].thai_position)
        }
      }
    );
  }
);


// app.get("/set_project_hr/:id", (req, res) => {
//   let id = req.params.id;
//   db.query(
//     "SELECT project_hr.*,hr_section.eng_section,hr_department.eng_department,hr_position.eng_position FROM project_hr INNER JOIN hr_section ON project_hr.id_section = hr_section.id_section INNER JOIN hr_department ON project_hr.id_department = hr_department.id_department INNER JOIN hr_position ON project_hr.id_position = hr_position.id_position where project_hr.hr_run_id = '" +
//       id +
//       "' ORDER BY project_hr.hr_run_id DESC",
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(result);
//         res.send(result[0]);
//       }
//     }
//   );
// });

//========== ลบ
app.get("/delete_position/:id_position", (req,res) => {
  let id_position = req.params.id_position;

  let delete_hr_position = "delete from hr_position where hr_position.id_position ='"+id_position+"'";
  
  db.query(delete_hr_position, (err, result) => {
    if (err) {
      console.log(err);
      // res.send({
      //   message: "ลบข้อมูลไม่สำเร็จ",
      // });
    } else {
      console.log(result);
      
    
      res.redirect('http://localhost:3000/admin/delete_position')

      // res.send({
      //   status: "ok",
      //   message: "ลบข้อมูลสำเร็จ",
      // });
    }
  });
})

//login
app.post("/Check_login", (req,res) => {
  async function Check_login() {
    let username = req.body.username;
    let password = req.body.password;
    bcrypt.hash(username, 10, (err, tokentext) => {

      let data = "select project_hr.*,hr_department.name_department, hr_position.id_position from project_hr inner join hr_department on project_hr.id_department = hr_department.id_department inner join hr_position on project_hr.id_position = hr_position.id_position where hr_employeeid = '"+ username +"' and hr_password = '"+password+"' and hr_emp != 'รายวัน'  ";

      db.query(data, (err, result) => {
        if (err) {
          console.log(err);
        }else {
          if (result.length === 0) {
            res.send({
              status: "error",
              message: "ตรวจสอบ Username หรือ Password",
            });
          }else {
            // ตัวจะส่งไปข้างหน้า 
            res.send({
              status: "ok",
              message: "เข้าสู่ระบบสำเร็จ",
              accessToken: tokentext,
              hr_employeeid: result[0].hr_employeeid,
              hr_employeename: result[0].hr_employeename,
              hr_surname: result[0].hr_surname,
              name_department: result[0].name_department,
              status_emp: result[0].status_emp,
              hr_run_id: result[0].hr_run_id,
              hr_emp: result[0].hr_emp,
            });
          }
          console.log(result);
        }
      })
    })

  }

  Check_login()
})