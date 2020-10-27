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
          <S.RecommendedLink to={previousPost.fields.slug} className="previous">{previousPost.frontmatter.title}</S.RecommendedLink>
      )}

      {nextPost && (
          <S.RecommendedLink to={nextPost.fields.slug} className="next">{nextPost.frontmatter.title}</S.RecommendedLink>
      )}
  </S.RecommendedWrapper>
)

export default RecommendedPosts