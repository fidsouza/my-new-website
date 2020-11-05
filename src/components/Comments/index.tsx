import React from 'react'
import ReactDisqusComments from 'react-disqus-comments'

import * as S from './styled'

interface Props {
    url:string,
    title:string
}

const Comments = ({url,title}:Props) => {
    return (
        <S.CommentsWrapper>
            <S.CommentsTitle>Comentários</S.CommentsTitle>
            <ReactDisqusComments
                shortname="filipedacosta-com."
                identifier={url}
                title={title}
                url={url}/>
            </S.CommentsWrapper>
    )
}

export default Comments