import { createBrowserRouter, RouterProvider, create } from "react-router-dom";
import Home from "./components/home";
import Products from "./components/products";
import ProductDetails from "./components/ProductDetails";
import MainNavigation from "./components/MainNavigation";
import ErrorPage from "./components/ErrorPage";
function App() {
  //we have 2 types of pathes:
  // 1. absolute pathes: when the pathe has "/" in the beggining that means 
  //the path should be exactly like this it dose not look to the parent
  // 2. relative pathes: it dosn't start with "/" it is looking to the parent and append the child path to it
  const router = createBrowserRouter([
    {
      path: '/', element: <MainNavigation />, errorElement: <ErrorPage />,
      children: [
         //{ path: '/', element: <Home /> },// default page we can add index instead of path
         { index: true, element: <Home />},// the 2 solutions are true
         { path: '/products', element: <Products />},
         { path: '/products/:productId', element: <ProductDetails />},
    ]}
 
  ]);
  return <div>
    <RouterProvider router={router}/>
  </div>;
}

export default App;
