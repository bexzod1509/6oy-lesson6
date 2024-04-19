import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Navbar2 from "./components/navbar2/Navbar2";
import Bgsection from "./components/bgsection/Bgsection";
import Category from "./components/category/Category";
import Products from "./components/products/Products";
import Stayhome from "./components/stayathome/Stayhome";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Navbar2 />
      <Bgsection />
      <Category />
      <Products />
      <Stayhome />
      <Footer />
    </div>
  );
}

export default App;
