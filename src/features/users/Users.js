import React, { useState } from 'react'
import { Table, Divider } from 'antd'
import { useGetUsersQuery } from '../../services/users'
import FilterForm from './FilterForm'

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
  const initQuery = {
    page: 1,
    results: 10,
    pageSize: 10,
    gender: '',
    sortBy: '',
    sortOrder: '',
    keyword: ''
  }

  const initForms = {
    keyword: ''
  }

  const [query, setQuery] = useState(initQuery)
  const [forms, setForms] = useState(initForms)

  const { data: results, isLoading } = useGetUsersQuery(query)

  const TableOnChange = (pagination, _, sorter, extra) => {
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

  const onSearch = (value) => {
    setQuery(prev => ({ ...prev, keyword: value }))
  }

  const onSearchGender = (value) => {
    setQuery(prev => ({ ...prev, gender: value }))
  }

  const onReset = () => {
    setQuery(initQuery)
    setForms(initForms)
  }

  const inputOnChange = (event) => {
    const { name, value } = event.target
    setForms({ [name]: value })
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!results && !results.results) {
    return <div>No Users :(</div>
  }

  return (
    <div>
      <FilterForm
        forms={ forms }
        query={ query }
        isLoading={ isLoading }
        onSearch={ onSearch }
        inputOnChange={ inputOnChange }
        onSearchGender={ onSearchGender }
        onReset={ onReset }
      />
      <Divider />
      <Table
        columns={columns}
        dataSource={results.results}
        onChange={TableOnChange}
        rowKey={record => record.login.uuid}
        pagination={{ pageSize: 10, total: 100, defaultCurrent: 1 }}
      />
    </div>
  )
}

export default Users
