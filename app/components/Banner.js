import React, { Component } from 'react';
import {listBannerImages} from 'app/utils/banner-image.js';
import ImageGallery from 'react-image-gallery';
export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <ImageGallery
          items={listBannerImages}
          showFullscreenButton={false}
          showPlayButton={false}
          showThumbnails={false}
          showBullets={true}
          showNav={false}
          autoPlay={true}
        />
      </div>
    )
  }
};
