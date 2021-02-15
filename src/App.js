import MainWrapper from "../src/containers/main/main-wrapper";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import OrderSucess from "./pages/order-success";
import Header from "./components/header/header";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";

const App = () => {
  return (
    <div className="App">
      <MainWrapper>
        <Provider store={store}>
          <BrowserRouter>
            <PersistGate persistor={persistor}>
              <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/cart" component={Cart} />
                <Route path="/order-sucessed" component={OrderSucess} />
              </Switch>
            </PersistGate>
          </BrowserRouter>
        </Provider>
      </MainWrapper>
    </div>
  );
};

export default App;
