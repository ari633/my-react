import React, { useState } from 'react'
import { Table } from 'antd'
import { useGetUsersQuery } from '../../services/users'

const columns = [
  {
    title: 'Username',
    dataIndex: 'login',
    render: (val) => val.username,
    sorter: (a, b) => a.username - b.username
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: (val) => `${val.title} ${val.first} ${val.last}`,
    sorter: (a, b) => a.name - b.name
  },
  {
    title: 'Email',
    dataIndex: 'email',
    sorter: (a, b) => a.email - b.email
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    sorter: (a, b) => a.gender - b.gender
  }
]

const Users = () => {
  const [query, setQuery] = useState({
    page: 1,
    results: 10,
    pageSize: 10,
    gender: '',
    sortBy: 'email',
    sortOrder: 'ascend'
  })

  const { data: results, isLoading } = useGetUsersQuery(query)

  const onChange = (pagination, _, sorter, extra) => {
    const { current, pageSize } = pagination
    const { order, field } = sorter
    const { action } = extra
    if (action === 'paginate') {
      setQuery(prev => ({ ...prev, page: current, pageSize: pageSize }))
    }
    if (action === 'sort') {
      setQuery(prev => ({ ...prev, sortBy: field, sortOrder: order }))
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!results && !results.results) {
    return <div>No Users :(</div>
  }

  return (
    <div>
      <Table
        columns={columns}
        dataSource={results.results}
        onChange={onChange}
        rowKey={record => record.login.uuid}
        pagination={{ pageSize: 10, total: 100, defaultCurrent: 1 }}
      />
    </div>
  )
}

export default Users
