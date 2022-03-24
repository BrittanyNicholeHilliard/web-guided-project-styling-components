import React from "react";
import styled from "styled-components";

const StyledFriend = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 2px solid white;
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
