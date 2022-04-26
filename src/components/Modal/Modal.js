import React from "react"

const Modal = () => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-primary px-2 py-0 m-0"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Emergency
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Emergency Help-Line No
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Sl.no</th>
                    <th scope="col">State</th>
                    <th scope="col">Location</th>
                    <th scope="col">Phone no</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td> Haryana</td>
                    <td>Gurugram</td>
                    <td>105010</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Madhya Pradesh</td>
                    <td>Ujjain</td>
                    <td>0152-665489</td>
                  </tr>

                  <tr>
                    <th scope="row">3</th>
                    <td>Punjab</td>
                    <td>Ludhiana</td>
                    <td>0161-522222</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Bihar</td>
                    <td>Arrah</td>
                    <td>0161-648521</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Uttar Pradesh</td>
                    <td>Ludhiana</td>
                    <td>0161-522222</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
