import styled from 'styled-components'
import media from 'styled-media-query'

export const SocialLinksWrapper = styled.nav`
    margin: 2rem auto;
    width:100%;
    
    ${media.lessThan("large")`
    display:flex;
    align-items:flex-start;
    margin:0.3rem 0 0 0;
`}
    
    `

export const SocialLinkList = styled.ul`
align-items:center;
display:flex;
justify-content:center;
list-style:none;`

export const SocialLinksItem = styled.li`
  padding:1rem;

  ${media.lessThan("large")`
    padding:0.2rem;
`}
`

export const SocialLinksLink = styled.a`
    color:var(--texts);
    text-decoration:none;
    transition:color 0.5s;
    &:hover {
        color:#f1fa8c;
    }

    ${media.lessThan("large")`
    color:var(--black);
    `}

`

export const IconWrapper = styled.div`
 fill:#f8f8f2;
 width:1.3rem;
 height:1.3rem;

 ${media.lessThan("large")`
   width:1.5rem;
   height:1.3rem;
 
 `}



`

