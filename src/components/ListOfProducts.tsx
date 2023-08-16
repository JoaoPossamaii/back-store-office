import { ProductWithId } from "../types";
import Products from "./Products"

type Props = {
  products: ProductWithId[]
};

function ListOfProducts({ products }: Props) {
  return (
    <main>
      <h1> Lista de Produtos</h1>
      <div>
        {products.length === 0 && <h2> Nenhum Produto Cadastrado</h2>}
        {products.map((product) => (
          <Products
            key={product.id} 
            productInfo={product} />
        ))}
      </div>
    </main>
  )
}

export default ListOfProducts