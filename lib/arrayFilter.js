function arrayFilter(data, type, order) {
   data.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1))

   if (order == 'title-desc') {
      data.sort().reverse()
   } else if (order == 'year-asc') {
      data.sort((a, b) => a.releaseYear - b.releaseYear)
   } else if (order == 'year-desc') {
      data.sort((a, b) => b.releaseYear - a.releaseYear)
   }

   const limitData = []

   data.forEach((series, i) => {
      if (
         limitData.length <= 20 &&
         series.programType == type &&
         series.releaseYear >= 2010
      ) {
         limitData.push(series)
      }
   })

   return limitData
}

export default arrayFilter
