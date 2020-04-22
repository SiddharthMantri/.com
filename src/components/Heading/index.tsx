import React from "react"
import styled from "styled-components"
const HeadingOne = styled.h1`
  font-family: "Merriweather", serif;
  font-weight: 700;
  @media screen and (max-width: 720px) {
    font-size: 1.8rem;
    text-align: center;
  }
`
const HeadingTwo = styled.h2`
  font-family: "Merriweather", serif;
  font-weight: 700;
  @media screen and (max-width: 720px) {
    font-size: 1.5rem;
    text-align: center;
  }
`
const HeadingThree = styled.h3`
  font-family: "Merriweather", serif;
  font-weight: 700;
  @media screen and (max-width: 720px) {
    font-size: 1.2rem;
    text-align: center;
  }
`
const HeadingFour = styled.h4`
  font-family: "Merriweather", serif;
  font-weight: 700;
  @media screen and (max-width: 720px) {
    font-size: 1rem;
    text-align: center;
  }
`
const HeadingFive = styled.h5`
  font-family: "Merriweather", serif;
  font-weight: 700;
  @media screen and (max-width: 720px) {
    font-size: 0.83rem;
    text-align: center;
  }
`

const HeadingSix = styled.h6`
  font-family: "Merriweather", serif;
  font-weight: 700;
  @media screen and (max-width: 720px) {
    font-size: 0.67rem;
    text-align: center;
  }
`

const Heading = ({
  variant,
  children,
}: {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  children?: React.ReactNode
}) => {
  switch (variant) {
    case "h1":
      return <HeadingOne>{children}</HeadingOne>
    case "h2":
      return <HeadingTwo>{children}</HeadingTwo>
    case "h3":
      return <HeadingThree>{children}</HeadingThree>
    case "h4":
      return <HeadingFour>{children}</HeadingFour>
    case "h5":
      return <HeadingFive>{children}</HeadingFive>
    case "h6":
      return <HeadingSix>{children}</HeadingSix>
  }
}

export default Heading
