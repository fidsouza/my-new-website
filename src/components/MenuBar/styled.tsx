import styled from 'styled-components'
import media from 'styled-media-query'

import {Link} from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";


export const MenuBarWrapper = styled.aside`
  align-items:center;
  display:flex;
  flex-direction:column;
  height:100vh;
  justify-content:space-between;
  padding :0.8rem 0 ; 
  position:fixed;
  width:1.75rem;
  background: rgb(255,229,54);
  background: linear-gradient(180deg, rgba(255,229,54,1) 20%, rgba(255,177,31,1) 48%, rgba(255,142,15,1) 100%);
  


  ${media.lessThan("large")`
    bottom: 0;
    flex-direction: row;
    height: auto;
    padding: 0;
    width: 100%;
    z-index:9999;

  `}

`

export const MenuBarGroup = styled.div`

    display:flex;
    flex-direction:column;

    ${media.lessThan("large")`
    flex-direction: row;
  `}

`

export const MenuBarLink = styled(AniLink)`

    display:block;
    text-decoration:none;

`

export const MenuBarItem = styled.span`

    color:var(--black);
    cursor:pointer;
    display:block;
    height:1.25rem;
    padding:1.0rem 0 2.0rem;
    position:relative;
    width:1.25rem;
    font-weight:400px;

    	
  &.display {
    ${media.lessThan("large")`
      display: none;
    `}
  }
  ${media.greaterThan("large")`
    &:hover {
      color: var(--highlight);

    }
  `}
  ${media.lessThan("large")`
    height: 1.75rem;
    padding: .9rem;
    position: relative;
    width: 1.75rem;
    justify-content: flex-start;
  `}


`