import React from 'react';
import { StyledButton } from './styled';
import { ButtonProps } from 'index.d';

// Not sure what this button should do
// In google document it says:
// When the users change the value of any of the inputs, the monthly deposit value is calculated and displayed to them.

function Button({ children }: ButtonProps) {
  return <StyledButton data-testid="finish-button"> {children}</StyledButton>;
}

export default Button;
