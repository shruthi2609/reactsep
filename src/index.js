
import ReactDOM from 'react-dom/client';
import App from './App';
import {configureStore} from "@reduxjs/toolkit"
import { Provider } from 'react-redux';
import loginReducer from './Reduxjs Toolkit/loginReducer';
const userStore=configureStore({
   reducer:{
      //fill it
      userinfo:loginReducer
   }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={userStore}>
<App></App>
</Provider>
);


