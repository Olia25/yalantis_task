import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled.img`
  width: 80px;
`;
export const OwnProducts = styled.img`
  width: 40px;
  margin-left: 30px;
`;
export const CartIcon = styled.img`
  width: 40px;
  align-self: center;
`;
export const LogoTitle = styled.span`
  text-shadow: 1px 1px 1px #ffd633;
  color: #595959;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;
export const DeleteIcon = styled.img`
  height: 25px;
  align-self: center;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavbarBrand = styled.div`
  margin-left: 10px;
`;
export const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const LogoContainer = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  aline-item: center;
  position: relative;
`;
export const SearchLine = styled.div`
  background-color: #ffd633;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;
export const Input = styled.input`
  height: 30px;
  width: 80%;
  border-radius: 10px;
  border-color: #ffffff;
`;
export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;
export const CoverOfProducts = styled.div`
  border: 1px solid #a6a6a6;
  padding-left: 10px;
  width: 210px;
  margin: 30px 20px;
  background-color: rgba(255, 255, 255, 0.8);
  &:hover {
    box-shadow: 10px 15px 10px rgba(255, 204, 0, 0.5);
  }
`;
export const Button = styled.button`
  color: #ffffff;
  background-color: #ffd633;
  border-radius: 40px;
  border-color: #ffd633;
  width: 110px;
  height: 40px;
  font-size: 15px;
  text-shadow: 1px 1px 5px black;
  margin-bottom: 10px;
  border: none;
`;
export const StyledLink = styled(Link)`
  color: #595959;
  text-decoration: none;
`;
export const ProductDescription = styled.div`
  margin-left: 50px;
  border: 1px solid #ffd633;
  width: 30%;
  padding: 50px;
  background-color: #f2f2f2;
`;
export const NameOfProduct = styled.h2`
  color: #ffd633;
  text-shadow: 1px 1px 5px black;
`;
export const Subtotal = styled.span`
  text-shadow: 1px 1px 1px black;
  color: #ffd633;
`;
export const EmptyCart = styled.h4`
  margin-left: 20px;
`;
export const WidthCardTable = styled.div`
  width: 100%;
`;
export const TopTable = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #bfbfbf;
  & p {
    width: 200px;
    text-align: center;
  }
`;
export const DataOfProducts = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid grey;
  & p {
    width: 200px;
    text-align: center;
  }
`;
export const ButtonOFQuantity = styled.button`
  border: 0;
  background: white;
  font-size: 20px;
  border: none;
`;
export const PriceInput = styled.input`
  width: 65px;
`;
export const LayoutWithSidebar = styled.div`
  display: flex;
`;
export const BlockFilters = styled.div`
  width: 280px;
  padding-top: 40px;
  padding-bottom: 40px;
  box-shadow: 0 0 5px 0 #ccc;
  margin-top: 33px;
  margin-left: 20px;
  border-radius: 10px;
`;
export const FilterByCountry = styled.div`
  border: 1px dotted #bfbfbf;
  margin: 20px;
  padding-bottom: 40px;
  & h3 {
    text-align: center;
    color: #595959;
  }
`;
export const FilterOrigin = styled.div`
  display: flex;
  & input {
    margin-left: 15px;
  }
  & span {
    margin-left: 5px;
  }
`;
export const FilterByPrice = styled.div`
  border: 1px dotted #bfbfbf;
  margin: 20px;
  padding-bottom: 40px;
  text-align: center;
  & h3 {
    color: #595959;
  }
`;
export const SearchSorting = styled.div`
  display: flex;
  flex-direction: column;
  align-item: end;
`;
export const SelectStyle = styled.select`
  align-self: flex-end;
  margin-top: 15px;
  margin-right: 10px;
  padding: 1px;
`;
export const PriceButtonOk = styled.button`
  margin-left: 5px;
  border-radius: 5px;
  background-color: #ffffff;
  border-color: #a6a6a6;
  & span {
    color: #595959;
  }
`;
export const InputQuantityStyle = styled.input`
  width: 25px;
  height: 25px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
`;
