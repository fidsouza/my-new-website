import React from 'react'
import {  graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"


interface QueryPost{
   data:{ markdownRemark:{
        id:string,
        frontmatter:{
            title:string
        }
        html:string
    }
  }
}

const BlogPost = (query:QueryPost) => {

    const post = query.data.markdownRemark

    return (
        <Layout>
          <SEO title={post.frontmatter.title}/>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html:post.html}}></div>
        </Layout>
    )
}


export const QueryPost =  graphql`query QueryPost($slug:String!) {
    markdownRemark(fields: {slug: {eq: $slug }}) {
        frontmatter {
          title
        }
        html
      }
  }
`

export default BlogPost