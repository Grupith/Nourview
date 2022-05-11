import React, { useState } from 'react';
import Sidebar from './Sidebar';

export default function Dashboard() {

  const [showDashboard, setShowDashboard] = useState();
  const [showEmployeesPage, setShowEmployeesPage] = useState();
  const [showMessagesPage, setShowMessagesPage] = useState();


  return (
    <div className='Dashboard'>
      <Sidebar showDashboard={showDashboard}
               setShowDashboard={setShowDashboard}
               setShowEmployeesPage={setShowEmployeesPage}
               setShowMessagesPage={setShowMessagesPage} />
      {showDashboard ? <div className='Main'>
        <h1>Dashboard View</h1>
        </div> : <div></div> }
      {showEmployeesPage ? <div className='EmployeesPage'>
        <h1>Employees Page</h1>
        </div> : <div></div>}

      {showMessagesPage && <div className='MessagesPage'><h1>Messages Page</h1></div>}
      
    </div>
  ) 
}
