import styled from 'styled-components'
import media from 'styled-media-query'

export const SidebarWrapper = styled.aside`

    align-items:center;
    display:flex;
    flex-direction:column;
    border-right:1px solid var(--borders);
    height:100vh;
    position:fixed;
    padding:1.2rem;
    text-align:center;
    width:20rem;

    ${media.lessThan("large")`
    
        align-items:flex-start;
        height:auto;
        padding:1rem 2rem;
        width:100%;
        z-index:9999;
        background-color:var(--active);
    
    `}

`