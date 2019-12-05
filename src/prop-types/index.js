import pt from 'prop-types'

export default {
  SELECTED_CHARACTER: {
    created: pt.string,
    episode: pt.array,
    gender: pt.string,
    id: pt.number,
    image: pt.string,
    location: pt.shape({
      name: pt.string,
      url: pt.string,
    }),
    name: pt.string,
    origin: pt.shape({
      name: pt.string,
      url: pt.string,
    }),
    species: pt.string,
    status: pt.string,
    type: pt.string,
  },
  SELECTED_LOCATION: {
    created: pt.string,
    dimention: pt.string,
    id: pt.number,
    residents: pt.array,
    name: pt.string,
    type: pt.string,
    url: pt.string,
  },
  SELECTED_EPISODE: {
    air_date: pt.string,
    characters: pt.array,
    created: pt.string,
    id: pt.number,
    name: pt.string,
    episode: pt.string,
    url: pt.string,
  },
}
