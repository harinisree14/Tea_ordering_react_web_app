import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import AddOrder from "./pages/AddOrder";
import AllOrders from "./pages/AllOrders";
import UpdateOrder from "./pages/UpdateOrder";
function App() {
  return (
    
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<AllOrders />}></Route>
    <Route path="/add-order" element={<AddOrder />}></Route>
    <Route path="/update-order/:id" element={<UpdateOrder />}></Route>
    </Routes>
  </BrowserRouter>
    
  );
}
export default App;








