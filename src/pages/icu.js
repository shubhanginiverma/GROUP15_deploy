import React from "react"
import Layout from "../components/Layout/Layout"
import Image from "../components/Images/Images"
// import Tableau from "./tableau"
const ICU = () => {
  return (
    <Layout>
      <div className="container py-5">
        <h2 className="pb-2 border-bottom text-center">CRITICAL CARE UNIT</h2>
        <div class = "col-md-12 text-center">
        <a href = "https://public.tableau.com/views/HealthMonitoringTool-WeeklyMonthlyViews_16491824554860/HealthMonitoringDashboard?%3Adisplay_static_image=y&%3AbootstrapWhenNotified=true&%3Aembed=true&%3Alanguage=en-US&:embed=y&:showVizHome=n&:apiID=host0#navType=2&navSrc=Parse"
        target = "_blank">
          <button type="button" class="btn-info btn-lg btn-block m-5">EMERGENCY ROOM DASHBOARD</button>
        </a>
        </div>
        <div class="row mb-2">
          <div class="col-md-12">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                {/* <strong class="d-inline-block mb-2 text-primary">World</strong> */}
                {/* <h3 class="mb-0">Risks </h3> */}
                {/* <div class="mb-1 text-muted">April 04</div> */}
                <p class="card-text mb-auto">
                  Critical care or Intensive care is a crucial medical
                  specialty caring for patients who are critically ill. They may
                  require support for instability (hypertension/hypotension),
                  airway or respiratory compromise (ventilator support), acute
                  renal failure, cardiac arrhythmias, or the cumulative effects
                  of multiple organ failure, more commonly referred to now as
                  multiple organ dysfunction syndrome. Patients needing
                  intensive/invasive monitoring, such as in the crucial hours
                  after major surgery or patients who are considered too
                  unstable to transfer to a less intensively monitored unit may
                  also be placed in the intensive care units.
                </p>{" "}
                <p>
                  Our 24-hour critical care units are a combination of
                  multidisciplinary ICUS as well as ICUS dedicated to post
                  cardiac surgery patients, stroke patients, post-transplant
                  patients, as well as special ICUs for neonates and pediatric
                  cases. It has redefined intensive care medicine in India
                  through its medical expertise and state of the art
                  infrastructure, establishing its services as the best critical
                  care services in India. A lot of emphasis is also placed on
                  areas like nurses’ training, standardizing care through
                  clinical pathways and the identification of ethical and
                  economic issues pertaining to Critical Care making it the best
                  critical care website in India.
                </p>
              </div>
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
              </div>
            </div>
          </div>

          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <b>Clinical Team</b>
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="col-auto d-none d-lg-block">
                    <Image
                      className="m-2"
                      style={{
                        height: "200px",
                        width: "200px",
                        borderRadius: "100%",
                      }}
                      filename="clinical.jpg"
                      alt="1"
                    />{" "}
                  </div>
                  <strong>
                    Critical care specialists are dedicated to ensuring the
                    survival of the most critically ill patients. Trained in the
                    best of institutions around the world, these dedicated
                    specialists work 24 X 7 to revive critically ill patients.
                    They also manage critical care units efficiently, ensuring
                    that the whole team of doctors, nurses and paramedics work
                    together, using strict protocols to minimise infections,
                    complications and ensure speedy recovery.
                  </strong>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <b>ICU Management</b>
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="col-auto d-none d-lg-block">
                    <Image
                      className="m-2"
                      style={{
                        height: "200px",
                        width: "200px",
                        borderRadius: "100%",
                      }}
                      filename="icu-management.jpg"
                      alt="1"
                    />{" "}
                  </div>
                  <strong>
                    <p>
                      Our infection control protocols pertain to a wide spectrum
                      of interventions & have been developed jointly with
                      intensivists & anesthetists. ICUs high risk areas for
                      patient where lifethreatening mistakes & omissions in care
                      can occur. Checklist of care should be addressed daily
                    </p>

                    <p>
                      Reponsibility of every member of the health care team to
                      ensure compliance with hospital and unit infection control
                      policies - like hand-washing before & after examining a
                      patient, use of alcohol hand rubs, use of sterile barriers
                      & disposable gloves, safe disposal of all sharps & patient
                      consumables & traffic control.
                    </p>
                  </strong>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <b>Remote Critical Care Expertise</b>
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="col-auto d-none d-lg-block">
                    <Image
                      className="m-2"
                      style={{
                        height: "200px",
                        width: "200px",
                        borderRadius: "100%",
                      }}
                      filename="remote.jpg"
                      alt="1"
                    />{" "}
                  </div>
                  <strong>
                    This Website is Largest Critical Care provider among
                    corporate healthcare sector in India It has rich experience
                    of setting up remote tele-health facilities including
                    Tele-ICU Remote Health Care programme has pioneered remote
                    health agenda in partnership with state/national health
                    programmes in India Embedded in the Remote Health Care
                    programme is enriched environment of continuous monitoring
                    of the services, education, evaluation and quality assurance
                    Provide sustained improvements in our offerings to the
                    partners and the patients We offer a flexible yet robust
                    approach to provision of remote-site critical care services
                    for a range of requirements. These include Telephonic
                    consultations Video-linked consultations Full-fledged
                    tele-ICU service Bed-side critical care Stabilization and
                    safe transfer
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ICU



