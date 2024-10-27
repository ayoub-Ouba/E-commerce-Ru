import './App.css';
import Accueil from './composants/accueil/Accueil'
import Page_Detail_Product from './composants/shop/Page_detail_product';
import Shop from './composants/shop/Shop';
import {Routes,Route} from "react-router-dom";
function App() {
  return (<>
          <Routes>
            <Route path='/' element={<Accueil/>} />
            <Route path='/shop/:id_produit' element={<Page_Detail_Product/>} />
            <Route path='/shop' element={<Shop/>} />
          </Routes>
  </>
  );
}

export default App;
