import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import Avatar from '../Avatar'
import * as S from './styled'

const Profile =() =>{
  const {
    site:{
      siteMetadata:{ title, position, description}
    },
    // O useStaticquery irá retornar os dados do site
    // e rece a query
  } = useStaticQuery(graphql`
        query MySiteMetadata {
        site {
        siteMetadata {
          title
          position
          description                   
          }
        }
      }
    `)
    // renderizando
    return (
    <S.ProfileWrapper>
      <S.ProfileLink>
        <Avatar/>
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
        
      </S.ProfileLink>  
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>  
    )
  }


export default Profile

