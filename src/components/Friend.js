import React from "react";
import styled from "styled-components";

const StyledFriend = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 2px solid white;

  // Grab some data from the theme!!
  background-color: ${pr => pr.theme.primaryColor};
  color: ${pr => pr.theme.white};

  // Use a media query!!
  @media ${pr => pr.theme.breakpointMobile} {
    width: 100%;
  }
`

export default function Friend({ info, action }) {
  return (
    <StyledFriend className='friend'>
      {info.name}
      <button onClick={() => action(info.id)}>
        See details
      </button>
    </StyledFriend>
  )
}
