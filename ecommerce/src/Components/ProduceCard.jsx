import "./ProductCard.css";
export default function ProduceCard({ myname, price, image }) {
  //   const name = props.name;
  //   const price = props.price;
  return (
    <>
      <div>
        <img src={image} alt="eror image"></img>
        <h3>name:{myname}</h3>
        <p>pricwe : ${price}</p>
      </div>
    </>
  );
}
