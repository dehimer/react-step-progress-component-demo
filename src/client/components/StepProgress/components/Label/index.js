import React from 'react'
import styled from 'styled-components'

export default ({ theme: { color }, label }) => {
  const Label = styled.div`
    position: absolute;
    color: ${color};
  `;

  return ((
    <Label>
      { label }
    </Label>
  ))
}
