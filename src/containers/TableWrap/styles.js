import styled from 'styled-components'
import { TEXT } from '@/constants'

export default styled.div`
  .searchInput {
    position: relative;
    input {
      border: 1px solid ${({ theme }) => (theme.borders.colors.error)};
      background: ${({ theme }) => (theme.borders.colors.error)};
      color: ${({ theme }) => (theme.textColors.white)};
    }
    &::after {
      position: absolute;
      content: '${TEXT.NOT_FOUND}';
      display: block;
      top: -45px;
      left: 61px;
      border: 1px solid ${({ theme }) => (theme.borders.colors.error)};
      color: ${({ theme }) => (theme.backgrounds.error)};
      border-radius: 5px;
      padding: 10px 5px;
    }
  }
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  .searchBlock {
    display: flex;
    flex-wrap: wrap;
    & > * {
      margin-right: 5px;
    }
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
    .onError {
      margin-top: 40px;
    }
    .searchBlock {
      justify-content: center;
      flex-direction: column;
      align-items: center;
      & > * {
        width: 100% !important;
        margin-bottom: 5px;
      }
    }
    .searchInput {
      &::after {
        position: absolute;
        content: 'not found!';
        display: block;
        top: -82px;
        left: 61px;
        border: 1px solid red;
        color: red;
        border-radius: 5px;
        padding: 10px 5px;
      }
    }
    .tableWrap {
      .ant-table-tbody > tr > td {
        padding: 0px 4px !important;
      }
      .ant-table {
        font-size: 12px;
      }
    }
  }
`
