import * as yup from "yup";

export const valid = yup.object().shape({
  task: yup.string().required("Công việc không được rỗng"),
});
