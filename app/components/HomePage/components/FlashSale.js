import React, { Component } from 'react'
import { Header } from 'app/components/Common/Header';
import { CardProduct } from 'app/components/Common/Card';
import listCardFlashSale from 'app/utils/listCardFlashSale.json';
export default class FlashSale extends Component {
    render() {
        return (
            <div className="card-fs">
                <Header className="fs" header='Deal chớp nhoáng' />
                <div className="card-fs-content">
                    <div className="card-fs-content-header">
                        <div className="card-fs-content-header-left-status pull-left">
                            <div className="status-text">Đang bán</div>
                        </div>
                        <div className="card-fs-content-header-left-timer pull-left">
                            <div className="fs-timer-text pull-left">Kết thúc trong</div>
                            <div className="fs-timer-count pull-left" id="hours">00</div>
                            <div className="fs-timer-colon pull-left"> : </div>
                            <div className="fs-timer-count pull-left" id="minutes">14</div>
                            <div className="fs-timer-colon pull-left"> : </div>
                            <div className="fs-timer-count pull-left" id="seconds">47</div>
                        </div>
                        <a className="card-fs-content-button" href="/">MUA SẮM TOÀN BỘ SẢN PHẨM</a>
                    </div>
                    <div className="card-fs-content-body">
                        {listCardFlashSale.map(item =>
                            <CardProduct
                                {...item}
                                key={item.id}
                            />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
