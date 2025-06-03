import { Link } from "react-router-dom";
import Titulo from "../../components/Titulos/Titulos";
import Button from "../../components/Button/Button";
import ButtonDelete from "../../components/ButtonDelete/ButtonDelete";
import useFetchProducts from "../../hooks/useFetchProducts";
import useProductAction from "../../hooks/useProductActions";

const Home = () => {
  const { dataProducts, getProducts } = useFetchProducts();
  const { deleteProduct, handleUpdateProduct } = useProductAction(getProducts);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/products"
        className="text-2xl font-bold text-gray-900 mb-4 bg-green-400 p-2 rounded w-full text-center hover:bg-green-200 transition-colors block mb-6"
      >
        Agregar producto
      </Link>

      <Titulo titulo="Product Information" />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-100 text-gray-700 text-left text-sm">
            <tr>
              <th className="px-4 py-2 border-b">Producto</th>
              <th className="px-4 py-2 border-b">Precio</th>
              <th className="px-4 py-2 border-b">Categoria</th>
              <th className="px-4 py-2 border-b">Stock</th>
            </tr>
          </thead>
          <tbody>
            {dataProducts?.map((product) => (
              <tr
                key={product.id}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-2">{product.producto}</td>
                <td className="px-4 py-2">{product.precio}</td>
                <td className="px-4 py-2">{product.categoria}</td>
                <td className="px-4 py-2">{product.stock}</td>
                <td className="px-4 py-2">
                  <img
                    src={product.img}
                    alt={product.nombre}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <Button
                    text="Editar"
                    onClick={() => handleUpdateProduct(product.id)}
                  />
                  <ButtonDelete
                    text="Eliminar"
                    onClick={() => deleteProduct(product.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
