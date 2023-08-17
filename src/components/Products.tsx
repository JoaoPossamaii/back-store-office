import { ProductWithId, ProductType } from '../types';


type Props = {
  productInfo: ProductWithId | ProductType
  handleDelete?: ((id: string | number) => void) | undefined
};

function Products({ productInfo, handleDelete }: Props) {
  const { name, description, price, image, tags, id } = productInfo as ProductWithId;

  const tagsList = tags ? tags.split(',').map((tag) => tag.trim()) : [];
  return (
    <div>
      {handleDelete && <button onClick={() => handleDelete(id)}> X </button>}
      <img src={image} alt={name} />
      <h3> {name}</h3>
      <h4> R$ {price}</h4>
      <ul>
        {tagsList.map((tag) =>
          <li key={tag}>
            {tag}
          </li>
        )}
      </ul>
      <p> {description}</p>
    </div >
  )
}

export default Products