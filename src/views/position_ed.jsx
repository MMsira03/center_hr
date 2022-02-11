import React, { useState } from "react";
import {Row,Col,Button,Form,FormGroup,Label,Input,Card,CardHeader,CardBody,} from "reactstrap";
import swal from "sweetalert";
import axios from "axios";
import PanelHeader from "components/PanelHeader/PanelHeader";
import { data } from "jquery";
import { useEffect } from "react";
import { result } from "lodash";

export default function Position_ed(props) {

  
  //======= ID Dynamic ====================================
  const [id_section, setID_section] = useState("");
  const [id_department, setID_department] = useState("");

  //================เก็บค่าจาก API =====================
  const [hr_section, setHr_section] = useState([]);
  const [hr_department, setHr_department] = useState([]);
  const [thai_position,setThai_position] = useState("");
  const [eng_position,setEng_position] = useState("")



  //======= แก้ไข
  const [hr_section_edit, setHr_section_edit] = useState([]);
  const [hr_department_edit, setHr_department_edit] = useState([]);
  const [thai_position_edit,setThai_position_edit] = useState("");
  const [eng_position_edit,setEng_position_edit] = useState("")

  const [id_section_edit, setID_section_edit] = useState("");
  const [id_department_edit, setID_department_edit] = useState("");
  const [data_all, setData_all] = useState([]);



  //================== file ==============
//   const [file, setFile] = useState();
//   const [fileName, setFileName] = useState("");

  
  const server = "http://localhost:4000/";

  const id = data_all.hr_position;
  //==================================
  async function Check_bom(credentials) {
    return fetch(server + "post_addposition_edit", {
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
    const response = await Check_bom({
    
      id,
      id_section_edit,
      id_department_edit,
      thai_position_edit,
      eng_position_edit,
     
    });
    // =========================== swal =============================
    if ("status" in response) {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2200,
      }).then((value) => {
        // window.location.href = "/admin/Add_sap";
      });
    } else {
      swal("เพิ่มข้อมูลไม่สำเร็จ", response.message, "error");
    }
  };
 
  //============== dynamic_section=================
  useEffect(() => {
    fetch("http://localhost:4000/set_addposition/" + props.match.params.id)
      .then((response) => response.json())
      .then((result) => setData_all(result))
     // .then((result) => setHr_section(result))
      .catch((Error) => Error);
  }, []);

  //====== dynamic_section
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
  }, [id_section]);

  useEffect(() => {
    fetch("http://localhost:4000/dynamic_position/" + id_department_edit)
      .then((response) => response.json())
      .then((result) => setHr_position(result))
      .catch((Error) => Error);
  }, [id_department]);


  const Set_appposition = () => {
    setID_section_edit(data_all.id_section);
    setID_department_edit(data_all.id_department);
    setThai_position_edit(data_all.thai_position);
    setEng_position_edit(data_all.eng_position);
  }

  //backgroundColor: "#808088"
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content" onLoad={Set_appposition}>
        <Row>
          <Col md="11">
            <Card style={{ marginLeft: "4%" }}>
              <CardHeader style={{backgroundColor:"#747474",color: "#fff" }}>
                <h5 className="title">เพิ่มชื่อฝ่าย/ตำแหน่ง</h5> 
          
              </CardHeader>

              <CardBody>
                <Form onSubmit={input_form}>
                  <Row>
                    <Col sm="3">
                      <FormGroup>
                        <Label>สายงาน</Label>
                        <Input
                          type="select"
                          onChange={(e) => setID_section_edit(e.target.value)} style={{fontSize:"14px"}}
                        >
                            <option checked value ={data_all.id_section_edit} >
                                {data_all.eng_section}
                            </option>
                            {hr_section.map((data) => {
                                return(
                                    <option value={data.id_section}>
                                        {data.eng_section}
                                    </option>
                                )
                            })}
                          {/* <option value="">เลือกสายงาน</option>
                          {hr_section.map((data) => {
                            return (
                              <option value={data.id_section}>
                                {data.eng_section}
                              </option>
                            );
                          })} */}
                        </Input>
                      </FormGroup>
                    </Col>

                    <Col sm="3">
                      <FormGroup>
                        <Label>ฝ่าย</Label>
                        <Input
                          type="select"
                          onChange={(e) => setID_department_edit(e.target.value)} style={{fontSize:"14px"}}
                        >
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
                    <Col sm="3">
                      <FormGroup>
                        <Label>ชื่อตำแหน่ง/ฝ่าย(THAI)</Label>
                        <Input
                          type="text"
                          placeholder="ตำแหน่ง(ภาษาไทย)"
                          onChange={(e) => setThai_position_edit(e.target.value)} style={{fontSize:"14px"}}> 
                        </Input>
                      </FormGroup>
                    </Col>

                    <Col sm="3">
                      <FormGroup>
                        <Label>ชื่อตำแหน่ง/ฝ่าย(ENG)</Label>
                        <Input
                          type="text"
                          placeholder="ตำแหน่ง(ภาษาอังกฤษ)"
                          onChange={(e) => setEng_position_edit(e.target.value)} style={{fontSize:"14px"}}>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <br />
                  <Button type="submit">ตกลง</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}




