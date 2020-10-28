import React from 'react'
import { PageProps } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Sobre from "../components/Sobre"


const AboutPage : React.FC<PageProps> = () => (
    <Layout>
        <SEO title="About"/>
        <Sobre/>

    </Layout>
)

export default AboutPage