import { object, string } from "yup";

export const loginFormSchema = object({
  username: string()
    .email("Please enter a valid email address")
    .required("Please enter an email address"),
  password: string().required("Please enter a password"),
});
