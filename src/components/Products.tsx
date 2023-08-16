import { ProductWithId, ProductType } from '../types';


type Props = {
  productInfo: ProductWithId | ProductType
};

function Products({ productInfo }: Props) {
  const { name, description, price, image, tags } = productInfo as ProductWithId;

  const tagsList = tags ? tags.split(',').map((tag) => tag.trim()) : [];
  return (
    <div>
      <img src={image} alt={name} />
      <h3> {name}</h3>
      <h4>  {price}</h4>
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