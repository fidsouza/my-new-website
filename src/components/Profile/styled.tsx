import styled from 'styled-components'
import media from 'styled-media-query'
import { Link, GatsbyLinkProps } from 'gatsby'
import { Props } from 'react'


export const ProfileWrapper = styled.section`

   color:#91e117;
   display:flex;
   flex-direction:column;

`

export const ProfileLink = styled(Link)`

color : #91e117;
text-decoration:none;
transition:color 0.5s;
cursor:pointer;

${media.lessThan("large")`
    display:flex;
    text-align:left;

`}

&:hover{
    color:#1ea9e1;
    opacity:0.5;
}
`

export const ProfileAuthor = styled.h1`

    font-size:1.6rem;
    margin:0.5rem auto 1.5rem;

    ${media.lessThan("large")`
    font-size:1.2rem;
    margin: 0 0 0 5px;
    color:var(--black);
`}

`

export const ProfilePosition = styled.small`

    display:block;
    font-size:1.2rem;
    font-weight:300;

    ${media.lessThan("large")`
    font-size:0.8rem;
    margin-top:0.2rem;
`}

`

export const ProfileDescription = styled.p`

    font-size:1rem;
    font-weight:300;
    line-height:1.4;

    ${media.lessThan("large")`
    display:none;
`}

`