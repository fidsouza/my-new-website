import styled from './node_modules/styled-components'
import media from './node_modules/styled-media-query'


export const LayoutWrapper = styled.section`
display:flex;

${media.lessThan("large")`
    flex-direction :column;
`}
`

export const LayoutMain = styled.main`
background: var(--background);
padding:0 4.75rem 0 24rem;
width:100%;
min-height:100vh;


${media.lessThan("large")`
    padding: 4.125rem 0 3rem 0;
  `}
`

