import React from "react"
import { Link } from "gatsby"
import Modal from "../Modal/Modal"
const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <h2>MEDISURE</h2>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto">
            <li className="btn text-danger fw-bold">
              <Link className="text-white fw-bold" to="/">
                <h5>Home</h5>
              </Link>
            </li>
            <li className="btn text-danger fw-bold">
              <Link className="text-white  fw-bold" to="/services">
                <h5>Services</h5>
              </Link>
            </li>
            <li className="btn text-danger fw-bold">
              <Link className="text-white fw-bold" to="/blog">
                <h5>News and Research</h5>
              </Link>
            </li>
            <li className="btn text-danger fw-bold">
              <Link className="text-white fw-bold" to="/contact">
                <h5>Contact</h5>
              </Link>
            </li>
            <li className="btn text-danger fw-bold">
              <Link className="text-white fw-bold" to="/about">
                <h5>About</h5>
              </Link>
            </li>
            <li className="btn text-danger fw-bold">
              <Modal />
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-sm-2"
              type="text"
              placeholder="Search"
            ></input>
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">
              <h5>Login</h5>
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}
export default Header
