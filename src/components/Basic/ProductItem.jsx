export default function ProductItem({ prodData }) {
  console.log(prodData);
  return (
    <div className="prod-container">
      <div>제품명 : {prodData.name}</div>
      <div>가격 : {prodData.price}원</div>
      <img width="100px" src={prodData.image} alt="productImage" />
    </div>
  );
}
