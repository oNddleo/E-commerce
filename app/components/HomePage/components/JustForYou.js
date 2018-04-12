import React, { Component } from 'react'
import { CardJustForYou } from 'app/components/Common/Card';
import listCardJustForYou from 'app/utils/listCardJustForYou.json';
import { Header } from 'app/components/Common/Header';
export default class JustForYou extends Component {
  render() {
    return (
      <div className="card-jfy">
        <Header className="jfy" header='Dành riêng cho bạn' />
        <div className="card-jfy-content">
          <div className="card-jfy-content-body">
            {listCardJustForYou.map(item =>
              <CardJustForYou
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
