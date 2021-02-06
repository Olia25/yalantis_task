import { useDispatch } from "react-redux";
import { PriceButtonOk } from "styledComponents";

const PriceButton = ({ action }) => {
  const dispatch = useDispatch();
  return (
    <PriceButtonOk onClick={() => dispatch(action)}>
      <span>Ok</span>
    </PriceButtonOk>
  );
};

export default PriceButton;
