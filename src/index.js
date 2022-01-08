import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { getStore } from "./redux/store/store";
import RouterComponent from "./routes";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const store = getStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <RouterComponent />
  </Provider>,
  rootElement
);
