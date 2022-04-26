import React from "react"
import Image from "../Images/Images"

const Hero = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <Image
            className="d-block mx-lg-auto img-fluid"
            filename="hero.png"
            alt="hero"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">
            MEDISURE - The heart of your healthcare.
          </h1>
          <p className="lead">
            <b>We aim to provide health services readily accessible on one platform and make valuable 
            information easily available, intelligible, and actionable so that
            readers can make the best possible health decisions.</b>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
