import styled from 'styled-components'
// Link padrão do gatby o para otimizar e fazer o pre-load
import {Link} from 'gatsby'

export const MenuLinksWrapper= styled.nav``

export const MenuLinkList = styled.ul`
  font-size:1.2rem;
  font-weight:300;
`

export const MenuLinksItem = styled.li`
  padding:0.5rem 0;

.active{
  color:#1fa1f2
}
`
export const MenuLinksLink= styled(Link)`
  color:#8899a6;
  text-decoration:none;
  transition:color 0.5s;
  &:hover{
   color:#1fa1f2
  }
`
