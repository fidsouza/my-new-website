import React from 'react'
import {  graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as S from '../components/Post/styled'


interface QueryPost{
   data:{ markdownRemark:{
        id:string,
        frontmatter:{
            title:string,
            description:string,
            date:string

        }
        html:string,
        timeToRead:string

    }
  }
}

const BlogPost = (query:QueryPost) => {

    const post = query.data.markdownRemark

    return (
        <Layout>
          <SEO title={post.frontmatter.title}/>
          <S.PostHeader>
            <S.PostDate>
              {post.frontmatter.date} - {post.timeToRead} min de leitura
            </S.PostDate>
            <S.PostTitle>
            {post.frontmatter.title}
          </S.PostTitle>
          <S.PostDescription>
            {post.frontmatter.description}
          </S.PostDescription>
          </S.PostHeader>

           <S.MainContent>
             <div dangerouslySetInnerHTML={{__html:post.html}}></div>
           </S.MainContent>
        </Layout>
    )
}


export const QueryPost =  graphql`query QueryPost($slug:String!) {
    markdownRemark(fields: {slug: {eq: $slug }}) {
        frontmatter {
          title
          description
          date(locale: "pt-br",formatString:"DD [de] MMMM [de] YYYY")
        }
        html
        timeToRead 
      }
  }
`

export default BlogPost