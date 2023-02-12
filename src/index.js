
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from "redux"
import { Provider } from 'react-redux';
import reducer from './Reducer';
const cartStore=createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={cartStore}>
<App></App>
</Provider>
);


