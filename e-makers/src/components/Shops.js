import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { getShops } from "../actions";
import ShopList from "./ShopList";

class Shops extends React.Component {
  componentDidMount() {
    this.props.getShops();
  }

  render() {
    return (
      <div>
        <h1> E-Makers Shops </h1>

        {this.props.fetchingShops && (
          <Loader type="Puff" color="#000" height="60" width="60" />
        )}

        {this.props.shops &&
          this.props.shops.map(shop => (
            <ShopList shop={shop} key={shop.shop_id} />
          ))}

        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shops: state.shops,
  error: state.error,
  fetchingShops: state.fetchingShops
});

export default connect(
  mapStateToProps,
  { getShops }
)(Shops);
