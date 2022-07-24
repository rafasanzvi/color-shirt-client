import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProviderWrapper } from './context/auth.context';
import 'bootstrap/dist/css/bootstrap.min.css'; //Import from React Bootstrap
import { MessageProviderWrapper } from './context/userMessage.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProviderWrapper>
      <Router>
        <MessageProviderWrapper>
          <App />
        </MessageProviderWrapper>
      </Router>
    </AuthProviderWrapper>
  </React.StrictMode>
);

