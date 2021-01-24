import { useSelector } from "react-redux";

export const useSubTotal = () => {
  const value = useSelector((state) => state.cart);
  return value.reduce((sum, elem) => sum + elem.price * elem.quantity, 0);
};
