import { Header } from 'components/Header';
import { Calculator } from 'components/Calculator';
import styled from 'styled-components';

function App() {
  return (
    <PageWrapper>
      <Header />
      <Calculator />
    </PageWrapper>
  );
}

export default App;

const PageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
`;
