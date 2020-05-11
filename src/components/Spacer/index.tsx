import styled from "styled-components";

const Spacer = styled.div<{height?: number}>`
    height: ${props => props.height ? props.height: 64}px;
`
export default Spacer;