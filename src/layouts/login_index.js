import { useState } from "react";
import swal from "sweetalert";
import "../CSS/login.scss"; //css
import server from "variables/port_server";


const Login_index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  async function loginUser(credentials) {
    return fetch(server + "/Check_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

  const Check_login = async (event) => {
    event.preventDefault();
    const response = await loginUser({
      username,
      password,
    });
    if ("accessToken" in response) {
      swal("Success", `Login : ${response.hr_employeename} ${response.hr_surname} ${response.name_department}` , "success", {
        buttons: false,
        timer: 2200,
      }).then((value) => {
        localStorage.setItem("accessToken", response["accessToken"]);
        localStorage.setItem("hr_employeeid", JSON.stringify(response["hr_employeeid"]));
        localStorage.setItem("hr_employeename", JSON.stringify(response["hr_employeename"]));
        localStorage.setItem("hr_surname", JSON.stringify(response["hr_surname"]));
        localStorage.setItem("name_department",JSON.stringify(response["name_department"]));
        localStorage.setItem("status_emp",JSON.stringify(response["status_emp"]));
        localStorage.setItem("hr_run_id",JSON.stringify(response["hr_run_id"]));
        localStorage.setItem("hr_emp", JSON.stringify(response["hr_emp"]));
        window.location.href = "/admin/report";
      });
    } else {
      swal("Login Failed", response.message, "error");
    }
  };
  return (
    <body>
      <style></style>
      <div class="wrapper_login fadeInDown">
        <div id="formContent">
          <div class="fadeIn first">
            <img
              src={require("assets/img/login.png").default}
              id="icon"
              alt="User Icon"
            />
            <br />
          </div>
          <br />
          <form onSubmit={Check_login}>
            <input
              required
              type="text"
              id="login"
              class="fadeIn second username_text"
              name="user_email"
              placeholder="Username"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <input
              required
              type="password"
              id="password"
              class="fadeIn third"
              name="user_pass"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

            <input
              style={{ marginTop: "20px", backgroundColor: "gray" }}
              type="submit"
              class="fadeIn fourth"
              value="LogIn"
            />
          </form>
        </div>
      </div>
    </body>
  );
};
export default Login_index;
