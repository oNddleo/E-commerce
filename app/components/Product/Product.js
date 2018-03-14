import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
export default class Product extends Component {
  render() {
    return (
      <div className="product">
        <div className="product-image">
          <img src="https://vn-live-03.slatic.net/p/8/universal-ac-power-converter-travel-charger-adapter-eu-us-uk-auplug-intl-1485442010-8442881-e413d77f1e271cc35abb6bc36e96e5da-catalog_233.jpg" />
        </div>
        <div className="product-detail">
          <div className="product-title">Bộ cối chày giã thực phẩm inox</div>
          <div className="product-price">
            <span className="price">180.000</span>
            <span className="currency">đ</span>
          </div>
          <div className="product-sale">
            <div className="product-origin-price">
              <span className="price">180.000</span>
              <span className="currency">đ</span>
            </div>
            <div className="product-promo">15%</div>
          </div>
        </div>
        <div className="product-footer">
          <div className="product-rating">
          
          </div>
          <div className="product-comments">(2)</div>
          <div className="product-place">Hà nội</div>
        </div>
      </div>
    )
  }
};
