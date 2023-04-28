// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();






import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './Counter';
import './App.css';
import NavBar from "./Nav";
import reportWebVitals from './reportWebVitals';

const initialState = {
  count: 0
};
// Reducer function
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { count: state.count + action.num };
    case 'DECREMENT':
        return { count: state.count + action.num };
    case 'MULTIPLY':
        return { count: state.count * action.num };
    case 'DIVIDE':
        return { count: state.count / action.num };
    case 'RESET':
        return { count: state.count * action.num };
    default:
      return state;
  }
}

const store = createStore(reducer);
// const el = <Provider store={store}>
//           <Counter/>
//         </Provider>; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
   <NavBar/>
  <Counter/>
</Provider>, 
  document.getElementById('root')
);

reportWebVitals();
