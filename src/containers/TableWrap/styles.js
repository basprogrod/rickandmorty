import styled from 'styled-components'

export default styled.div`
  
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  .searchBlock {
    display: flex;
    flex-wrap: wrap;
  }
  .pagination {
    margin-top: 25px;
  }
  .ant-table {
    color: ${({ theme }) => (theme.textColors.gray)};
  }
  .ant-table-column-title {
    color: ${({ theme }) => (theme.textColors.dark)};
  }
  .headerRow {
    height: 80px;
    padding: 15px 10px;
    
  }
  .headerCol {
    height: 100%;
    display: flex;
    align-items: center;
    &.first {
      justify-content: center;
    }
  }
  .logo {
    height: 100%;
    overflow: hidden;
    border-radius: 50%;
  }
  .logoImg {
    height: 100%;
    object-fit: cover;
  }
  .tableHeader {
    display: flex;
    justify-content: space-between;
    margin: 0;
    margin-bottom: 15px;
    &::before, &::after {
      display: none;
    }
  }
  &.tableContainer {
    margin-top: 25px;
    padding: 25px;
  }
  .tableWrap {
    background-color: ${({ theme }) => theme.backgrounds.tableBg};
    border-radius: 10px;
    padding: 10px;
    .table {
      overflow: auto;
      border: none;
      .ant-table-small {
        border: none;
      }
    }
  }
  .cardCol {
    height: 40px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    .searchBlock {
      justify-content: center;
    }
  }
`
