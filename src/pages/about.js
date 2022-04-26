import React from "react"
import Layout from "../components/Layout/Layout"
import Team from "../components/Team/Team"

const About = () => {
  return (
    <Layout>
      <div class="medi-container py-5">
        <div class="medi-text">
          <h1 class="display-4">
            <strong>About Medisure</strong>
          </h1>
          <p class="lead mb-0">
            <b>
              What we do to help our clients - MediSure is a resource for those
              seeking health information, tools for managing their health, and
              support. MediSure mission is to make health and wellness
              information easily available, intelligible, and actionable so that
              readers can make the best possible health decisions. Qualified
              authors, editors, clinicians, and other professionals develop,
              fact-check, and review our content. You've come to the correct
              place whether you want to learn more about a health issue,
              research a medication, buy medicines, get lab tests done or get
              some advice for a healthy living. You'll come across stuff that is
              both educational and fascinating.
            </b>
          </p>
        </div>
        <div class="medi-pic d-none d-lg-block">
          <img
            src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
            alt=""
            class="img-fluid p-5"
          ></img>
        </div>
      </div>

      <div class="bg-white py-5">
        <div class="container py-5">
          <div class="row align-items-center mb-5">
            <div class="col-lg-6 order-2 order-lg-1">
              <h2 class="font-weight-light">24*7 ONLINE CONSULTATION</h2>
              <p class="font-italic mb-4">
                Browse or search our list of specialists and request an
                appointment through audio/video call with a verified doctor. Get
                a digital prescription and a free follow-up.
              </p>
            </div>
            <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg"
                alt=""
                class="img-fluid mb-4 mb-lg-0"
              ></img>
            </div>
          </div>

          <div class="block">
            <div class="row align-items-center">
              <div class="col-lg-5 px-0 mx-auto">
                <img
                  src="https://i.imgur.com/I8QEzXB.png"
                  alt=""
                  class="img-fluid mb-4 mb-lg-0"
                ></img>
              </div>
              <div class="col-lg-6">
                <h2 class="font-weight-light">HIGHLY SKILLED CARE</h2>
                <p class="font-italic mb-4">
                  At Medisure you will receive the best care available,
                  personalized for your specific needs. We believe in treating
                  the whole person, not just the symptom and ensuring that our
                  approach is right for you and your lifestyle.
                </p>
              </div>
            </div>
          </div>

          <br></br>
          <br></br>
          <div class="row align-items-center mb-5">
            <div class="col-lg-6 order-2 order-lg-1">
              <h2 class="font-weight-light">
                LAB TEST FROM THE COMFORT OF YOUR HOME
              </h2>
              <p class="font-italic mb-4">
                Spending hours in a queue at a diagnostic lab or a hospital is
                now a thing of the past. With Medisure you can get your lab
                tests done from the comfort of your home. Our highly qualified
                phlebotomist will collect the samples at your preferred time. We
                maintain 100% safety and hygiene. You can also view your lab
                reports online.
              </p>
            </div>
            <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src="https://i.imgur.com/6uLCFUs.jpg"
                alt=""
                class="img-fluid mb-4 mb-lg-0"
              ></img>
            </div>
          </div>
          <br></br>
          <br></br>

          <div class="block">
            <div class="row align-items-center">
              <div class="col-lg-5 px-0 mx-auto">
                <img
                  src="https://i.imgur.com/Tr25Kll.png"
                  alt=""
                  class="img-fluid mb-4 mb-lg-0"
                ></img>
              </div>
              <div class="col-lg-6">
                <h2 class="font-weight-light">
                  EFFORTLESS ONLINE MEDICINE ORDER
                </h2>
                <p class="font-italic mb-4">
                  Medisure provides you your go-to online pharmacy store for all
                  your medicine needs - be it your regular medications, or
                  over-the-counter medicines. We also have a range of products
                  in the personal care, baby care, health and nutrition,
                  wellness, and lifestyle categories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Team />
    </Layout>
  )
}

export default About
