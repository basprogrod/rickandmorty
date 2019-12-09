import React from 'react'
import { useHistory } from 'react-router-dom'
import pt from 'prop-types'
import { PATH } from '@/constants'

const Link = ({ item, record, from }) => {
  const history = useHistory()
  return (
    <a
      href="/"
      onClick={(e) => {
        e.preventDefault()
        history.push(`${PATH.CARD}/${from}?id=${record.id}`)
      }}
    >
      {item}
    </a>
  )
}

Link.propTypes = {
  item: pt.string,
  from: pt.string,
  record: pt.shape({
    id: pt.number,
  }),
}
Link.defaultProps = {
  item: '',
  record: {},
  from: '',
}

export default Link
