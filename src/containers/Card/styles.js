import styled from 'styled-components'

export default styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .imageCol {
    display: flex;
    flex-wrap: wrap;
  }
  .imgWrap {
    width: 300px;
    height: 300px;
    margin: 0 auto 25px;
  }
  .cardTable {
    display: flex;
    margin: 0 auto;
    width: 300px;
  }
  h1, h2 {
    text-align: center;
  }
  h2 {
    margin-top: 25px;
  }
  .cardCol:first-child {
    text-transform: capitalize;
  }
  .link {
    display: inline-block;
    vertical-align: middle;
    color: ${({ theme }) => theme.cadrLink.text.default};
    padding: 10px 15px;
    border: 1px dashed ${({ theme }) => theme.cadrLink.borgerColor};
    background-color: ${({ theme }) => theme.cadrLink.default};
    margin: 4px;
    text-align: center;
    &:hover {
      background-color: ${({ theme }) => theme.cadrLink.hover};
      color: ${({ theme }) => theme.cadrLink.text.hover};
    }
    &.inLocation {
      width: 148px;
    }
  }
  .linkImg {
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }

  .cardRow {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    .imageCol.episode {
      order: 1;
      margin-top: 25px;
    }
  }
  .infoTable {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
    padding: 5px;
    background: ${({ theme }) => theme.infoTable.bg};
    border: 1px dashed  ${({ theme }) => theme.infoTable.borderColor};

  }

  @media (max-width: 992px) {
    padding: 0 4px;

    .infoTable {
      width: 100%;
      
      align-items: center;
    }
    .cardTable {
      width: 300px;
    }
    .cardCol:first-child {
      margin-right: 10px;
    }

    .imageCol.episode {
      justify-content: center;
    }
    
  }
`
