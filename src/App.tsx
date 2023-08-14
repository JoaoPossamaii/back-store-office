import { useState } from "react";

import FormRegisterProduct from "./components/FormRegisterProduct";
import ListOfProducts from "./components/ListOfProducts";
// import { ProductType } from './types';

function App() {

  const [isRegsterProductVisible, setIsRegisterProductVisible] = useState(true);


  const handleShowRegisterProductComponent = () => {
    setIsRegisterProductVisible(true);
  }

  const handleListOfProductComponent = () => {
    setIsRegisterProductVisible(false);
  }

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
        ? <FormRegisterProduct />
        : <ListOfProducts />
      }



    </div>
  )
}

export default App 