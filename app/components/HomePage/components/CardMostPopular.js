import React, { Component } from 'react'

export default class CardMostPopular extends Component {
  render() {
    return (
      <div className="card-most-popular">
        <div clasName="card-most-popular-header">
          <h3 className="card-most-popular-title">Tìm kiếm phổ biến</h3>
        </div>
        <div className="Items">
          <div className="card-most-popular-content">
            <div className="card-most-popular-left-panel">
                <a link="/sanpham"></a>
                <div className="card-most-popular-img">
                  <img src="/images/ong-kinh-canon"/>
                </div>
                <div className="card-most-popular-ovelay">

                </div>
                <div className="card-most-popular-desc">
                  <div className="card-most-popular-h1">Ống kính Canon</div>
                  <p className="card-most-popular-p">26,180 Sản phẩm</p>
                </div>
            </div>
            <div className="card-most-popular-right-panel">

            </div>
          </div>
        </div>
      </div>
    )
  }
}
