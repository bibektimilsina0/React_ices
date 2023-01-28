import Navbar from "./Navbar";
const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
  
  const Shoping = () => { 
    return (
        <>
         <Navbar/>
            {
            products.map(product =>
              <li key={product.id}>
                {product.title}
              </li>
            )
            }
      </>
    );
    }
    export default Shoping;