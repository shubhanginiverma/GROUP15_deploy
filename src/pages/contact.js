import React from "react"
import Layout from "../components/Layout/Layout"

const Contact = () => {
  return (
    <Layout>
      <section class="container py-5 mb-4">
        <h2 class="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>
        <p class="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. We will get back to you within a matter of hours to help
          you.
        </p>

        <div class="row">
          <div class="col-lg-12 mb-5">
            <form
              method="POST"
              role="presentation"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="contact"
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
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <label for="subject" class="">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      class="form-control"
                    ></input>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 mb-4">
                  <div class="md-form">
                    <label for="message">Your message</label>
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
            <div className="text-center">
              <div
                className="btn-group btn-group-lg text-decoration-none mb-4"
                role="group"
                aria-label="Send"
              >
                <button type="submit" className="btn btn-primary btn-lg shadow">
                  <span className="mx-4">Send Message</span>
                </button>
                <button type="reset" className="btn btn-light btn-lg shadow">
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
