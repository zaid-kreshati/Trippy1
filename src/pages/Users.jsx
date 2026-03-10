import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Users = () => {
  return (
    <div>
        <h1>all users</h1>
        <NavLink to="/users/add" >add</NavLink>
        <Outlet />
    </div>
  )
}

export default Users