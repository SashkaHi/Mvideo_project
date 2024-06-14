import './App.css'
import Header from "./Components/header/Header.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Shop from "./Components/pages/shop/shop.jsx";
import Cart from "./Components/pages/cart/cart.jsx";
import {ShopContextProvider} from "./Components/context/shop-context.jsx";

function App() {


    return (
        <>
            <div>
                <ShopContextProvider>
                <Router>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Shop/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                    </Routes>
                </Router>
                </ShopContextProvider>
            </div>
        </>
    )
}

export default App
