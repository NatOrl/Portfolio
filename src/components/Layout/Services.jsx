import React, {useState } from  "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";
import "./Services.css";


const Services = () => {
// const [count, setCount] = useState(0);
const [countWeb, setCountWeb] = useState(0);
const [countDes, setCountDes] = useState(0);
const [countFbAdds, setCountFbAdds] = useState(0);
const [countGoogleAds, setCountGoogleAds] = useState(0);

const [totalClicksWeb, setTotalClicksWeb] = useState(0);
const [totalClicksDes, setTotalClicksDes] = useState(0);
const [totalClicksAdds, setTotalClicksAdds] = useState(0);
const [totalClicksGoogleAdds, setTotalClicksGoogleAdds] = useState(0);

  return (
    <div id="services" className="services">
      <h1 className="py-5 mb-2">my offers</h1>
      <h3 className="title text-white mb-3">Total Price for Selected Offers</h3>
      <h3 className="text-white mb-5">$ {countWeb + countDes + countFbAdds + countGoogleAds}</h3>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
              <h3 className="title text-white">Web Design</h3>
              <p className="text text-white">I approach each project individually and always focus on the result.</p>
              <h5 className="text-hours text-white mb-0 ">total hours: {totalClicksWeb}</h5>
              <div className="button-container d-flex flex-column">
                    <button className="badge bg-light text-black mb-2" onClick={() => {setCountWeb(countWeb + 10), setTotalClicksWeb(totalClicksWeb + 1)}}>Hour rate $10/hr</button>
                    <button className="badge bg-light text-black mb-0" onClick={() => {setCountWeb(countWeb - 10), setTotalClicksWeb(totalClicksWeb - 1)}} disabled={countWeb === 0}>Delete service</button>
              </div>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>

              <h3 className="title text-white" >Web Development</h3>
              <p className="text text-white">Your website will be build with an new proven technologies.</p>
              <h5 className="text-hours text-white mb-0">total hours: {totalClicksDes}</h5>
              <div className="button-container d-flex flex-column">
                    <button className="badge bg-light text-black mb-2" onClick={() => {setCountDes(countDes + 15), setTotalClicksDes(totalClicksDes + 1)}}>Hour rate $15/hr</button>
                    <button className="badge bg-light text-black mb-0" onClick={() => {setCountDes(countDes - 15), setTotalClicksDes(totalClicksDes - 1)}} disabled={countDes === 0}>Delete service</button>
              </div>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFacebookF} size="2x" /></div>

              <h3 className="title text-white">Facebook Ads</h3>
              <p className="text text-white">Your potential clients well see your services or product on Facebook.</p>
              <h5 className="text-hours text-white mb-0">total hours: {totalClicksAdds}</h5>
              <div className="button-container d-flex flex-column">
                    <button className="badge bg-light text-black mb-2" onClick={() => {setCountFbAdds(countFbAdds + 20), setTotalClicksAdds(totalClicksAdds + 1)}}>Hour rate $20/hr</button>
                    <button className="badge bg-light text-black mb-0" onClick={() => {setCountFbAdds(countFbAdds - 20), setTotalClicksAdds(totalClicksAdds - 1)}} disabled={countFbAdds === 0}>Delete service</button>
              </div>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faGoogle} size="2x" /></div>

              <h3 className="title text-white">Google Ads</h3>
              <p className="text text-white">Your service or product will appear at the top of the Google search.</p>
              <h5 className="text-hours text-white mb-0">total hours: {totalClicksGoogleAdds}</h5> 
              <div className="button-container d-flex flex-column">
                    <button className="badge bg-light text-black mb-2" onClick={() => {setCountGoogleAds(countGoogleAds + 25), setTotalClicksGoogleAdds(totalClicksGoogleAdds + 1)}}>Hour rate $25/hr</button>
                    <button className="badge bg-light text-black mb-0" onClick={() => {setCountGoogleAds(countGoogleAds - 25), setTotalClicksGoogleAdds(totalClicksGoogleAdds -1)}} disabled={countGoogleAds === 0}>Delete service</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Services;


