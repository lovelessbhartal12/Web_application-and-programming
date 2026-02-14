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
        <p>Loblesh bhartal</p>
      </div>
    </>
  );
}
// function ProductCard({ laptop }) {
//   return (
//     <div
//       style={{
//         border: "1px solid #ccc",
//         padding: "16px",
//         borderRadius: "8px",
//         marginBottom: "12px",
//         width: "250px",
//       }}
//     >
//       <h3>{laptop.name}</h3>
//       <p>
//         <strong>Brand:</strong> {laptop.brand}
//       </p>
//       <p>
//         <strong>Price:</strong> ${laptop.price}
//       </p>
//       <p>
//         <strong>RAM:</strong> {laptop.ram}
//       </p>
//     </div>
//   );
// }
