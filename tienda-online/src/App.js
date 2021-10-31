import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {
  BrowserRouter, 
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import { CartPage } from './components/CartPage/CartPage';
import { UIProvider } from './context/UIContext'

function App() {

  return (
    
    <div className="App">
      <UIProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar/>

            <Switch>
              <Route exact path="/">
                <ItemListContainer/>
              </Route>

              <Route exact path="/productos/:categoryId">
                <ItemListContainer/>
              </Route>

              <Route exact path="/detalle/:itemId">
                <ItemDetailContainer/>
              </Route>

              <Route exact path="/contacto">
                <h1>Pagina de contacto</h1>
              </Route>

              <Route exact path="/cart">
                <CartPage/>
              </Route>

              <Route path="*">
                <Redirect to="/"/>
              </Route>
            </Switch>
          
          </BrowserRouter>
        </CartProvider>
      </UIProvider>
    </div>
  );
}

export default App;
