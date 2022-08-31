import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Router>
    <React.StrictMode>
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
    </React.StrictMode>
  // </Router>
);


