import React from 'react'
import styled from 'styled-components'

export default ({ color, label }) => {
  const Label = styled.div`
    position: absolute;
    top: -25px;
    color: ${color};
  `;

  return ((
    <Label>
      { label }
    </Label>
  ))
}
