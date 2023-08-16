import { useState } from "react";

import FormRegisterProduct from "./components/FormRegisterProduct";
import ListOfProducts from "./components/ListOfProducts";
import { ProductType, ProductWithId } from "./types";


function App() {

  const [isRegsterProductVisible, setIsRegisterProductVisible] = useState(true);
  const [products, setProducts] = useState<ProductWithId[]>([]);


  const handleShowRegisterProductComponent = () => {
    setIsRegisterProductVisible(true);
  };

  const handleListOfProductComponent = () => {
    setIsRegisterProductVisible(false);
  };

  const handleCreateProduct = (formData: ProductType) => {
    // const productWhitId = {...formData, id:Date.now()}
    const productWhitId = Object.assign({}, formData, { id: Date.now() });

    setProducts([
      ...products,
      productWhitId,
    ])
  };


  return (
    <div>
      <header>
        <button onClick={handleShowRegisterProductComponent}>
          Cadastrar
        </button>

        <button onClick={handleListOfProductComponent}>
          Ver Produtos
        </button>
      </header>
      {isRegsterProductVisible
        ? (

          <FormRegisterProduct
            handleSubmit={handleCreateProduct}
          />
        )
        : (
          <ListOfProducts
            products={products} />
        )
      }
    </div>
  )
}

export default App 