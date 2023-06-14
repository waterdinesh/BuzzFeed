import React from "react";
import "../header/head.css";

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB paddingTB'>
          <div className='logo'>
            <img src='../images/logoo.png' alt='' />
          </div>
          <div className='ad'>
            <img src='../images/headerbb.jpeg' alt='' className="adimg" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
