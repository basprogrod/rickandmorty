import styled from 'styled-components'

export default styled.div`
  .container {
    width: 100%;
    max-width: 1120px;
    background: ${({ theme }) => (theme.backgrounds.headerBg)};
    margin: 0 auto;
  }
  .headerRow {
    padding: 15px 10px;
    display: flex;
    flex-wrap: wrap;
  }
  .headerCol {
    display: flex;
    align-items: center;
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
  @media (max-width: 992px) {
    .headerRow {
      flex-direction: column;
      align-items: center;
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
