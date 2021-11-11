import styled from 'styled-components';

export const FieldWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 42px;

  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};

  & .field {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 4px;
    outline: none;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.h3};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > span {
    position: absolute;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.darkGray};
    transform: translate(-50%, -50%);
    top: 50%;
    &.left {
      left: 16px;
    }
    &.right {
      right: 16px;
    }
  }
`;

export const FieldTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.h4};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4px;
`;

export const ResultWrapper = styled.div`
  margin-bottom: 24px;
  width: 100%;
  height: 146px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};

  filter: drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.03));
  border-radius: 4px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const ResultTitle = styled.div`
  width: 100%;
  height: calc(100% - 48px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & > h4 {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.h4};
  }
  & > h2 {
    font-size: ${({ theme }) => theme.fontSize.h2};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ResultTextWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0 0 4px 4px;
  height: 48px;
  position: absolute;
  bottom: 0;
  width: calc(100% - 48px);
  display: flex;
  flex: 1 0 auto;
  & > h5 {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.h5};
  }
`;
