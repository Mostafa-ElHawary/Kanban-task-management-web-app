import styled from "styled-components"; 

export const Container  = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background-color: white;
  z-index: 50;

  @media (prefers-color-scheme: dark) {
    background-color: #2b2c37;
  }
  `

export const HeadUp  = styled.div`

display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.text}; /* assuming your theme has a 'text' color for dark mode */
  background-color: ${({ theme }) => theme.background}; /* assuming your theme has a 'background' color for dark mode */
  @media (prefers-color-scheme: dark) {
    color:white
  }

`
// Left Side