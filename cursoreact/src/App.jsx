import React from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import ItemListContainer from "./components/itemListContainer";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";
import Promo from "./components/Promo";


const App = () => {
  return (
<div>
  <NavBar/>
  <ItemListContainer greeting={"Bienvenidos a Hamburguesa Nostra"}/>
  <Banner/>
  <Promo/>
  <Menu/>
  <Footer/>
</div>
  )
}

export default App;