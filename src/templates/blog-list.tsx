import React, { Props } from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"
import Pagination from "../components/Pagination"


interface QueryPostList {
  data:{  allMarkdownRemark: {
       edges:[{
         node :{
           id:string,
           frontmatter:{
                  title: string,
                  date: string,
                  description: string,
                  category: string,
                  background: string
                  image:{
                    absolutePath:string
                  }
           }
           timeToRead:string,
           fields: {
            slug:string
          }
         }
       }]
    }
  }
  pageContext:{
    currentPage:number,
    numPages:number
  }
}

const BlogList = (query:QueryPostList) => {
   
    const postlist = query.data.allMarkdownRemark.edges
    const {currentPage , numPages} = query.pageContext
    const isFirst = currentPage === 1 
    const isLast  = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage -1}`
    const nextPage = `/page/${currentPage + 1}`
    
    return (
        <Layout>
                  <SEO title="Home" description="Aprenda programação sem atalhos apenas com HardWork"/>
                 {postlist.map((item)=> (
                  <PostItem
                      slug={item.node.fields.slug}
                      background={item.node.frontmatter.background}
                      category={item.node.frontmatter.category}
                      date = {item.node.frontmatter.date}
                      timeToRead = {item.node.timeToRead}
                      title = {item.node.frontmatter.title}
                      description = {item.node.frontmatter.description}
                  />
                 ))} 
           <Pagination 
           isFirst={isFirst} 
           isLast={isLast} 
           currentPage={currentPage} 
           numPages={numPages} 
           nextPage={nextPage} 
           prevPage={prevPage} />

          </Layout>
    )
}


export const QueryPostList = graphql`
    query PostList($skip:Int!,$limit:Int! ) {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}
                                  limit:$limit
                                   skip:$skip) {
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "DD [de] MMMM [de] YYYY ", locale: "pt-BR")
                description
                category
                background
                image {
                  absolutePath
                }    
              }
              timeToRead
              fields {
                slug
              }
            }
          }
        }
      }`


export default BlogList