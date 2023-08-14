import { useState } from "react";

function FormRegisterProduct() {

  const INITIAL_STATE = {
    name: '',
    price: '',
    description: '',
    tags: '',
    image: '',
  }

  const [formData, SetFormData] = useState(INITIAL_STATE);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { type, id, value, valueAsNumber } = event.target;

    if (type === "number") {
      SetFormData({
        ...formData,
        [id]: valueAsNumber,
      });
    } else {
      SetFormData({
        ...formData,
        [id]: value,
      });
    }
  };

  return (
    <main>
      <h1> Cadastrar Novo Produto</h1>
      <div>
        <form >
          <label htmlFor="name">
            Nome
            <input
              type="text"
              id="name"
              onChange={handleChange}
              value={formData.name}
            />
          </label>

          <label htmlFor="description">
            Descrição
            <input
              type="text"
              id="description"
              onChange={handleChange}
              value={formData.description}
            />
          </label>

          <label htmlFor="prie">
            Preço
            <input
              type="number"
              id="price"
              onChange={handleChange}
              value={formData.price}
            />
          </label>

          <label htmlFor="image">
            Imagem
            <input
              type="file"
              id="image"
              onChange={handleChange}
              value={formData.image}
            />
          </label>

          <label htmlFor="tags">
            Tags
            <input
              type="text"
              id="tags"
              onChange={handleChange}
              value={formData.tags}
            />
          </label>


          <button type="submit">
            SALVAR
          </button>
        </form>
      </div>
    </main>
  )
}

export default FormRegisterProduct