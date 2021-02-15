import React from "react";
import PropTypes from "prop-types";
import Row from "../../containers/rows/row";
import {
  LogoHolder,
  LogoImg,
  LogoText,
  CartImg,
  CartHolder,
  CartCountHolder,
} from "./header.styled";
import LogoImage from "../../assets/food-logo.png";
import CartImage from "../../assets/bag.png";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const Header = ({ itemCount }) => {
  return (
    <Row width="100%">
      <Link to="/">
        <LogoHolder>
          <LogoImg src={LogoImage} />
          <LogoText>CIBO</LogoText>
        </LogoHolder>
      </Link>
      <Link to="/cart">
        <CartHolder>
          <CartImg src={CartImage} />
          <CartCountHolder>{itemCount}</CartCountHolder>
        </CartHolder>
      </Link>
    </Row>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

Header.propTypes = {
  itemCount: PropTypes.number,
};

export default connect(mapStateToProps)(Header);
