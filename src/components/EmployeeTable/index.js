import "./style.css";
import React, { useEffect, useState } from "react";
import employeeData from "../../data/employees.json"
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, numberFilter } from 'react-bootstrap-table2-filter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'
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

  /* Table Header Names + Icon */
  const sort = <FontAwesomeIcon icon={faSort} />
  /* Employee ID */
  const employeeIDText = `Employee ID`;
  const employeeID = <React.Fragment>{employeeIDText} {sort}</React.Fragment>
  /* First Name */
  const firstNameText = `First Name`;
  const firstName = <React.Fragment>{firstNameText} {sort}</React.Fragment>
  /* Last Name */
  const lastNameText = `Last Name`;
  const lastName = <React.Fragment>{lastNameText} {sort}</React.Fragment>
  /* Email */
  const emailText = `Email`;
  const email = <React.Fragment>{emailText} {sort}</React.Fragment>
  /* Role */
  const roleText = `Role`;
  const role = <React.Fragment>{roleText} {sort}</React.Fragment>

  const columns = [
    { dataField: "employee_id", text: employeeID, sort: true, filter: numberFilter() },
    { dataField: "first_name", text: firstName, sort: true, filter: textFilter() },
    { dataField: "last_name", text: lastName, sort: true, filter: textFilter() },
    { dataField: "email", text: email, sort: true, filter: textFilter() },
    { dataField: "role", text: role, sort: true, filter: textFilter() }
  ]

  return (
    <BootstrapTable 
      keyField="employee_id"
      data={employees}
      columns={columns}
      pagination={paginationFactory()}
      filter={filterFactory()}
    />
  );
}

export default EmployeeTable;
