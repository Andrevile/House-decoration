import './style.scss';

function Infowindow({ product, left, bottom }) {
  return (
    <div
      className={
        'infowindow-container' +
        (left ? ' direction-left' : '') +
        (bottom ? ' direction-bottom' : '')
      }
    >
      <div
        className="infowindow-img"
        style={{ backgroundImage: `url(${product.imageUrl})` }}
      ></div>
      <div className="infowindow-information">
        <div className="product-name">{product.productName}</div>
        <div
          className={
            'product-price' +
            (product.outside ? ' expected-price' : ' discount-price')
          }
        >
          <span>{product.outside ? '예상가' : product.discountRate + '%'}</span>
          {product.priceDiscount
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
        </div>
      </div>
      <div className="arrow-icon-container">
        <img
          alt="꺽쇠"
          src="https://cdn.ggumim.co.kr/storage/20211102181936xqHzyWAmb8.png"
        ></img>
      </div>
    </div>
  );
}

export default Infowindow;
