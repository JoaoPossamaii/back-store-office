import { ProductWithId } from "../types";
import Products from "./Products"

import '../styles/ListOfProducts.css'

type Props = {
  products: ProductWithId[]
  handleDelete: ((id: string | number) => void)
};

function ListOfProducts({ products, handleDelete }: Props) {
  return (
    <>
      <h1> Lista de Produtos</h1>
      <div className="list-container" >
        {products.length === 0 && <h2> Nenhum Produto Cadastrado</h2>}
        {products.map((product) => (
          <Products
            key={product.id}
            productInfo={product}
            handleDelete={handleDelete} />
        ))}
      </div>
    </>
  )
}

export default ListOfProducts