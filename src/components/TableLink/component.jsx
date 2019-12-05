import React from 'react'
import { useHistory } from 'react-router-dom'
import pt from 'prop-types'

const TableLink = ({ item, record, from }) => {
  const history = useHistory()
  return (
    <a
      href="/card"
      onClick={(e) => {
        e.preventDefault()
        history.push(`/card:${from}?id=${record.id}`)
      }}
    >
      {item}
    </a>
  )
}

TableLink.propTypes = {
  item: pt.string,
  from: pt.string,
  record: pt.shape({
    id: pt.number,
  }),
}
TableLink.defaultProps = {
  item: '',
  record: {},
  from: '',
}

export default TableLink
