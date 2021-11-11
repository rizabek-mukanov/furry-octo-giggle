import React from 'react';
import Button from './Button';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';

it('renders correct child', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Button>Finish</Button>
    </ThemeProvider>
  );
  expect(getByTestId('finish-button')).toHaveTextContent('Finish');
});

it('matches snapshot', () => {
  const { asFragment } = render(
    <ThemeProvider theme={theme}>
      <Button>Finish</Button>
    </ThemeProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});
