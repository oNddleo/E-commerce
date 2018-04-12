import React, { Component } from 'react';
import { Header } from 'app/components/Common/Header';
import listCardOfficalStores from 'app/utils/listCardOfficalStores.json';
import { CardOfficalStores } from 'app/components/Common/Card';
export default class OfficalStores extends Component {
    render() {
        return (
            <div className="card-offical-stores">
                <Header className="offical-stores" header='Gian hàng chính hãng' all={true} text='Xem thêm' link='/all'/>
                <div className="card-offical-stores-content">
                    <div className="card-offical-stores-content-body">
                        {listCardOfficalStores.map(item =>
                            <CardOfficalStores
                                {...item}
                                key={item.id}
                            />
                        )}
                    </div>
                </div>
            </div>
        )
    }
};