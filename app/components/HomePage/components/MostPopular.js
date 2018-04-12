import React, { Component } from 'react'
import listCardPopular from 'app/utils/listCardPopular.json';
import { TYPE_PRODUCT, POSITION_RIGHT, POSITION_LEFT } from 'app/utils/common';
import {Header} from 'app/components/Common/Header';
import {CardPopular} from 'app/components/Common/Card';
export default class MostPopular extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let rightCard = listCardPopular.slice(0, 1);
    let leftCard = listCardPopular.slice(1);
    return (
      <div className="card-most-popular-content">
        <Header className="most-popular" header="Tìm kiếm phổ biến" />
        <div className="list-card-most-popular">
          <div className="list-card-most-popular-left-panel align-left">
            {rightCard.map((item, index) =>
              <CardPopular
                index={index}
                {...item}
                key={item.id}
                type={TYPE_PRODUCT}
                position={POSITION_RIGHT}
              />
            )}
          </div>
          <div className="list-card-most-popular-right-panel align-left">
            {leftCard.map((item, index) =>
              <CardPopular
                index={index}
                {...item}
                key={item.id}
                type={TYPE_PRODUCT}
                position={POSITION_LEFT}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}
