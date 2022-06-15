import logo from './logo.svg';
import './App.css';
import ButtonBar from './componentes/ButtonBar';
import ProyectInfo from './componentes/ProyectInfo';
import ProyectType from './componentes/ProyectType';
import TaskList from './componentes/TaskList';
import React, {Fragment, useState, useRef} from 'react';

function App() {
  let valor = new Date().toLocaleDateString();
  return (
    <Fragment>
        <ProyectInfo />
        <ProyectType/>
        <ButtonBar/>
        <TaskList/>
    </Fragment>
    
  );
}

export default App;
