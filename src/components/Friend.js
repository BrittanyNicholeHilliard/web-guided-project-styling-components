import React from 'react'
import styled from 'styled-components';

const StyledFriend = styled.div`
width: 60%; 
display: flex;
justify-content: space-between;
padding: 8px;

background-color: ${pr => pr.theme.primaryColor};
color: ${pr => pr.theme.white};

@media ${ pr => pr.theme.breakpointMobile};
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
