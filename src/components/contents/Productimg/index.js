import Discountrate from 'components/contents/Discountrate';
import './style.scss';
function Productimg({ product, active, setActive }) {
  const activeProduct = (product_id) => {
    setActive(product_id);
  };

  return (
    <div className={'product-item' + (active === product.productId ? ' active' : '')}>
      <div className='product' style={{ backgroundImage: `url(${product.imageUrl})` }} onClick={() => activeProduct(product.productId)}>
        {product.discountRate !== 0 && <Discountrate discount_rate={product.discountRate}></Discountrate>}
      </div>
    </div>
  );
}

export default Productimg;
