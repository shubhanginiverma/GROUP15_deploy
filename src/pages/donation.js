import React from "react"
import Layout from "../components/Layout/Layout"
import { Image } from "react-bootstrap-icons"
const Donation = () => {
  return (
    <Layout>
      <div className="container py-5">
        <h2 className="pb-2  text-center text-dark">Be An Organ Donar</h2>
        <h3 className="pb-2  text-center text-underline">
          By pledging your organs you can save upto 8 lives
        </h3>
        <div class="row mb-2">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static bg-info">
              {/* <strong class="d-inline-block mb-2 text-primary">World</strong> */}
              {/* <h3 class="mb-0">Risks </h3> */}
              {/* <div class="mb-1 text-muted">April 04</div> */}
              {/* <div class="col-md-12"></div>
              <div class="col-auto d-none d-lg-block">
                <Image
                  className="m-2"
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename="risk.jpg"
                  alt="1"
                />
              </div> */}
              <p class="card-text mb-auto">
                Many people who need transplants of organs and tissues cannot
                get them because of a shortage of donations. Of the 123,000
                Americans currently on the waiting list for a lifesaving organ
                transplant, more than 101,000 need a kidney, but only 17,000
                people receive one each year. Every day 12 people die waiting
                for a kidney. Organ and tissue donation helps others by giving
                them a second chance at life.
              </p>
              {/* <div class="col-md-12"></div>
              <div class="col-auto d-none d-lg-block">
                <Image
                  className="m-2"
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename="risk.jpg"
                  alt="1"
                />
              </div> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div class="card bg-warning mb-3">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                <h4 class="card-title">Organ Donation Awarness</h4>
                <p class="card-text">
                  <b>
                    {" "}
                    Yes , even you can help us spread awarness on organ
                    donation! Organize a short awarness session given by us at
                    your office , college ,school , club or anywhere else . Help
                    us get more of your friends ,colleagues , relatives and
                    others know more organ transplantation is the most preferred
                    treatment. The need for the organ transplantation is higher
                    than the availability. For the transplantation program to be
                    successful, awareness regarding organ donation is needed
                    about organ donation. -
                  </b>
                </p>
              </div>
            </div>
          </div>
          {/* </div> */}
          <div className="col-lg-4">
            <div class="card text-black  mb-3">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                <h4 class="card-title">Body Donation Directory</h4>
                <p class="card-text">
                  <b>
                    Body donation is governed by the Anatomy Act, 1949 - “An Act
                    to provide for the supply of unclaimed bodies of deceased
                    persons (or donated bodies or any part thereof of deceased
                    persons) to hospitals and medical and teaching institutions
                    for the purpose of anatomical examination and dissection and
                    other similar purposes.The donation of the whole body after
                    death for the purpose of medical research and education.
                    Body donation is the important for helping medical students
                    and researches to understand the human body.
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card bg-warning mb-3">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                <h4 class="card-title">Blood Donation</h4>
                <p class="card-text">
                  <b>
                    The blood donation process from the time you arrive until
                    the time you leave takes about an hour. The donation itself
                    is only about 8-10 minutes on average. If you’re donating
                    whole blood, we’ll cleanse an area on your arm and insert a
                    brand new sterile needle for the blood draw. A whole blood
                    donation takes about 8-10 minutes, during which you’ll be
                    seated comfortably or lying down. When approximately a pint
                    of whole blood has been collected, the donation is complete
                    and a staff person will place a bandage on your arm.
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2>If You Want To Know More</h2>
        <div class="card bg-light mb-3">
          <div class="row">
            <div class="col-md-9 mb-md-0 mb-5">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
                netlify
              >
                <div class="row">
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <label for="name" class="">
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        class="form-control"
                      ></input>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <label for="email" class="">
                        Your email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        class="form-control"
                      ></input>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <label for="email" class="">
                        Contact Number
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        class="form-control"
                      ></input>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form">
                      <label for="message">Enter your Query</label>
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        class="form-control md-textarea"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
              <div class="text-center text-md-left">
                <a
                  class="btn btn-primary"
                  onclick="document.getElementById('contact-form').submit();"
                >
                  Send
                </a>
              </div>
              <div class="status"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Donation
