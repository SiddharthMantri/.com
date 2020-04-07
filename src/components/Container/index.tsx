import styled from "styled-components"

const Container = styled.div`
  width: 80%;
  margin: auto;
  padding: 16px;
  display: flex;
  max-width:1170px;
  @media screen and (max-width: 720px){
    width: 90%;
    padding: 24px;
    display: block
  }
`
export default Container
