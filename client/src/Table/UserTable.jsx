import React from 'react'
import Table from '../components/Table'
import AddUser from '../components/AddUser'
import UpdateUser from '../components/UpdateUser'
import DeleteUser from '../components/DeleteUser'

const UserTable = () => {
  return (
    <>
    <Table></Table>
    <AddUser></AddUser>
    <UpdateUser></UpdateUser>
    <DeleteUser></DeleteUser>
    </>
  )
}

export default UserTable