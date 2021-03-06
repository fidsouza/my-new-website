import React from 'react'
import {useStaticQuery , graphql} from 'gatsby'
import getThemeColor from "../../utils/getThemeColor"


import * as S from './styled'

import Avatar from '../Avatar'

interface StaticQueryProps {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
        position: string
      }
    }
  }

const Profile = () => {
    const data:StaticQueryProps = useStaticQuery(graphql `
                                                            query MySiteMapData {
                                                                site {
                                                                siteMetadata{
                                                                    title,
                                                                    position,
                                                                    description,
                                                                    author
                                                                }
                                                            }
                                                            }    
                                                        `)
    return (<S.ProfileWrapper>
                <S.ProfileLink to="/" cover direction="up" bg={getThemeColor()} duration={0.5}>
                <Avatar/>

                  <S.ProfileAuthor>

                    {data.site.siteMetadata.title}
                    <S.ProfilePosition>
                      {data.site.siteMetadata.position}
                    </S.ProfilePosition>
                  </S.ProfileAuthor>
                  <S.ProfileDescription>{data.site.siteMetadata.description}</S.ProfileDescription>
                </S.ProfileLink>

            </S.ProfileWrapper>
           )
}  




export default Profile



