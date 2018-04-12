import React, { Component } from 'react'
import { POSITION_RIGHT, POSITION_LEFT } from 'app/utils/common';

export const CardPopular = (props, type) => {
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
export const CardProduct = (props) => {
    return (
        <a href={props.link} className="card-content-body fs-hover" title={props.title}>
            <div className="fs-card-img">
                <img src={props.img} alt={props.title} />
            </div>
            <div className="fs-card-text">
                <div className="fs-card-title">{props.title}</div>
                <div className="fs-card-price">{props.price} {props.currency}</div>
                <div className="fs-card-origin-price">
                    <span className="fs-origin-price">
                        <span className="price">{props.originPrice}</span>
                        <span className="currency">{props.currency}</span>
                    </span>
                    <span className="fs-discount">
                        {props.discount}
                    </span>
                </div>
                <div className="fs-card-sold">{props.sold}</div>
            </div>
        </a>
    )
}
export const CardJustForYou = (props) => {
    return (
        <div className="card-jfy-item-wrapper inline jfy-hover">
            <a href={props.link} className="card-jfy-li-content">
                <div className="card-jfy-item">
                    <div className="card-jfy-item-image">
                        <img className="image" src={props.img} alt={props.title} />
                    </div>
                    <div className="card-jfy-item-desc">
                        <div className="card-jfy-segment">{props.segment}</div>
                        <div className="card-jfy-title">{props.title}</div>
                        <div className="card-jfy-price">
                            <div className="price-first-line">
                                <span className="price">{props.price}</span>
                                <span className="currency">{props.currency}</span>
                            </div>

                            {props.installment ?
                                <div className="price-second-line">
                                    <div className="card-jfy-installment-text">Áp dụng trả góp</div>
                                </div>
                                :
                                <div className="price-second-line">
                                    <span className="fs-origin-price align-left">
                                        <span className="price">{props.originPrice}</span>
                                        <span className="currency">{props.currency}</span>
                                    </span>
                                    <span className="discount align-left">{props.discount}</span>
                                </div>

                            }

                        </div>
                        <div className="card-jfy-footer">
                            <div className="card-jfy-ratings"></div>
                            <div className="card-jfy-ratings-comment"></div>
                            <div className="card-jfy-nation"></div>
                        </div>
                    </div>
                </div>
            </a>
        </div>

    )
}
export const CardCategories = (props) => {
    return (
        <div className="card-categories-li categories-hover align-left">
            <a className="card-categories-li-content" href={props.link}>
                <div className="card-categories-image-container">
                    <img className="image" src={props.image} />
                </div>
                <div className="card-categories-name">
                    <span className="text">{props.name}</span>
                </div>
            </a>
        </div>

    )
}
export const CardOfficalStores = (props) => {
    return (
        <a className="card-offical-stores-box offical-stores-hover align-left" href={props.link}>
            <div className="card-offical-stores-brand-overlay"></div>
            <div className="card-offical-stores-brand-img">
                <img className="image" src={props.brandImage} />
            </div>
            <div className="card-offical-stores-shop-img">
                <img className="image" src={props.shopImage} />
            </div>
            <div className="card-offical-stores-h1">{props.nameShop}</div>
            <p className="card-offical-stores-p">{props.titleShop}</p>
        </a>
    )
}