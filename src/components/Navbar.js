import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends React.Component {
  render() {
    let total = 0;

    this.props.addedItems.map((item) => (total += item.price * 1));

    return (
      <nav className="nav-wrapper">
        <div className="container">
          <Link to="/" className="brand-logo">
            Shopping
          </Link>

          <ul className="right">
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link to="/cart">My cart</Link>
            </li>
            <li>
              <li>
                <Link to="/cart">
                  {this.props.addedItems.length > 0 ? (
                    <span className="label label-info">
                      {this.props.addedItems.length} items: (${total.toFixed(2)}
                      )
                    </span>
                  ) : null}
                </Link>
              </li>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    cartUpdated: () => {
      return true;
    },
  };
};

export default connect(mapStateToProps)(Navbar);
