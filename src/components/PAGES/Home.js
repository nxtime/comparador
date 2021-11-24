// import react from "react";
import Input from "../Input";
import "./Home.css";

const Home = ({ user, products, markets, productSelected }) => {

  const selectedProduct = (product) => {
    productSelected(product.target.getAttribute("data-number"));
  }

  return (
    <header>
      <h1 className="title">
        Olá<em>{user.singleName}</em>
      </h1>
      <div className="card">
        <ul className="item-group">
          <li className="item mercado-1">
            <img src={markets[0].image} alt="" srcSet="" />
          </li>
          <li className="item mercado-2">
            <img src={markets[1].image} alt="" srcSet="" />
          </li>
          <li className="item mercado-3">
            <img src={markets[2].image} alt="" srcSet="" />
          </li>
          <li className="item mercado-4">
            <img src={markets[3].image} alt="" srcSet="" />
          </li>
        </ul>
      </div>
      <div className="mercados">
        <Input id="mercados" type="button">
          Produtos em alta
        </Input>
      </div>
      <div className="home-container">
        {products.map((product, index) => (
          <div className="home-container-item" key={Math.random()}>
            <div className="item-text" onClick={selectedProduct} data-number={index}>
              <img src={product.image} alt="" srcSet="" data-number={index}/>
              <p data-number={index}>
                {product.name} {product.brand} {product.type} {product.qt}
              </p>
              <p className="item-price" data-number={index}>
                R${product.prices[0].price.toString().replace(".", ",")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Home;
