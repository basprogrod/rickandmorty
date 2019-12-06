import React from 'react'
import pt from 'prop-types'
import { Select } from 'antd'
import { INCLUDE } from '@/constants'
import 'antd/dist/antd.css'

const { Option, OptGroup } = Select

const CustomSelect = ({
  hendleChange,
  path,
}) => (
  <>
    {
      path.includes(INCLUDE.CHARACTERS)
        && (
          <Select
            defaultValue="name"
            style={{ width: 100 }}
            onChange={(value) => {
              hendleChange(value)
            }}
          >
            <Option value="name">Name</Option>
            <Option value="gender">Gender</Option>
            <Option value="species">Species</Option>
            <Option value="status">Status</Option>
            <Option value="type">Type</Option>
          </Select>
        )
    }
    {
      path.includes(INCLUDE.LOCATIONS)
        && (
          <Select
            defaultValue="name"
            style={{ width: 100 }}
            onChange={(value) => {
              hendleChange(value)
            }}
          >
            <Option value="name">Name</Option>
            <Option value="type">Type</Option>
            <Option value="dimension">Dimention</Option>
          </Select>
        )
    }
    {
      path.includes(INCLUDE.EPISODES)
        && (
          <Select
            defaultValue="name"
            style={{ width: 100 }}
            onChange={(value) => {
              hendleChange(value)
            }}
          >
            <Option value="name">Name</Option>
            <Option value="air_date">Created</Option>
            <Option value="episode">Episode</Option>
          </Select>
        )
    }
  </>
)

CustomSelect.propTypes = {
  hendleChange: pt.func,
  path: pt.string,
}
CustomSelect.defaultProps = {
  hendleChange: () => {},
  path: '',
}

export default CustomSelect
