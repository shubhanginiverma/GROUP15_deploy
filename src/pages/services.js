import { Link } from "gatsby"
import React from "react"
import {
  BandaidFill,
  DoorClosedFill,
  DropletFill,
  EarFill,
  ExclamationDiamondFill,
  GeoAltFill,
  HeartFill,
  PeopleFill,
  PersonBadgeFill,
} from "react-bootstrap-icons"
import Layout from "../components/Layout/Layout"

const Items = [
  {
    icon: <BandaidFill size="30" />,
    title: "Pharmacy",
    color: "#45aa32",
    path: "/pharmacy",
  },
  {
    icon: <DoorClosedFill size="30" />,
    title: "General Health & Surgery",
    color: "#45aa32",
    path: "/surgery",
  },

  {
    icon: <DropletFill size="30" />,
    title: "Pathology",
    color: "#45aa32",
    path: "/pathology",
  },

  {
    icon: <PersonBadgeFill size="30" />,
    title: "Women's Health",
    color: "#45aa32",
    path: "/women",
  },
  {
    icon: <HeartFill size="30" />,
    title: "ICU",
    color: "#45aa32",
    path: "/icu",
  },
  {
    icon: <EarFill size="30" />,
    title: "Organ Donation",
    color: "#45aa32",
    path: "/donation",
  },
]

const Services = () => {
  return (
    <Layout>
      <div className="container justify-content-centre py-5">
        <div className="card shadow">
          <div className="card-body">
            <GeoAltFill size="30" />
            <h2>Find a Doctor Near by</h2>
            <div class="form-group">
              <label for="exampleInputEmail1" class="form-label mt-4">
                Symptoms
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Disease/Pain"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1" class="form-label mt-4">
                Your Location
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Your Location"
              />
            </div>
          </div>{" "}
        </div>
        <div className="row justify-content-center py-5">
          {Items.map((item, i) => {
            return (
              <div className="col-lg-4">
                <Link to={item.path}>
                  <div className="card shadow mb-4">
                    <div className="card-body text-center">
                      <div className="p-4">{item.icon}</div>
                      <h4> {item.title}</h4>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Services
