import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"
import News from "../components/News"

const IndexPage = () => (
  <Layout>
    <SEO title="Lab webpage" />
    <Header></Header>
    <Skills></Skills>
  </Layout>
)

export default IndexPage
// <Work></Work>
//<About></About>
//<Skills></Skills>
//<Promotion></Promotion>
//<Footer></Footer>