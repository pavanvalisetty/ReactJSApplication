import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addToCart, productLoad } from "./actions/cartActions";
import { Link } from "react-router-dom";
const url = "http://localhost:4030/product";

class ProductDetails extends Component {
  componentDidMount() {
    //this.props.getData();
    //this.props.addToCart();
    fetch(`${url}/${this.props.match.params.id}`)
      .then((response) => response.json())
      .then((json) => {
        //console.log(JSON.stringify(json));
        this.props.onLoadProduct(json);
      });
    /*  const response = await axios.get(`${url}/${this.props.match.params.id}`);
    console.log(JSON.stringify(response.data));
    //console.log(JSON.stringify(response.data));
    this.props.onLoadProduct(response.data);*/
  }
  render() {
    let item = this.props.selectedItem;
    return (
      <div className="card" key={item.id}>
        <div>
          <img
            src={`data:image/jpeg;base64,${item.pic}`}
            alt={item.title}
            className="thumbnailDetails"
          />
        </div>

        <div>
          <p>{item.desc}</p>
          <p>
            <b>Price: {item.price}$</b>
          </p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    selectedItem: state.selectedItem,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLoadProduct: (selectedItem) => {
      //console.log("users:" + JSON.stringify(selectedItem));
      dispatch(productLoad(selectedItem));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
