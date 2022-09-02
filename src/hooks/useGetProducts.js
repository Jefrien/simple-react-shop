import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const API = "https://api.escuelajs.co/api/v1/products?limit=14&offset=0";
  useEffect(() => {
    (async () => {
      const resp = await axios.get(API);
      console.log(resp.data);
      setProducts(resp.data);
    })();
  }, []);

  return products
};
export default useGetProducts;
