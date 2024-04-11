import ReactDOM from 'react-dom/client';
// import App from './App.tsx'
import React from 'react';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './redux/store';
import { Suspense }  from 'react';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <Suspense fallback='Loading...'> */}
        <App />
      {/* </ Suspense> */}
    </React.StrictMode>,
  </Provider>
)
