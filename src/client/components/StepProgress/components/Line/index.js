import React from 'react'
import styled from 'styled-components'

export default ({ color }) => {
  const Line = styled.div`
    width: 100%;
    height: 5px;
    background-color: ${color};
  `;

  return ((
    <Line />
  ))
}
