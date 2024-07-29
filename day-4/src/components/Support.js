import React from "react";
import Footer from "./Footer";
import './support.css'
import spimg from '../asserts/suport.png'

const support = [
  {
    location: "Corporate Headquarters",
    address: "Skymark One, Shop No.1, Ground Floor, Tower-D, Plot No. H-10B, Sector 98, Noida, UP-201301",
    phone: "+91-120-4770770",
    fax: "+91-120-4770771",
    customerCare: "0120-38883888",
    contactQueries: "727721eucs107@gmail.com",
    partnersQueries: "https://paytm.com/partner-with-us"
  },
  {
    location: "Mumbai",
    address: "One97 Communications Ltd, IV Floor, Enterprise Centre, Domestic Airport, Vile Parle East, Mumbai - 400 099",
    customerCare: "0120-38883888"
  },
  {
    location: "Bangalore",
    address: "One97 Communications Ltd, 144/533, 2nd floor, 22nd main, 150 Feet Ring Road, HSR Layout 1st Sector (AGARA), Bangalore - 560102",
    customerCare: "0120-38883888"
  },
  {
    location: "Chennai",
    address: "One97 Communications Ltd, II Floor, Balammal Building, No 33, Burkit Road, T Nagar, Chennai - 600 017",
    customerCare: "0120-38883888"
  },
  {
    location: "Kolkata",
    address: "One97 Communications Ltd, 6th Floor, Eco Station, BP 07, Salt Lake, Sec-5, Kolkata-700091",
    customerCare: "0120-38883888"
  },
  {
    location: "Bangladesh",
    address: "One97 Communications Bangladesh Private Limited, Apt-B/5, Level-5 (East -North Side), Bashati Dream, House # 3, Road # 20, Gulshan -1, Dhaka 1212"
  },
  {
    location: "Dubai",
    address: "One97 Communications Ltd, 106, First Floor, Building No.11, Dubai Internet City Dubai, UAE"
  },
  {
    location: "Nigeria",
    address: "One97 Communications Nigeria Ltd, Adol House 15, CIPM Avenue, Alausa Ikeja, PO Box 4929, Lagos Nigeria"
  }
];

const SupportCard = ({ location, address, phone, fax, customerCare }) => {
  return (
    <div className="support-card">
      <h2>{location}</h2>
      <p className="address">{address}</p>
      {phone && <p>Phone: {phone}</p>}
      {fax && <p>Fax: {fax}</p>}
      {customerCare && <p>Customer Care: {customerCare}</p>}
      <p>Email: payeasecare@gmail.com</p>
    </div>
  );
};

const SupportLocationCards = ({ supportData }) => {
  return (
    <div className="support-cards">
      {supportData.map((locationData, index) => (
        <SupportCard key={index} {...locationData} />
      ))}
    </div>
  );
};

function Support() {
  return (
    <div>
      <h1 className="support-title"><b>Support</b></h1>
      <div className="support-page">
        <img src={spimg} alt="suport image" className="suport-img coll"/>
        <div className="support-content coll">
          <SupportLocationCards supportData={support}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}



export default Support;
