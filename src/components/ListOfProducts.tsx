import { ProductWithId } from "../types";
import Products from "./Products"

type Props = {
  products: ProductWithId[]
  handleDelete: ((id: string | number) => void)
};

function ListOfProducts({ products, handleDelete }: Props) {
  return (
    <main>
      <h1> Lista de Produtos</h1>
      <div>
        {products.length === 0 && <h2> Nenhum Produto Cadastrado</h2>}
        {products.map((product) => (
          <Products
            key={product.id}
            productInfo={product}
            handleDelete={handleDelete} />
        ))}
      </div>
    </main>
  )
}

export default ListOfProducts