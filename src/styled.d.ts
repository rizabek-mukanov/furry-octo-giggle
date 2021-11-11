import 'styled-components';

declare module 'styled-components' {
  export interface Theme {
    borderRadius: string;

    colors: {
      [key: string]: string;
    };
    fontSize: {
      [key: string]: string;
    };
  }
}
