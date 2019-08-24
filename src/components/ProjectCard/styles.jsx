import styled from 'styled-components'
import { Chip } from '@material-ui/core'

export const BadgeContainer = styled.div`
  margin-top: 1.6rem;
`

export const Badge = styled(Chip)`
  &&& {
    margin: 0.5rem 0.5rem 0.3rem 0;
  }
`
