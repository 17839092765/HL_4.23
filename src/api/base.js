let url
if (process.env.NODE_ENV === "'dev'") {
  // url = "http://192.168.5.49:6639/CIMforhistory/finance/";
  url = "http://58.250.250.180:9081/CIMforhistory/finance/"
} else {
  url = "/api"
  // url ="http://58.250.250.180:9081/CIMforhistory/finance/"

  // url = 'http://localhost:8080/CIMforhistory/finance/'
}
const base_url = url
export default base_url

// http://localhost:80/CIMforhistory/finance/db_fdtz/getdetial
// http://localhost:80/CIMforhistory/finance/landownerdata/getData
// http://localhost:80/CIMforhistory/finance/landproportion/getData
// http://localhost:80/CIMforhistory/finance/db_fdtz/getdetial
