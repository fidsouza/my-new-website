import React from 'react'
import {Link} from 'gatsby'

import * as S from './styled'

interface Props { 
    isFirst:boolean,
    isLast:boolean,
    currentPage:number,
    numPages:number,
    prevPage?:string,
    nextPage?:string
}

const Pagination = ({isFirst,isLast,currentPage, numPages,prevPage,nextPage}:Props) => (

    <S.PaginationWrapper>
        {!isFirst &&
            <Link to={prevPage}>Pagina Anterior 
            </Link>
        }
        <p>
            {currentPage} de {numPages} paginas
        </p>      
        {!isLast &&
            <Link to={nextPage}>Proxima Pagina
            </Link>
        }
        
    </S.PaginationWrapper>

)

export default Pagination