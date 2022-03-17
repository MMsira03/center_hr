import React, { useState } from "react";
import { Row,
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
import { data } from "jquery";
import { useEffect } from "react";
import { result } from "lodash";

export default function Position_ed(props) {
  //======= ID Dynamic ====================================
  const [id_section, setID_section] = useState("");
  const [id_department, setID_department] = useState("");

  const [thai_position, setThai_position] = useState("");
  const [eng_position, setEng_position] = useState("");

  //======= แก้ไข
  const [id_section_edit, setID_section_edit] = useState("");
  // const [hr_section_edit, setHr_section_edit] = useState("");

  const [id_department_edit, setID_department_edit] = useState("");

  const [id_position_edit, setID_position_edit] = useState("");

  const [hr_department_edit, setHr_department_edit] = useState([]);
  const [thai_position_edit, setThai_position_edit] = useState("");
  const [eng_position_edit, setEng_position_edit] = useState("");

  //================เก็บค่าจาก API =====================

  const [hr_section, setHr_section] = useState([]);
  const [hr_department, setHr_department] = useState([]);
  const [hr_position, setHr_position] = useState([]);
  

  const [data_all_id, setData_all_id] = useState([]);
  //console.log(data_all_id)
  const server = "http://localhost:4000/";

 

  //==================================
  async function Check_bom(credentials) {
    return fetch(
      server +
        "addposition_edit/" +
        props.match.params.id_section +
        "/" +
        props.match.params.id_department +
        "/" +
        props.match.params.id_position,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    ).then((data) => data.json());
  }
  //=================== onSubmit_input_form ==============
  const input_form = async (event) => {
    event.preventDefault();
    const response = await Check_bom({
      //id,
      id_section_edit,
      id_department_edit,
      thai_position_edit,
      eng_position_edit,
      id_position_edit,
    });
    // =========================== swal =============================
    if ("status" in response) {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2200,
      }).then((value) => {
       // window.location.href = "/admin/Position_ed/";
      });
    } else {
      swal("แก้ไขตำแหน่งไม่สำเร็จ", response.message, "error");
    }
  };

  //====== dynamic_section
  useEffect(() => {
    fetch(
      server +
        "set_addposition/" +
        props.match.params.id_section +
        "/" +
        props.match.params.id_department +
        "/" +
        props.match.params.id_position
    )
      .then((response) => response.json())
      .then((result) => setData_all_id(result))
      .catch((Error) => Error);
  }, []);

  //========== dynamic_dapartment==============
  useEffect(() => {
    fetch("http://localhost:4000/dynamic_department/" + id_section_edit)
      .then((response) => response.json())
      .then((result) => setHr_department(result))
      .catch((Error) => Error);
  }, [id_section_edit]);

  useEffect(() => {
    fetch("http://localhost:4000/dynamic_position/" + id_department_edit)
      .then((response) => response.json())
      .then((result) => setHr_position(result))
      .catch((Error) => Error);
  }, [id_department_edit]);

  const Set_appposition = () => {
    setID_section_edit(data_all_id.id_section);
    setID_department_edit(data_all_id.id_department);
    setThai_position_edit(data_all_id.thai_position);
    setEng_position_edit(data_all_id.eng_position);

    setID_position_edit(data_all_id.id_position);
  };

  return (
    <>
      <PanelHeader size="sm" />
      <div className="content" onLoad={Set_appposition}>
        <Row>
          <Col md="11">
            <Card style={{ marginLeft: "4%" }}>
              <CardHeader style={{ backgroundColor: "#747474", color: "#fff" }}>
                <h5 className="title">แก้ไขชื่อฝ่าย-ตำแหน่ง</h5>
              </CardHeader>
              <CardBody>
                <Form onSubmit={input_form}>
                  <Row>
                    <Col sm="3">
                      <FormGroup>
                        <label>สายงาน</label>
                        <Input
                          defaultValue={data_all_id.id_section}
                          style={{
                            fontSize: "14px",
                          }}
                          onChange={(e) => setID_section_edit(e.target.value)}
                        />
                      </FormGroup>
                    </Col>

                    <Col sm="3">
                      <FormGroup>
                        <label>ฝ่าย</label>
                        <Input
                          style={{
                            fontSize: "14px",
                          }}
                          onChange={(e) =>
                            setID_department_edit(e.target.value)
                          }
                        >
                          <option checked value={data_all_id.id_department}>
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
                          required
                          defaultValue={data_all_id.thai_position}
                          style={{ fontSize: "13px" }}
                          placeholder="ตำแหน่ง(ภาษาไทย)"
                          onChange={(e) => setID_position_edit(e.target.value)}
                        ></Input>
                      </FormGroup>
                    </Col>

                    <Col sm="3">
                      <FormGroup>
                        <Label>ชื่อตำแหน่ง/ฝ่าย(ENG)</Label>
                        <Input
                          type="text"
                          required
                          placeholder="ตำแหน่ง(ภาษาอังกฤษ)"
                          defaultValue={data_all_id.eng_position}
                          style={{
                            fontSize: "13px",
                          }}
                          onChange={(e) => setEng_position_edit(e.target.value)}
                        ></Input>
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
