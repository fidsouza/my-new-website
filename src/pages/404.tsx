import React from "react"
import {PageProps} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage:React.FC<PageProps>= () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Não encontrado</h1>
    <p>Ops... Não tem nada aqui</p>
  </Layout>
)

export default NotFoundPage
