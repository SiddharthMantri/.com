import styled from "styled-components"

const Container = styled.div`
  width: 80%;
  margin: auto;
  padding: 16px;
  display: flex;
  @media screen and (max-width: 720px){
    width: 90%;
    padding: 24px;
    display: block
  }
  @media screen and (min-width: 1920px){
    width: 1920px;
  }
`
export default Container
