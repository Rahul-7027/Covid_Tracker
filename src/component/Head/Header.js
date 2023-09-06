import React, { useEffect, useState } from 'react'

const Header = () => {
  const [data, setData] = useState([])
  const getCovidData = async () => {
    try {
      const data = await fetch("https://data.covid19india.org/data.json")
      const result = await data.json();
      console.log(111, result.statewise[0])
      setData(result.statewise[0])
    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getCovidData();
  }, [])

  // render method for first time
  return (
    <div>
      <div className="main">
        <h1>LIVE &#128308;</h1>
        <h1>COVID -19 CORONAVIRUS TRACKER</h1>

        <ul class="cards">
          <div className="container my-3">
            <div className="row">
              <div className="col ">
                <div className="card card_content heightDta">
                  <div className="card-body">
                    <h5 className="card-title card_title "><span> OUR </span> COUNTRY</h5>
                    <p className="card-text card_text">BHARAT</p>
                  </div>
                </div>
              </div>
              <div className="col ">
                <div className="card card_content heightDta" >
                  <div className="card-body">
                  <h5 className="card-title card_title "><span> TOTAL </span> RECOVERED </h5>
                    <p className="card-text card_text">{data.recovered}</p>
                  </div>
                </div>
              </div>
              <div className="col ">
                <div className="card card_content heightDta" >
                  <div className="card-body">
                  <h5 className="card-title card_title "><span> TOTAL </span> CONFIRMED </h5>
                    <p className="card-text card_text">{data.confirmed}</p>
                  </div>
                </div>

                
              </div>
            </div>


            <div className="row my-3">
              <div className="col ">
                <div className="card card_content heightDta">
                  <div className="card-body">
                    <h5 className="card-title card_title "><span> TOTAL </span> DEATHS</h5>
                    <p className="card-text card_text">{data.deltaconfirmed}</p>
                  </div>
                </div>
              </div>
              <div className="col ">
                <div className="card card_content heightDta" >
                  <div className="card-body">
                  <h5 className="card-title card_title "><span> TOTAL </span> ACTIVES </h5>
                    <p className="card-text card_text">{data.active}</p>
                  </div>
                </div>
              </div>
              <div className="col ">
                <div className="card card_content heightDta" >
                  <div className="card-body">
                  <h5 className="card-title card_title "><span> LAST </span> UPDATES </h5>
                    <p className="card-text card_text">{data.lastupdatedtime}</p>
                  </div>
                </div>

                
              </div>
            </div>
          </div>  
        </ul>
      </div>
    </div>
  )
}

export default Header
