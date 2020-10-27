import React from 'react'
import {  graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import RecomendedPost from "../components/RecomendedPosts"
import Comments from "../components/Comments"

import * as S from '../components/Post/styled'


interface QueryPost{
   data:{ markdownRemark:{
        id:string,
        fields:{
          slug:string
        }
        frontmatter:{
            title:string,
            description:string,
            date:string

        }
        html:string,
        timeToRead:string
    }
  }
  pageContext:{
    nextPost:{
      frontmatter:{
          title:string
      }
      fields:{
          slug:string
      }
  }
  previousPost:{
      frontmatter:{
          title:string
      }
      fields:{
          slug:string
      }
  }
}
}

const BlogPost = (query:QueryPost) => {

    const post = query.data.markdownRemark
    const previousAndNext = query

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
           <RecomendedPost nextPost={previousAndNext.pageContext.nextPost} previousPost={previousAndNext.pageContext.previousPost}/>
           <Comments url={post.fields.slug} title={post.frontmatter.title}/>
        </Layout>
    )
}


export const QueryPost =  graphql`query QueryPost($slug:String!) {
    markdownRemark(fields: {slug: {eq: $slug }}) {
        fields {
          slug 
        }
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