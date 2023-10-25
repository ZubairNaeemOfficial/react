import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import ItemList from "./component/home";
import ItemForm from "./component/form";

function App() {


  return (

   <Router>
    <Routes>
     <Route path="item/:id" element={<ItemForm/>}/>
     <Route path="/" element={<ItemList/>}/>


    </Routes>
    
   </Router>
  );
}

export default App;
