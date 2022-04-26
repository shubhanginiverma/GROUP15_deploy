import React from "react"
import Layout from "../components/Layout/Layout"
import Image from "../components/Images/Images"

const Pathology = () => {
  return (
    <Layout>
      <div className="container py-5">
        {/* <button className="btn btn-primary mt-4">
          <a href="certificate5.pdf" target="_blank">
            Download Report
          </a>
        </button> */}
        <h2 className="pb-2 border-bottom text-center"><b>PATHOLOGY</b></h2>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search for a Test , Lab Address"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button class="btn btn-primary" type="button" id="button-addon2">
            Book Lab for Tests
          </button>
        </div>
        <div class="row mb-2">
          <div className="justify-content-centre py-5">
            <div className="card shadow">
              <div className="card-body">
                {/* <GeoAltFill size="30" /> */}
                <h2>View All Your Test Reports</h2>
                <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Name
                    </label>
                    <input
                      type="name"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      required
                    />
                  </div>

                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
                <button className="btn btn-primary mt-4">
                  <a href="certificate5.pdf" target="_blank">
                    Download Report
                  </a>
                </button>
              </div>{" "}
            </div>
          </div>
          <h2 className="pb-2 border-bottom text-center">
            {" "}
            TESTS BY CONDITIONS
          </h2>
          <div className="row">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card border-primary mb-3">
                <Image
                  className="m-2"
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename="Virions.jpg"
                  alt="1"
                />{" "}
                <div class="card-header">
                  <b>Covid 19 RTPCR With Home Collection</b>
                </div>
                <div class="card-body">
                  <h6 class="card-title">3 tests included</h6>
                  <p class="card-text">
                    <b>MRP ₹ 750</b>
                  </p>
                  <button
                    class="btn btn-primary"
                    type="button"
                    id="button-addon2"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card border-primary mb-3">
                {" "}
                <Image
                  className="m-2"
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename="CBC.jpg"
                  alt="1"
                />{" "}
                <div class="card-header">
                  <b>Complete Blood Count(CBC)</b>
                </div>
                <div class="card-body">
                  <h6 class="card-title">13 tests included</h6>
                  <p class="card-text">
                    <b>MRP ₹ 1350</b>
                  </p>
                  <button
                    class="btn btn-primary"
                    type="button"
                    id="button-addon2"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card border-primary mb-3">
                {" "}
                <Image
                  className="m-2"
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename="diabetes.jpg"
                  alt="1"
                />{" "}
                <div class="card-header">
                  <b>Diabetes and Lipid Profile</b>
                </div>
                <div class="card-body">
                  <h6 class="card-title">12 tests included</h6>
                  <p>
                    <b>MRP ₹ 822</b>
                  </p>
                  <button
                    class="btn btn-primary"
                    type="button"
                    id="button-addon2"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card border-primary mb-3">
                {" "}
                <Image
                  className="m-2"
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename="anemia.jpg"
                  alt="1"
                />{" "}
                <div class="card-header">
                  <b>Anemia</b>
                </div>
                <div class="card-body">
                  <h6 class="card-title">1 test included</h6>
                  <p class="card-text">
                    <b>MRP ₹ 220</b>
                  </p>
                  <button
                    class="btn btn-primary"
                    type="button"
                    id="button-addon2"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card border-primary mb-3">
                {" "}
                <Image
                  className="m-2"
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename="womenwell.jpg"
                  alt="1"
                />{" "}
                <div class="card-header">
                  <b>Women Wellness - Advance</b>
                </div>
                <div class="card-body">
                  <h6 class="card-title">36 tests included</h6>
                  <p>
                    <b>MRP ₹ 3587 </b>
                  </p>
                  <button
                    class="btn btn-primary"
                    type="button"
                    id="button-addon2"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card border-primary mb-3">
                {" "}
                <Image
                  className="m-2"
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename="seniorcitizen.jpg"
                  alt="1"
                />{" "}
                <div class="card-header">
                  <b>Comprehensive Package- Senior Citizen</b>
                </div>
                <div class="card-body">
                  <h6 class="card-title">67 tests included</h6>
                  <p class="card-text">
                    <b>MRP ₹ 4705</b>
                  </p>
                  <button
                    class="btn btn-primary"
                    type="button"
                    id="button-addon2"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Pathology
