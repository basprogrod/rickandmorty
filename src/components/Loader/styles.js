import styled from 'styled-components'

export default styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.backgrounds.colors.white};
  z-index: 9999;
  transition: all 0.3s
`
