import styled from 'styled-components'
import media from 'styled-media-query'

export const SectionWrapper = styled.section`

  margin: auto;
  max-width: 70rem;
  padding: 2rem 5rem;

  ${media.lessThan("large")`
  
     padding:1.7rem;
  
  `}


`

export const Text = styled.p`

    margin: 0 auto 1.6rem;
    font-size:1.5rem;
    color:var(--texts);
    line-height:1.95rem;

    ${media.lessThan("large")`
    
    
     font-size:1.2rem;
    
    `}

`

export const Title = styled.h1`
    font-size:2.5rem;
    color:var(--texts);
    line-height:6.5rem;
    ${media.lessThan("large")`
    
      font-size:1.5rem;
      line-height:4.5rem;

    
    `}

`