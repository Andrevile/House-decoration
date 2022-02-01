import React, { useState, useEffect } from 'react';

import Infowindow from 'components/contents/Infowindow';

import './style.scss';

function Infoglass({ product, active, setActive, mainImg }) {
  const [directionLeft, setDirectionLeft] = useState(false);
  const [directionBot, setDirectionBot] = useState(false);
  useEffect(() => {
    if (product.pointX * 1.6 > mainImg.current.offsetHeight / 2) {
      setDirectionBot(true);
    }
    if (product.pointY * 1.7 > mainImg.current.offsetWidth / 2) {
      setDirectionLeft(true);
    }
  }, []);
  const activeProduct = product_id => {
    if (active === product_id) {
      setActive(-1);
    } else {
      setActive(product_id);
    }
  };
  return (
    <div
      className="glass-box"
      style={{ top: product.pointX * 1.6, left: product.pointY * 1.61 }}
    >
      <img
        className="glass-icon"
        src={
          active !== product.productId
            ? 'https://cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png'
            : 'https://cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png'
        }
        alt=" 돋보기"
        onClick={() => activeProduct(product.productId)}
      ></img>

      {active === product.productId && (
        <Infowindow
          product={product}
          left={directionLeft}
          bottom={directionBot}
        ></Infowindow>
      )}
    </div>
  );
}

export default Infoglass;
