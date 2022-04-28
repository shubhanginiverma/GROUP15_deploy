import React from "react"
import Layout from "../components/Layout/Layout"
const Corona = () => {
    return (
      <Layout>
          <div class="mapcor">
            <iframe src="https://ourworldindata.org/grapher/total-cases-covid-19?tab=map" width="100%" height="600px"></iframe>
          </div>
      </Layout>
    )
}
export default Corona
