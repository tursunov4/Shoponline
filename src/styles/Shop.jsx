import styled from "styled-components";
import { bodyColors, device } from "./global.jsx";

const ProductsWrapper = styled.div`
  color: ${bodyColors.mainTextColor};
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  cursor: pointer;
`;
const ProductCard = styled.div`
  position: relative;
  padding: 10px;
  flex: 1 1 25%;
  margin: 10px;
  text-align: center;
  background-color: ${bodyColors.mainBlockBackgroundColor};
  > img {
    transition: 0.2s ease-in-out;
  }

  &:hover {
    > img {
      transform: scale(1.1);
    }
  }

  > img {
    max-width: 200px;
  }
  @media ${device.mobileL} {
    > img {
      max-width: 300px;
    }
  }
  @media ${device.laptop} {
    > img {
      max-width: 400px;
    }
  }
`;

const Discount = styled.div`
  background-color: ${bodyColors.activeLinkColor};
  color: ${bodyColors.mainTextColor};
  position: absolute;

  font-size: 1.5em;
  font-weight: 600;
  transform: rotate(-45deg);
  left: -50px;
  top: -50px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: end;
  #box-shadow: 0px 1px 8px 0px ${bodyColors.mainTextColor};
`;
const DiscountWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export { ProductCard, ProductsWrapper, DiscountWrapper, Discount };
