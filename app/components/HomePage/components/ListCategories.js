import React, { Component } from 'react';
import { Header } from 'app/components/Common/Header';
import listCardCategories from 'app/utils/listCardCategories.json';
import { CardCategories } from 'app/components/Common/Card';
export default class ListCategories extends Component {
    render() {
        return (
            <div className="card-categories">
                <Header className="categories" header='Danh mục ngành hàng'/>
                <div className="card-categories-content">
                    <div className="card-categories-ul">
                        {listCardCategories.map(item =>
                            <CardCategories
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
