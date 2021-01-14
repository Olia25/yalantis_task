import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled.img`
  width: 80px;
`;
export const CartIcon = styled.img`
  width: 40px;
  align-self: center;
`;
export const HeadSubTotal = styled.span`
  text-shadow: 1px 1px 1px black;
  color: #ffd633;
  font-size: 12px;
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
export const CartContainer = styled.div`
  display: flex;
  justify-content: center;
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
  width: 200px;
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
  width: 100%;
  /*width: 700px;*/
  background-color: #bfbfbf;
`;
export const DataOfProducts = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid grey;
  /*width: 700px;*/
  & p {
    width: 200px;
    text-align: center;
  }
`;
