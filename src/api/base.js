let url
if (process.env.NODE_ENV === "'dev'") {
  url = "/api"
} else {
  console.log("devdevdevdevdevdev")
  url = "/api"

  // url = 'http://localhost:8080/CIMforhistory/finance/'
  // url = "http://localhost:80/CIMforhistory/finance"
}
const base_url = url
export default base_url

// http://localhost:80/CIMforhistory/finance/db_fdtz/getdetial
// http://localhost:80/CIMforhistory/finance/landownerdata/getData
// http://localhost:80/CIMforhistory/finance/landproportion/getData
// http://localhost:80/CIMforhistory/finance/db_fdtz/getdetial
