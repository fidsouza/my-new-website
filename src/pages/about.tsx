import React from 'react'
import { PageProps } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"


const AboutPage : React.FC<PageProps> = () => (
    <Layout>
        <SEO title="About"/>
        <h1>Teste</h1>

    </Layout>
)

export default AboutPage