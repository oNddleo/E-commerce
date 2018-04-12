import React, { Component } from 'react'
import MostPopular from 'app/components/HomePage/components/MostPopular';
import FlashSale from 'app/components/HomePage/components/FlashSale';
import JustForYou from 'app/components/HomePage/components/JustForYou';
import OfficalStores from 'app/components/HomePage/components/OfficalStores';
import ListCategories from 'app/components/HomePage/components/ListCategories';
export default class HomePage extends Component {
    render() {
        return (
            <div className="page">
                
                {/* <div className="lift-nav">
                    <div className=""></div>
                </div> */}
                    <MostPopular />
                    <FlashSale />
                    <OfficalStores />
                    <ListCategories />
                    <JustForYou />
            </div>

        )
    }
}
