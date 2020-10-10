import React from 'react';
import { Aside } from'./components/aside/Aside';
import './App.css';
import { Dashboard } from './components/dashboard/Dashboard';
import 'material-design-icons/iconfont/material-icons.css'

function App() {
  return (
    <div className="container">
      <Aside />
      <Dashboard />
    </div>
  );
}

export default App;
