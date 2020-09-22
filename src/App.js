import React, {useState, useEffect} from "react";
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import EmployeeTable from "./components/EmployeeTable";

import BootstrapTable from 'react-bootstrap-table-next';
import paginatioFactory from "react-bootstrap-table2-paginator";
import * as ReactBootstrap from "react-bootstrap"

function App() {
  return (
    <div>
      <Navbar />
      <EmployeeTable />
    </div>
  );
}

export default App;
