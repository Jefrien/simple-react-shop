import "./App.css";
import "flowbite";
import NavBar from "./Components/NavMenu";
import ProductItem from "./Components/Item";
import useGetProducts from "./hooks/useGetProducts";
import AppContext from "./context/AppContext";
import useInitialState from "./hooks/useInitialState";
import Order from "./Components/Order";

const API = "https://api.escuelajs.co/api/v1/products?limit=14&offset=0";

function App() {

  const initialState = useInitialState()

  const products = useGetProducts(API)

  return (
    <AppContext.Provider value={initialState}>
      <div className="App bg-gray-100 h-screen">
        <NavBar />
        <Order />
        <div className="w-full p-6 mt-12 border grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-auto">
          {products.map((item) => (
            <ProductItem product={item} key={item.id} />
          ))}
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
