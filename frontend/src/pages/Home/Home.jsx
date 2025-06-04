import { Link } from "react-router-dom";
import Titulo from "../../components/Titulos/Titulos";
import ButtonDelete from "../../components/ButtonDelete/ButtonDelete";
import useFetchProducts from "../../hooks/useFetchProducts";
import useProductAction from "../../hooks/useProductActions";
import './Home.css';

const Home = () => {
  const { dataProducts, getProducts } = useFetchProducts();
  const { deleteProduct } = useProductAction(getProducts);

  return (
    <div className="homebg">
    <div className="backhome d-flex flex-column align-items-center">
      <div className="w-100" style={{ maxWidth: "1200px" }}>
        <div className="mb-4 d-flex flex-wrap justify-content-center gap-2 mt-5">
          <Link to="/products" className="btn btn-dark">
            Agregar producto
          </Link>
          <Link to="/" className="btn btn-secondary">
            Salir
          </Link>
        </div>

        <Titulo titulo="Información de los productos" />

        <div className="table-responsive mt-3">
          <table className="table table-bordered table-hover text-center align-middle">
            <thead className="table-light">
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Categoria</th>
                <th>Stock</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {dataProducts?.map((product) => (
                <tr key={product.id}>
                  <td>{product.producto}</td>
                  <td>{product.precio}</td>
                  <td>{product.categoria}</td>
                  <td>{product.stock}</td>
                  <td>
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                      <Link to={`/products/${product.id}`} className="btn btn-dark">
                        Editar
                      </Link>
                      <ButtonDelete
                        text="Eliminar"
                        onClick={() => deleteProduct(product.id)}
                        className="btn btn-dark"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
