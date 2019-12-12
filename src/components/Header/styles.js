import styled from 'styled-components'

export default styled.div`
  
  .headerRow {
    padding: 15px 10px;
    display: flex;
    flex-wrap: wrap;
  }
  .headerCol {
    display: flex;
    align-items: center;
    min-width: 100px;
    &.first {
      justify-content: center;
    }
  }
  .logo {
    height: 80px;
    overflow: hidden;
    border-radius: 50%;
  }
  .logoImg {
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    .headerRow {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .headerCol {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 5px;
      a {
        width: 100%;
      }
      &:first-child {
        margin-bottom: 15px;
      }
    }
  }
`
