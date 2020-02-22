import React from 'react';

import {useState} from 'react';

import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import { useSelector } from 'react-redux'

const Dashboard = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const user = useSelector(state => state.authentication.user);
    const isLoggedIn = useSelector(state => state.authentication.loggedIn);


    const getPrivileges = () => {
      let privilegeList = [];
      if (user.is_admin) {
        privilegeList.push("admin");
      }
      if (user.is_curator) {
        privilegeList.push("curator");
      }
      
      // default privilege set
      privilegeList.push("composer");

      let output = "";

      const roleCount = privilegeList.length;

      for (let i = 0; i < roleCount; i += 1) {
        output += privilegeList[i];
        if (roleCount - i >= 2 ) {
          if (roleCount > 2) {
            output += ", ";
          } else {
            output += " ";
          }
        }
        
        if (roleCount - i === 2) {
          output += "and "
        }
      }

      return output;
    }

    const isAuthorized = user && isLoggedIn;
  
    return (
      <>
        <h2>Dashboard</h2>
        <h3 classname={isAuthorized ? "" : "alert alert-danger"}>
          {!isAuthorized && "Unauthorized. Are you logged in?"}
          {isAuthorized && `You have ${getPrivileges()} privileges.`}
        </h3>
      </>
    );
}
  
export default Dashboard;