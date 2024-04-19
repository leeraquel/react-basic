import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/page/Main";
import PreTest from "./components/Hooks/PreTest";
import UseRefFunction from "./components/Hooks/UseRefFunction";
import ProductDetailPage from "./components/page/ProductDetailPage";
import ProductsPage from "./components/page/ProductPage";
import HomePage from "./components/page/Home";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" name="main Page" element={<HomePage />} />
        <Route exact path="/main" name="main Page" element={<Main />} />
        <Route exact path="/pretest" name="test" element={<PreTest />} />
        <Route
          path="/pretest/:index"
          name="test details"
          element={<UseRefFunction />}
        />
        <Route
          path="/products"
          name="products"
          element={<ProductsPage></ProductsPage>}
        ></Route>
        <Route
          path="product/:productId"
          name="product Detail"
          element={<ProductDetailPage />}
        />
      </Routes>
    </>
  );
}

export default App;
