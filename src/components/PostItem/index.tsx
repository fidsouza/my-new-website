import React from 'react'

import getThemeColor from "../../utils/getThemeColor"


import * as S from './styled'

interface Props { 
      slug:string,
      category:string,
      date:string,
      timeToRead?:string,
      description:string,
      title:string
      background?:string
}


const PostItem = ({slug,category,date,timeToRead,title,description,background}:Props) => (

    <S.PostItemLink to={slug} cover direction="right" bg={getThemeColor()}duration={0.5} >
        <S.PostItemWrapper>
            <S.PostItemTag background={background}>{category}</S.PostItemTag>
            <S.PostItemInfo>
                <S.PostItemDate>
                    {date} - {timeToRead} min para leitura
                </S.PostItemDate>
                <S.PostItemTitle>{title}</S.PostItemTitle>
                <S.PostItemDescription>{description}</S.PostItemDescription>
            </S.PostItemInfo>
        </S.PostItemWrapper>
    </S.PostItemLink>

)

export default PostItem