import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage:React.FC<PageProps>= () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello</h1>
  </Layout>
)

export default IndexPage
