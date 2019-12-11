const getNumberFromUrl = (url) => Number(url.slice(url.lastIndexOf('/') + 1))

export default getNumberFromUrl
