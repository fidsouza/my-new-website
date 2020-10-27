import React from 'react'
import { PageProps } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Search from "../components/Search"


const SearchPage : React.FC<PageProps> = () => (
    <Layout>
        <SEO title="About"/>
        <Search/>

    </Layout>
)

export default SearchPage