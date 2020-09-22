import "./style.css";
import React, { useEffect, useState } from "react";
import employeeData from "../../data/employees.json"
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from 'react-bootstrap-table-next';
import * as ReactBootstrap from "react-bootstrap"

const EmployeeTable = () => {

  const [employees, setEmployees] = useState([])

  const getEmployeeData = async () => {
    const data = employeeData;
    setEmployees(data);
  }

  useEffect(() => {
    getEmployeeData();
  });

  const columns = [
    { dataField: "employee_id", text: "Employee ID" },
    { dataField: "first_name", text: "First Name" },
    { dataField: "last_name", text: "Last Name" },
    { dataField: "email", text: "Email" },
    { dataField: "role", text: "Role" }
  ]

  return (
    <BootstrapTable 
      keyField="employee_id"
      data={employees}
      columns={columns}
      pagination={paginationFactory()}
    />
  
  );
}

export default EmployeeTable;
