import React from 'react'

import PostItem from '../PostItem'

interface Props { 
    hit:{
        fields:{
            slug:string
        }
        category:string,
        date:string,
        description:string,
        title:string,
        background:string
    }
}

const Hit = ({hit}:Props) => (

 <PostItem slug={hit.fields.slug}
           title={hit.title}
           date={hit.date}
           category={hit.category}
           description={hit.description}
           background={`${hit.background}`}/>
)

export default Hit