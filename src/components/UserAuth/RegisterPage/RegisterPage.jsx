import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import FormTemplate from "../FormTemplate/FormTemplate";

export default function RegisterPage() {
  return (
    <div>
      <FormTemplate title="Create Account" type="register" />
    </div>
  );
}
