import styled from 'styled-components';

export const CalculatorWrapper = styled.div`
  width: 400px;
  height: auto;
  padding: 46px 47px 46px 64px;
  border: 1px solid #fff;
  background-color: #fefefe;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 0px 20px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  margin: auto;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 10px 10px 0px 0px;
  }
`;

export const HeaderText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.h1};
  color: ${({ theme }) => theme.colors.text};
  line-height: 34px;
  width: 124px;
  margin-bottom: 24px;
`;

export const SwitchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  /* Ant Switch styling edits */
  .ant-switch-checked > .ant-switch-handle::before {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .ant-switch {
    background-color: transparent !important;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
  }
  .ant-switch-handle {
    top: 1px;
    &::before {
      background-color: ${({ theme }) => theme.colors.gray};
    }
  }
`;

export const SwitchText = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.h4};
  color: ${({ theme }) => theme.colors.text};
  margin-left: 8px;
`;
