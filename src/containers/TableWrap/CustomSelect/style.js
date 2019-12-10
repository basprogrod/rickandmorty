import styled from 'styled-components'

export default styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 100%;
    .ant-select {
      width: 100%;
    }
  }
`
