import styled from 'styled-components'
import media from "styled-media-query"


export const PaginationWrapper = styled.section`

    align-items:center;
    border-top: 1px solid #e10b68;
    color:--black;
    display:flex;
    padding:1.5rem 3rem;
    justify-content: space-between;
    color:var(--white);

    ${media.lessThan("large")`
    font-size: .8rem;
    padding: 1rem;
  `}

    a { 
        color:#f1fa8c;
        text-decoration:none;
        transition:color 0.5s;

        &:hover{
            color:#1ea9e1;

        }
    }



`