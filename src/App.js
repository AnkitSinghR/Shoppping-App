import "./App.css";
import HomeContainer from "./container/HomeContainer";
import HeaderContainer from "./container/HeaderContainer";
//
import { createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import rootReducer from "./services/reducers/index";
//
const store = createStore(rootReducer);

function App() {
  return (
    <ReduxProvider store={store}>
      <div className="App">
        <HeaderContainer />
        <HomeContainer />
      </div>
    </ReduxProvider>
  );
}

export default App;
