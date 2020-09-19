import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, dataLoaded } from "./actions/cartActions";
import { getData } from "../components/actions/getData";
import { Link } from "react-router-dom";

class Home extends Component {
  handleClick = (id) => {
    this.props.addToCart(id);
  };

  componentDidMount() {
    //this.props.getData();
    //this.props.addToCart();
    fetch("http://localhost:4030/product/all")
      .then((response) => response.json())
      .then((json) => {
        //console.log(JSON.stringify(json));
        this.props.onLoadUsersComplete(json);
      });
  }
  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <Link
              to={`/product/${item.id}`}
              key={item.id}
              className="artist_item"
            >
              <img
                src={`data:image/jpeg;base64,${item.pic}`}
                alt={item.title}
                className="thumbnail"
              />
            </Link>
            <span className="card-title" />
            <span
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light red"
              onClick={() => {
                this.handleClick(item.id);
              }}
            >
              <i className="material-icons">add</i>
            </span>
          </div>

          <div className="card-content">
            <p>{item.desc}</p>
            <p>
              <b>Price: {item.price}$</b>
            </p>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <h3 className="center">Our items</h3>
        <div className="box">{itemList}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
    onLoadUsersComplete: (items) => {
      //console.log("users:" + JSON.stringify(items));
      dispatch(dataLoaded(items));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
