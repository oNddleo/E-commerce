import React, { Component } from 'react'
import listCardPopular from 'app/utils/listCardPopular.json';
import { TYPE_PRODUCT, POSITION_RIGHT, POSITION_LEFT } from 'app/utils/common.js';
const ListCardPopular = (props, type) => {
  let alignLeft = '';
  if (props.position == POSITION_LEFT) {
    alignLeft = "align-left"
  }
  return (
    <div className={"card-hover card-most-popular-box " + alignLeft} key={props.id}>
      <a href={props.link}>
        <div className={"card-most-popular-image " + alignLeft}>
          <img src={props.img} />
        </div>
        <div className="card-most-popular-overlay"></div>
        <div className={"card-most-popular-desc " + alignLeft}>
          <div className="card-most-popular-title">{props.title}</div>
          <p className="card-most-popular-quantity">{props.quantity} {`${props.type}`}</p>
        </div>
      </a>
    </div>
  )
}

export default class CardMostPopular extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let rightCard = listCardPopular.slice(0, 1);
    let leftCard = listCardPopular.slice(1);
    return (
      <div className="card-most-popular-content">
        <div className="card-most-popular-header">
          <h3 className="card-most-popular-title">Tìm kiếm phổ biến</h3>
        </div>
        <div className="list-card-most-popular">
          <div className="list-card-most-popular-left-panel align-left">
            {rightCard.map((item, index) =>
              <ListCardPopular
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
              <ListCardPopular
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
