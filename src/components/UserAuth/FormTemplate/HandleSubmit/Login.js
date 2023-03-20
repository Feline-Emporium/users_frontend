import { confirmAlert } from "react-confirm-alert";
import axios from "axios";

export default async function Login(email, password) {
  await axios
    .post("**ENDPOINT**", {
      email: email.toLowerCase(),
      password: password,
    })
    .then((res) => {
      if (res.data.token === undefined) {
        confirmAlert({
          title: "Invalid credentials!",
          message: "Please try again.",
          buttons: [
            {
              label: "Ok",
              onClick: () => { },
            },
          ],
        });
        return;
      } else {
        localStorage.setItem("JWT_TOKEN", res.data.token);
      }
      confirmAlert({
        title: "Sucessfully logged in!",
        message: "Redirecting to profile page...",
        buttons: [
          {
            label: "Very cool!",
            onClick: () => { },
          },
        ],
        closeOnEscape: true,
        closeOnClickOutside: true,
      });
    })
    .catch((err) => {
      if (err.response.status === 400) {
      } else {
        alert("failed to register user: " + err);
        throw err;
      }
    });
}
