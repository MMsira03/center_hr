import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import swal from "sweetalert";
import axios from "axios";
import PanelHeader from "components/PanelHeader/PanelHeader";

import { useEffect } from "react";
import { tail } from "lodash";
import { data } from "jquery";

export default function Edit(props) {
  // let hr_run_id_props = props.match.params.id
  const [hr_employeeid, setHr_Employeeid] = useState("");
  const [hr_employeename, setHr_Employeename] = useState("");
  const [hr_surname, setHr_Employeesurname] = useState("");
  const [hr_nickname, setHr_Employeenickname] = useState("");
  const [hr_phone, setHr_Employeephone] = useState("");
  const [hr_job_start, setHr_Job_Start] = useState("");
  const [hr_email_user, setHr_Email_User] = useState("");
  const [hr_password, setHr_Password] = useState("");
  const [hr_employee_img, setHr_Eployee_Img] = useState("");
  const [hr_emp, setHr_Emp] = useState("");
  const [hr_employee_eng, setHr_Employee_eng] = useState("");
  const [hr_lastname_eng, setHr_Lastname_Eng] = useState("");

  //================ Edit ==============
  const [hr_employeeid_edit, setHr_Employeeid_edit] = useState("");
  const [hr_employeename_edit, setHr_Employeename_edit] = useState("");
  const [hr_surname_edit, setHr_Employeesurname_edit] = useState("");
  const [hr_nickname_edit, setHr_Employeenickname_edit] = useState("");
  const [hr_phone_edit, setHr_Employeephone_edit] = useState("");
  const [hr_job_start_edit, setHr_Job_Start_edit] = useState("");
  const [hr_email_user_edit, setHr_Email_User_edit] = useState("");
  const [hr_password_edit, setHr_Password_edit] = useState("");
  const [hr_employee_img_edit, setHr_Eployee_Img_edit] = useState("");
  const [hr_emp_edit, setHr_Emp_edit] = useState("");
  const [hr_employee_eng_edit, setHr_Employee_eng_edit] = useState("");
  const [hr_lastname_eng_edit, setHr_Lastname_Eng_edit] = useState("");

  const [id_section_edit, setID_section_edit] = useState("");
  const [hr_section_eng_edit, setHr_section_eng_edit] = useState("");

  const [id_department_edit, setID_department_edit] = useState("");

  const [id_position_edit, setID_position_edit] = useState("");

  //======= ID Dynamic ====================================
  const [id_section, setID_section] = useState("");
  const [id_department, setID_department] = useState("");
  const [id_position, setID_position] = useState("");

  //================เก็บค่าจาก API =====================
  const [hr_section, setHr_section] = useState([]);
  const [hr_department, setHr_department] = useState([]);
  const [hr_position, setHr_position] = useState([]);
  const [data_all, setData_all] = useState([]);

  //================== file ==============
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const server = "http://localhost:4000/";

  const id = data_all.hr_run_id;
  //==================================
  async function Check_bom(credentials) {
    return fetch(server + "post_form_hr_edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

  //=================== onSubmit_input_form ==============
  const input_form = async (event) => {
    event.preventDefault();
    uploadFile();
    const response = await Check_bom({
      id,
      hr_employeeid_edit,
      hr_employeename_edit,
      hr_surname_edit,
      hr_nickname_edit,
      hr_phone_edit,
      hr_job_start_edit,
      hr_email_user_edit,
      hr_password_edit,
      hr_employee_img_edit,
      hr_emp_edit,
      hr_employee_eng_edit,
      hr_lastname_eng_edit,
      id_section_edit,
      hr_section_eng_edit,
      id_department_edit,
      id_position_edit,
    });
    await uploadFile();
    
    // =========================== swal =============================
    if ("status" in response) {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2200,
      }).then((value) => {
        window.location.href = "/admin/edit_emp/" + id;
      });
    } else {
      swal("เพิ่มข้อมูลไม่สำเร็จ", response.message, "error");
    }
  };

  //=========== type file_img=========
  const old_img = data_all.hr_employee_img;
  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    formData.append("hr_run_id", id);
    formData.append("old_image", old_img);
    try {
      const res = await axios.post("http://localhost:4000/upload_edit",formData);
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  //============== dynamic_section=================
  useEffect(() => {
    fetch("http://localhost:4000/set_project_hr/" + props.match.params.id)
      .then((response) => response.json())
      .then((result) => setData_all(result))
      .catch((Error) => Error);
  }, []);

  //============== dynamic_section=================
  useEffect(() => {
    fetch("http://localhost:4000/dynamic_section")
      .then((response) => response.json())
      .then((result) => setHr_section(result))
      .catch((Error) => Error);
  }, []);

  //========== dynamic_dapartment==============
  useEffect(() => {
    fetch("http://localhost:4000/dynamic_department/" + id_section_edit)
      .then((response) => response.json())
      .then((result) => setHr_department(result))
      .catch((Error) => Error);
  }, [id_section_edit]);

  // //========== dynamic_position ==============
  useEffect(() => {
    fetch("http://localhost:4000/dynamic_position/" + id_department_edit)
      .then((response) => response.json())
      .then((result) => setHr_position(result))
      .catch((Error) => Error);
  }, [id_department_edit]);

  const Set_edit = () => {
    setHr_Employeeid_edit(data_all.hr_employeeid);
    setHr_Job_Start_edit(data_all.hr_job_start);
    setHr_Email_User_edit(data_all.hr_email_user);
    setHr_Employeename_edit(data_all.hr_employeename);
    setHr_Employeesurname_edit(data_all.hr_surname);
    setHr_Employee_eng_edit(data_all.hr_employee_eng);
    setHr_Lastname_Eng_edit(data_all.hr_lastname_eng);
    setHr_Employeenickname_edit(data_all.hr_nickname);
    setHr_Employeephone_edit(data_all.hr_phone);
    setHr_Emp_edit(data_all.hr_emp);
    // setID_section_eng_edit(data_all.eng_section)
    setID_section_edit(data_all.id_section);
    setID_department_edit(data_all.id_department);
    // setID_department_eng_edit(data_all.eng_department)
    setID_position_edit(data_all.id_position);
    setHr_Password_edit(data_all.hr_password);

    //========== radio พนักงาน รายวัน / รายเดือน ===========
    
    if(data_all.hr_emp === "รายเดือน"){
      document.getElementById('cat_1').checked = true;
    }else{
      document.getElementById('cat_2').checked = true;
    }

  };
  //=========== return ==========================

  //backgroundColor: "#808088",

  return (
    <>
      <PanelHeader size="sm" />
      <div className="content" onLoad={Set_edit}>
        <Row>
          <Col md="11">
            <Card style={{ marginLeft: "4%" }}>
              <CardHeader style={{ backgroundColor: "#747474", color: "#fff" }}>
                <h5 className="title">แก้ไขข้อมูลพนักงาน</h5> 
              </CardHeader>

              <CardBody>
                <Form onSubmit={input_form}>
                  <Row>
                    <label>รูปภาพ</label>
                    <br />
                    <img
                      src={"http://localhost:4000/" + data_all.hr_employee_img}
                      alt=""
                      style={{
                        height: "150px",
                        width: "150px",
                        marginBottom: "10px",
                      }}
                    />
                    <br />
                    <br />
                    <br />
                    <Input
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={saveFile}
                    ></Input>
                    <br /> <br /> <br />
                    <Col sm="6">
                      <FormGroup>
                        <label> รหัสพนักงาน</label>
                        <Input
                          style={{
                            fontSize: "14px",
                            backgroundColor: "#ebecf0",
                            color: "red",
                          }}
                          type="text"
                          defaultValue={data_all.hr_employeeid}
                          placeholder="รหัสพนักงาน"
                          onChange={(e) =>
                            setHr_Employeeid_edit(e.target.value)
                          }
                        ></Input>
                      </FormGroup>
                    </Col>
                    <Col sm="6">
                      <FormGroup>
                        <label>วันเข้างาน</label>
                        <Input
                          style={{
                            fontSize: "14px",
                            backgroundColor: "#ebecf0",
                            color: "red",
                          }}
                          type="date"
                          defaultValue={data_all.hr_job_start}
                          placeholder="วันเข้างาน"
                          onChange={(e) => setHr_Job_Start_edit(e.target.value)}
                        ></Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="6">
                      <FormGroup class="col-md-12">
                        <label> ชื่อ</label>
                        <Input
                          style={{
                            fontSize: "14px",
                            backgroundColor: "#ebecf0",
                            color: "red",
                          }}
                          type="text"
                          placeholder="ชื่อ(ภาษาไทย)"
                          defaultValue={data_all.hr_employeename}
                          onChange={(e) =>
                            setHr_Employeename_edit(e.target.value)
                          }
                        ></Input>
                      </FormGroup>
                    </Col>
                    <Col sm="6">
                      <FormGroup class="col-md-12">
                        <label> นามสกุล</label>
                        <Input
                          style={{
                            fontSize: "14px",
                            backgroundColor: "#ebecf0",
                            color: "red",
                          }}
                          type="text"
                          placeholder="นามสกุล"
                          defaultValue={data_all.hr_surname}
                          onChange={(e) =>
                            setHr_Employeesurname_edit(e.target.value)
                          }
                        ></Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="6">
                      <FormGroup class="col-md-12">
                        <label>First Name</label>
                        <Input
                          style={{
                            fontSize: "14px",
                            backgroundColor: "#ebecf0",
                            color: "red",
                          }}
                          type="text"
                          placeholder="name"
                          defaultValue={data_all.hr_employee_eng}
                          onChange={(e) =>
                            setHr_Employee_eng_edit(e.target.value)
                          }
                        ></Input>
                      </FormGroup>
                    </Col>

                    <Col sm="6">
                      <FormGroup class="col-md-12">
                        <label> Last Name</label>
                        <Input
                          style={{
                            fontSize: "14px",
                            backgroundColor: "#ebecf0",
                            color: "red",
                          }}
                          type="text"
                          placeholder="lastname"
                          defaultValue={data_all.hr_lastname_eng}
                          onChange={(e) =>
                            setHr_Lastname_Eng_edit(e.target.value)
                          }
                        ></Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="6">
                      <FormGroup>
                        <label> ชื่อเล่น</label>
                        <Input
                          style={{
                            fontSize: "14px",
                            backgroundColor: "#ebecf0",
                            color: "red",
                          }}
                          type="text"
                          placeholder="Nickname"
                          defaultValue={data_all.hr_nickname}
                          onChange={(e) =>
                            setHr_Employeenickname_edit(e.target.value)
                          }
                        ></Input>
                      </FormGroup>
                    </Col>
                    <Col sm="6">
                      <FormGroup>
                        <label>เบอร์โทรศัพท์</label>
                        <Input
                          style={{
                            fontSize: "14px",
                            backgroundColor: "#ebecf0",
                            color: "red",
                          }}
                          type="tel"
                          placeholder="Phone"
                          defaultValue={data_all.hr_phone}
                          onChange={(e) =>
                            setHr_Employeephone_edit(e.target.value)
                          }
                        ></Input>
                      </FormGroup>
                    </Col>
                  </Row>



      {/* เก็บ ID แล้วไปทำ if ข้างบนที่คอมเม้นต์ไว้ */}
                  <Row>
                    <Col sm="6">
                      <FormGroup class="col-md-12">
                        <label>พนักงาน</label>
                        <br /> 
                        <div>
                          <div style={{ paddingLeft: "30px" }}>
                            <Input
                              id="cat_1"
                              type="radio"
                              value="รายเดือน"
                              name="cat_em"
                              onChange={(e) => setHr_Emp_edit(e.target.value)}
                            />
                            <label>รายเดือน</label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Input
                              id="cat_2"
                              type="radio"
                              value="รายวัน"
                              name="cat_em"
                              onChange={(e) => setHr_Emp_edit(e.target.value)}
                            />
                            <label>รายวัน</label>
                          </div>
                        </div>
                      </FormGroup>
                    </Col>

                    <Col sm="6">
                      <FormGroup>
                        <label>สายงาน</label>
                        <Input
                          style={{
                            fontSize: "14px",
                            backgroundColor: "#ebecf0",
                            color: "red",
                          }}
                          type="select"
                          onChange={(e) => setID_section_edit(e.target.value)}
                        >
                          <option checked value={data_all.id_section_edit}>
                            {data_all.eng_section}
                          </option>
                          {hr_section.map((data) => {
                            return (
                              <option value={data.id_section}>
                                {data.eng_section}
                              </option>
                            );
                          })}
                        </Input>
                      </FormGroup>
                    </Col>

                    <Col sm="6">
                      <FormGroup>
                        <label>ฝ่าย</label>
                        <Input
                          style={{
                            fontSize: "14px",
                            backgroundColor: "#ececf0",
                            color: "red",
                          }}
                          type="select"
                          onChange={(e) =>
                            setID_department_edit(e.target.value)
                          }
                        >
                          {" "}
                          <option checked value={data_all.id_department}>
                            {data_all.eng_department}
                          </option>
                          {hr_department.map((data) => {
                            return (
                              <option value={data.id_department}>
                                {data.eng_department}
                              </option>
                            );
                          })}
                        </Input>
                      </FormGroup>
                    </Col>

                    <Col sm="6">
                      <FormGroup>
                        <label>ตำแหน่ง</label>
                        <Input
                          style={{
                            fontSize: "14px",
                            backgroundColor: "#ececf0",
                            color: "red",
                          }}
                          type="select"
                          defaultValue={hr_position}
                          onChange={(e) => setID_position_edit(e.target.value)}
                        >
                          {" "}
                          <option checked value={data_all.id_position}>
                            {data_all.eng_position}
                          </option>
                          {hr_position.map((data) => {
                            return (
                              <option value={data.id_position}>
                                {data.eng_position}
                              </option>
                            );
                          })}
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="6">
                      <FormGroup>
                        <label> E-mail</label>
                        <Input
                          style={{
                            fontSize: "14px",
                            backgroundColor: "#ebecf0",
                            color: "red",
                          }}
                          type="email"
                          placeholder="Email"
                          defaultValue={data_all.hr_email_user}
                          onChange={(e) =>
                            setHr_Email_User_edit(e.target.value)
                          }
                        />
                      </FormGroup>
                    </Col>

                    <Col sm="6">
                      <FormGroup>
                        <label> รหัสผ่าน</label>
                        <Input
                          style={{
                            fontSize: "14px",
                            backgroundColor: "#ebecf0",
                            color: "red",
                          }}
                          type="password"
                          name="pw"
                          defaultValue={data_all.hr_password}
                          placeholder="Password"
                          onChange={(e) => setHr_Password_edit(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>{" "}
                  <Button
                    type="submit"
                    style={{ backgroundColor: "#ff3636", marginTop: "3%" }}
                  >
                    ตกลง
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

//https://www.borntodev.com/c/webdeveloper/nodejs-%E0%B8%81%E0%B9%87%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%A1%E0%B8%A5%E0%B9%84%E0%B8%94%E0%B9%89-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-nodemailer-5fd30da0e4e3e
