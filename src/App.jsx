import './App.css';

import Layout from './Components/Layout/Layout';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './Pages/Cart/Cart';

import{Routes, Route} from 'react-router-dom'

import Provider from './Components/Provider/Provider';
function App() {


  return (
    <div className="App">
      <Provider>
        <Layout>    
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route caseSensitive path='category/:id' element={<ItemListContainer/>}/>
                <Route caseSensitive path='item/:id' element={<ItemDetailContainer/>}></Route>
                <Route caseSensitive path="cart" element={<CartContainer/>}></Route>
            </Routes>
        </Layout>
      </Provider>
    </div>
  );
}

export default App;
