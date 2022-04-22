import React from 'react'
import styled, {keyframes } from 'styled-components';

const kf = keyframes`
50% {
  transform: scale(0.8);
}
100% {
  opacity: 1;
  transform: scale(1);
}
`

const StyledFriend = styled.div`
width: 60%; 
display: flex;
justify-content: space-between;
padding: 8px;
border-bottom: 2px solid white;

background-color: ${props => props.theme.primaryColor};
color: ${props => props.theme.white};

@media ${ props => props.theme.breakpointMobile} {
  color: blue;
}

transition: all 0.2s ease-in-out;
&:hover {
  background-color: ${props => props.theme.secondaryColor};
  transition: all 0.2s ease-in-out;
}

// &::before {
//   content: ${props => props.besty ? "YAY" : "NAY"}";
// }

button {
  background-color: ${props => props.theme.tertiaryColor};
  &:hover {
    transform: scale(1.1);
  }
}

//start of animation
transform: scale(2); 
opacity: 0;
animation: ${kf} 0.3s ease-in-out forwards; 
`


export default function Friend({ info, action, besty }) {
  return (
    <StyledFriend besty={besty}>
      {info.name}
      <button onClick={() => action(info.id)}>
        See details
      </button>
    </StyledFriend>
  )
}
