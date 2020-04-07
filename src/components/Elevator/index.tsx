import styled from "styled-components"

export const Elevator = styled.div`
  margin: 0px auto;
  display: flex;
  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`
export const ElevatorContent = styled.div`
  width: 50%;
  padding-right: 32px;
  align-items: flex-start;
  text-align: justify;
  @media screen and (max-width: 720px) {
    width: 100%;
    padding: 0px;
  }
`
export const ElevatorContentPara = styled.p`
  font-family: "Hind", sans-serif;
  font-weight: 500;
  @media screen and (max-width: 720px) {
    font-size: 0.9rem;
  }
`
