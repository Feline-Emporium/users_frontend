import { confirmAlert } from "react-confirm-alert";
import axios from "axios";

export default async function Register(email, password) {
  await axios
    .post("**ENDPOINT**", {
      email: email.toLowerCase(),
      password: password,
    })
    .then(() => {
      confirmAlert({
        title: "Profile successfully created!",
        message: "Redirecting to login page...",
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
      if (err.response.status === 409) {
        confirmAlert({
          title: "Email already exists!",
          message: "Please try again.",
          buttons: [
            {
              label: "Ok",
              onClick: () => { },
            },
          ],
        });
      } else {
        alert("failed to register user: " + err);
        throw err;
      }
    });
}
