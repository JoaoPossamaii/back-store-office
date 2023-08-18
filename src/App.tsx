import { useState } from "react";

import FormRegisterProduct from "./components/FormRegisterProduct";
import ListOfProducts from "./components/ListOfProducts";
import { ProductType, ProductWithId } from "./types";

import './styles/reset.style.css';
import './styles/app.css';
import { List, Plus } from "@phosphor-icons/react";

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

  const handleDeleteProduct = (id: string | number) => {

    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  };


  return (
    <>
      <header>
        <button onClick={handleShowRegisterProductComponent}>
          <Plus size={40} color="hotpink" weight="fill" />
        </button>

        <button onClick={handleListOfProductComponent}>
          <List size={40} color="hotpink" weight="fill" />
        </button>
      </header>

      <main>
        {isRegsterProductVisible
          ? (

            <FormRegisterProduct
              handleSubmit={handleCreateProduct}
            />
          )
          : (
            <ListOfProducts
              products={products}
              handleDelete={handleDeleteProduct}
            />
          )
        }
      </main>
    </>
  )
}

export default App 