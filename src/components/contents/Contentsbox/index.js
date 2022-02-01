import React, { useState, useEffect } from 'react';

import Productimg from 'components/contents/Productimg';
import Infoglass from 'components/contents/Infoglass';

import axios from 'axios';

import './style.scss';

function Contentsbox() {
  const [content, setContent] = useState('');
  const [productList, setProductList] = useState([]);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    axios
      .get('https://cdn.ggumim.co.kr/test/image_product_link.json')
      .then(res => {
        setContent(res.data.imageUrl);
        setProductList(res.data.productList);
      });
  }, []);

  return (
    <div className="content-wrapper">
      <div className="product-main-img-container">
        <img
          className="content-main-img"
          alt="컨텐츠"
          src={content}
          onClick={() => setActive(-1)}
        ></img>
        {productList.map((product, idx) => {
          return (
            <Infoglass
              key={idx}
              product={product}
              active={active}
              setActive={setActive}
            ></Infoglass>
          );
        })}
      </div>
      <div className="product-list-wrapper">
        <div className="product-list">
          {productList.map((product, idx) => {
            return (
              <Productimg
                key={idx}
                product={product}
                active={active}
                setActive={setActive}
              ></Productimg>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Contentsbox;
