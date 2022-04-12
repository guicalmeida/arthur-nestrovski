import { styled } from '@mui/system'
import { ReactChild } from 'react'

const Container = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  max-width: 1800px;
  margin: auto;

  @media (max-width: 1800px) {
    margin: 24px;
  }
`

export default function StyledContainer({
  children,
}: {
  children: ReactChild[]
}) {
  return <Container>{children}</Container>
}
