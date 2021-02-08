import { object, string, number } from "yup";

export const addNewProduct = {
  shape: {
    name: "",
    price: 0,
    origin: "",
  },
  schema: object().shape({
    name: string()
      .min(3, "Must be 3 or more letters")
      .max(20, "Must be 20 or less letters")
      .required("Name is required"),
    price: number()
      .moreThan(0, "Must be more than 0")
      .required("Price is required"),
    origin: string().required("Origin is required").nullable(),
  }),
};
