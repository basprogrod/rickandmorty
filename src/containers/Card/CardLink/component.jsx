import React from 'react'
import { useHistory } from 'react-router-dom'
import pt from 'prop-types'

const CardLink = ({
  data,
  isLocations,
  forPath,
}) => {
  const history = useHistory()

  return (
    <a
      className={`link ${isLocations && 'inLocation'}`}
      href="/card"
      onClick={(e) => {
        e.preventDefault()
        history.push(`/card:${forPath}?id=${data.url.slice(data.url.lastIndexOf('/') + 1)}`)
      }}
    >
      {
        data.image
          && (
            <div className="linkImg">
              <img src={data.image} alt="" />
            </div>
          )
      }
      { data.name }
    </a>
  )
}

CardLink.propTypes = {
  data: pt.shape({
    url: pt.string,
    name: pt.string,
    image: pt.string,
  }),
  isLocations: pt.bool,
  forPath: pt.string,
}
CardLink.defaultProps = {
  data: [],
  isLocations: false,
  forPath: '',
}

export default CardLink
