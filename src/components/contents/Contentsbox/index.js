import React, { useState, useEffect, useRef } from 'react';

import Productimg from 'components/contents/Productimg';
import Infoglass from 'components/contents/Infoglass';

import axios from 'axios';

import './style.scss';

function Contentsbox() {
  const [content, setContent] = useState('');
  const [productList, setProductList] = useState([]);
  const [active, setActive] = useState(-1);
  const isDragging = useRef(false);
  const startPos = useRef();
  const currentPos = useRef();
  const offset = useRef(20);
  const mainImgRef = useRef();
  const swiperRef = useRef();

  const touchStart = e => {
    startPos.current = e.pageX;
    currentPos.current = e.pageX;
    isDragging.current = true;
  };
  const touchEnd = e => {
    isDragging.current = false;

    if (
      -80 < offset.current + currentPos.current - startPos.current &&
      80 > offset.current + currentPos.current - startPos.current
    ) {
      offset.current = offset.current + currentPos.current - startPos.current;
    } else {
      if (-80 > offset.current + currentPos.current - startPos.current) {
        offset.current = -79;
      } else if (100 < offset.current + currentPos.current - startPos.current) {
        offset.current = 79;
      }
    }
  };

  const touchMove = e => {
    if (isDragging.current) {
      currentPos.current = e.pageX;
      if (
        -80 < offset.current + currentPos.current - startPos.current &&
        80 > offset.current + currentPos.current - startPos.current
      ) {
        swiperRef.current.style.transform = `translateX(${
          offset.current + (currentPos.current - startPos.current)
        }px)`;
      }
    }
  };
  useEffect(() => {
    axios
      .get('https://cdn.ggumim.co.kr/test/image_product_link.json')
      .then(res => {
        setContent(res.data.imageUrl);
        setProductList(res.data.productList);
      });

    swiperRef.current.addEventListener('mousedown', touchStart);
    swiperRef.current.addEventListener('mouseup', touchEnd);
    swiperRef.current.addEventListener('mouseleave', touchEnd);
    swiperRef.current.addEventListener('mousemove', touchMove);

    return () => {
      if (swiperRef.current) {
        swiperRef.current.removeEventListener('mousedown', touchStart);
        swiperRef.current.removeEventListener('mouseup', touchEnd);
        swiperRef.current.removeEventListener('mouseleave', touchEnd);
        swiperRef.current.removeEventListener('mousemove', touchMove);
      }
    };
  }, []);

  return (
    <div className="content-wrapper">
      <div className="product-main-img-container">
        <img
          ref={mainImgRef}
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
              mainImg={mainImgRef}
            ></Infoglass>
          );
        })}
      </div>
      <div className="product-list-wrapper">
        <div
          ref={swiperRef}
          className="product-list"
          style={{ transform: 'translateX(20px)' }}
        >
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
