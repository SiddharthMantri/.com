import styled from "styled-components"

export const Elevator = styled.div`
  width: 80%;
  margin: 80px auto;
  display: flex;
  @media screen and (max-width: 720px) {
    flex-direction: column;
    margin: 200px auto 0px auto;
  }
`
export const ElevatorContent = styled.div`
  font-family: "Hind", sans-serif;
  font-weight: 500;
  width: 50%;
  padding-right: 32px;
  align-items: flex-start;
  text-align: justify;
  @media screen and (max-width: 720px) {
    width: 100%;
    align-items: flex-end;
    padding: 0px;
  }
`
