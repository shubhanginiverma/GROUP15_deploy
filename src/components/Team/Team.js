import React from "react"
import { Link } from "gatsby"
import { Github, Instagram, Linkedin } from "react-bootstrap-icons"
import Image from "../Images/Images"

const Items = [
  {
    name: "Akarshika",
    github: "https://github.com/akarshika23",
    instagram: "https://www.instagram.com",
    linkedin: "https://www.linkedin.com/in/akarshika-singh-17b9aa192",
  },
  {
    name: "Anjali Mishra",
    github: "https://github.com/anjalimishra1203",
    instagram: "https://www.instagram.com",
    linkedin: "https://www.linkedin.com/in/anjali-mishra-521778232/",
  },
  {
    name: "Krity Kumari",
    github: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Shubhangini",
    github: "https://github.com/shubhanginiverma",
    instagram: "https://www.instagram.com",
    linkedin: "https://www.linkedin.com/in/shubhangini-verma-5573301b1/",
  },
  {
    name: "Vaishnavi",
    github: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    linkedin: "https://www.linkedin.com",
  },
]

const Team = () => {
  return (
    <div className="container text-center py-5">
      <h2 className="pb-2 border-bottom text-center">Team Members</h2>
      <div className="row justify-content-center py-5">
        {Items.map((item, i) => {
          return (
            <div key={i} className="col-lg-4 col-md-6 col-sm-12">
              <div className="card card-body shadow mb-4">
                <Image
                  className="d-block mx-lg-auto img-fluid"
                  style={{
                    margin: "0 auto",
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename={`${item.name}.jpeg`}
                  alt="1"
                />
                <h3 className="m-2">{item.name}</h3>

                <ul className="list-unstyled justify-content-center d-flex mb-0">
                  <Link className="m-3" to={item.github}>
                    <Github />
                  </Link>
                  <Link className="m-3" to={item.instagram}>
                    <Instagram />
                  </Link>
                  <Link className="m-3" to={item.linkedin}>
                    <Linkedin />
                  </Link>
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Team
