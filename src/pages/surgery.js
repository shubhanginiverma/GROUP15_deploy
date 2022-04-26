import React from "react"
import Image from "../components/Images/Images"
import Layout from "../components/Layout/Layout"

const Surgery = () => {
  return (
    <Layout>
      <div className="container py-5">
        <h2 className="pb-2 border-bottom text-center">
          {" "}
          Preparing for Surgery
        </h2>
        <div class="form-group mb-4">
          <label for="exampleInputEmail1" class="form-label mt-4">
            Surgery Online
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Search For Surgery"
          />
        </div>

        <div class="row mb-2">
          <div class="col-md-12">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                {/* <strong class="d-inline-block mb-2 text-primary">World</strong> */}
                <h3 class="mb-0">Risks </h3>
                {/* <div class="mb-1 text-muted">April 04</div> */}
                <p class="card-text mb-auto">
                  Understand how certain health factors, conditions, or habits
                  such as age, smoking, obesity, and sleep apnea may increase
                  the chance for complications. Certain health factors can
                  increase surgery and anesthesia risks. Physician
                  anesthesiologists help lower these risks by examining your
                  medical history and conducting a health assessment before
                  surgery, and by monitoring and supervising your care during
                  and after surgery.
                </p>
                <a href="#" class="stretched-link">
                  Continue reading
                </a>
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
          <div class="col-md-12">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col-auto d-none d-lg-block">
                <Image
                  className="m-2"
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename="preparation.jpg"
                  alt="1"
                />{" "}
              </div>

              <div class="col p-4 d-flex flex-column position-static">
                {/* <strong class="d-inline-block mb-2 text-success">Design</strong> */}
                <h3 class="mb-0">Preparation</h3>
                {/* <div class="mb-1 text-muted">April 05</div> */}
                <p class="mb-auto">
                  Learn the essential steps to take and the critical questions
                  to ask your physician anesthesiologist before a surgery or
                  procedure for you or your child. Whatever type of surgery
                  you’re having and wherever you have it, you will receive some
                  type of anesthesia to keep you comfortable. Careful
                  preparation for surgery and anesthesia helps ensure a
                  successful procedure and smooth recovery.
                </p>
                <a href="#" class="stretched-link">
                  Continue reading
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                {/* <strong class="d-inline-block mb-2 text-success">Design</strong> */}
                <h3 class="mb-0">Recovery</h3>
                {/* <div class="mb-1 text-muted">April 06</div> */}
                <p class="mb-auto">
                  Stay safe and gain peace of mind by knowing what to expect
                  after anesthesia and how a physician anesthesiologist can help
                  you feel better during recovery.If you’re having surgery, you
                  probably know that you’ll receive some type of anesthesia to
                  keep you from feeling pain during the procedure. Depending on
                  the type of anesthesia you have — local anesthetic, general
                  anesthesia, or anything in between — you may need to factor in
                  some anesthesia recovery time.
                </p>
                <a href="#" class="stretched-link">
                  Continue reading
                </a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <Image
                  className="m-2"
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename="recovery.jpeg"
                  alt="1"
                />{" "}
              </div>
            </div>
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col-auto d-none d-lg-block">
                <Image
                  className="m-2"
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename="procedure.jpg"
                  alt="1"
                />{" "}
              </div>
              <div class="col p-4 d-flex flex-column position-static">
                {/* <strong class="d-inline-block mb-2 text-primary">World</strong> */}
                <h3 class="mb-0">Procedure </h3>
                {/* <div class="mb-1 text-muted">April 04</div> */}
                <p class="card-text mb-auto">
                  Learn more about procedures such as C-sections, knee
                  surgeries, and colonoscopies, including special considerations
                  for anesthesia and postsurgical pain relief. The type of
                  anesthesia you receive to prevent pain during surgery depends
                  on the procedure you’re having. The type of procedure also can
                  affect your considerations for recovery, including your
                  options for managing postsurgical pain.
                </p>
                <a href="#" class="stretched-link">
                  Continue reading
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* 
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table> */}
        <h2 className="pb-2 border-bottom text-center"> Quick Enquiry</h2>

        <div className="row">
          <div className="col-lg-4">
            <div class="card text-center text-white bg-secondary mb-3">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                {/* <h4 class="card-title">Primary card title</h4> */}
                <div class="col-auto d-none d-lg-block">
                  <Image
                    className="m-2"
                    style={{
                      height: "200px",
                      width: "200px",
                      borderRadius: "100%",
                    }}
                    filename="doctor1.jpg"
                    alt="1"
                  />{" "}
                </div>
                <h4 class="card-title">Dr. Aahana Verma</h4>
                <p class="card-text">
                  HOD OBSTETRICS & GYNAECOLOGY, Apollo Hospital, Delhi.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card text-center text-white bg-info mb-3">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                {/* <h4 class="card-title">Secondary card title</h4> */}
                <div class="col-auto d-none d-lg-block">
                  <Image
                    className="m-2"
                    style={{
                      height: "200px",
                      width: "200px",
                      borderRadius: "100%",
                    }}
                    filename="doctor2.jpg"
                    alt="1"
                  />{" "}
                </div>
                <h4 class="card-title">Dr. P K Sharma</h4>
                <p class="card-text">
                  SENIOR CONSULTANT CARDIOLOGY, Interventional
                  Cardiology, Apollo Hospital, Lucknow.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card text-center text-white bg-secondary mb-3">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                {/* <h4 class="card-title">Success card title</h4> */}
                <div class="col-auto d-none d-lg-block">
                  <Image
                    className="m-2"
                    style={{
                      height: "200px",
                      width: "200px",
                      borderRadius: "100%",
                    }}
                    filename="doctor6.jpg"
                    alt="1"
                  />{" "}
                </div>
                <h4 class="card-title">Dr. Ajay Sinha</h4>
                <p class="card-text">
                  CONSULTANT INTERVENTIONAL CARDIOLOGY, Cardiac Sciences,
                  Interventional Cardiology, City Hospital, Bombay.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div class="card text-center text-white bg-secondary mb-3">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                {/* <h4 class="card-title">Primary card title</h4> */}
                <div class="col-auto d-none d-lg-block">
                  <Image
                    className="m-2"
                    style={{
                      height: "200px",
                      width: "200px",
                      borderRadius: "100%",
                    }}
                    filename="doctor11.jpg"
                    alt="1"
                  />{" "}
                </div>
                <h4 class="card-title">Dr. Neha Sharma</h4>
                <p class="card-text">
                  ADDITIONAL DIRECTOR-ANAESTHESIOLOGY Support Specialties,
                  Maxwell Hospital, Jaipur.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card text-center text-white bg-info mb-3">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                {/* <h4 class="card-title">Secondary card title</h4> */}
                <div class="col-auto d-none d-lg-block">
                  <Image
                    className="m-2"
                    style={{
                      height: "200px",
                      width: "200px",
                      borderRadius: "100%",
                    }}
                    filename="doctor9.jpg"
                    alt="1"
                  />{" "}
                </div>
                <h4 class="card-title">Dr. Eugene D'Silva</h4>
                <p class="card-text">
                  DIRECTOR-OBSTETRICS & GYNAECOLOGY, Fortis Hospital, Jaipur.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card text-center text-white bg-secondary mb-3">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                {/* <h4 class="card-title">Success card title</h4> */}
                <div class="col-auto d-none d-lg-block">
                  <Image
                    className="m-2"
                    style={{
                      height: "200px",
                      width: "200px",
                      borderRadius: "100%",
                    }}
                    filename="doctor10.jpg"
                    alt="1"
                  />{" "}
                </div>
                <h4 class="card-title">Dr. Anita Bansal</h4>
                <p class="card-text">
                  CONSULTANT PULMONOLOGY, Lung Specialist, Pink Vinayak Hospital, Pune.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Surgery
