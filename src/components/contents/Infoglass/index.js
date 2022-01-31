import './style.scss';

function Infoglass({ product, active, setActive }) {
  const activeProduct = product_id => {
    setActive(product_id);
  };
  return (
    <div
      className="glass-box"
      style={{ top: product.pointX * 1.6, left: product.pointY * 1.7 }}
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

      {/* {
         active === product.productId && 
      } */}
    </div>
  );
}

// + (active === product.productId ? ' active' : '')
export default Infoglass;
