import * as yup from "yup";

export const valid = yup.object().shape({
  username: yup.string().required("Tên tài khoản không được để trống"),
  password: yup
    .string()
    .required("Mật khẩu không được để trống")
    .min(6, "Mật khẩu phải dài hơn 6 kí tự"),
});
