import React from 'react'
import { Space, Select, Button, Input, Form } from 'antd'
import PropTypes from 'prop-types'

const FilterForm = ({
  forms,
  query,
  isLoading,
  onSearch,
  inputOnChange,
  onSearchGender,
  onReset
}) => {
  const { Search } = Input
  const { Option } = Select

  return (
    <Space>
      <Form layout="inline">
        <Form.Item label="Search" htmlFor="search">
          <Search
            id="search"
            placeholder="Search..."
            name="keyword"
            value={forms.keyword}
            loading={isLoading}
            enterButton
            onSearch={onSearch}
            onChange={inputOnChange}
          />
        </Form.Item>
        <Form.Item label="Gender" htmlFor="gender">
          <Select
            id="gender"
            defaultValue={query.gender}
            style={{ width: 120 }}
            onSelect={onSearchGender}
          >
            <Option value="">All</Option>
            <Option value="female">Female</Option>
            <Option value="male">Male</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button onClick={onReset} data-testid="button-reset">Reset Filter</Button>
        </Form.Item>
      </Form>
    </Space>
  )
}

FilterForm.defaultProps = {
  forms: {
    keyword: ''
  },
  query: {
    gender: ''
  },
  isLoading: false,
  onSearch: () => {},
  inputOnChange: () => {},
  onSearchGender: () => {},
  onReset: () => {}
}

FilterForm.propTypes = {
  forms: PropTypes.object,
  query: PropTypes.object,
  isLoading: PropTypes.bool,
  onSearch: PropTypes.func,
  inputOnChange: PropTypes.func,
  onSearchGender: PropTypes.func,
  onReset: PropTypes.func
}

export default FilterForm
