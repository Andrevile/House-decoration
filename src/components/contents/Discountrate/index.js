import './style.scss';

function Discountrate({ discount_rate }) {
  return (
    <div className='discount-badge'>
      {discount_rate}
      <span>%</span>
    </div>
  );
}

export default Discountrate;
