import React from 'react'

import * as S from '../RecomendedPosts/styled'

interface INextPrevious{
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

const RecommendedPosts = ({nextPost,previousPost}:INextPrevious) => (
  <S.RecommendedWrapper>
      {previousPost && (
          <S.RecommendedLink to={previousPost.fields.slug} cover direction="left" bg="#fff" duration={0.5} className="previous">{previousPost.frontmatter.title}</S.RecommendedLink>
      )}

      {nextPost && (
          <S.RecommendedLink to={nextPost.fields.slug} cover direction="right" bg="#fff" duration={0.5} className="next">{nextPost.frontmatter.title}</S.RecommendedLink>
      )}
  </S.RecommendedWrapper>
)

export default RecommendedPosts