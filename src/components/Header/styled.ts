import styled from 'styled-components';
import { IosArrowLeft } from '@styled-icons/fluentui-system-filled/';

export const StyledHeader = styled.div`
  position: relative;
  height: 98px;
  width: 400px;
  margin: auto;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
  & > h3 {
    position: relative;
    top: 50%;
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.fontSize.h3};
    margin: auto;
    line-height: 22px;
  }
`;

export const StyledArrow = styled(IosArrowLeft)`
  position: absolute;
  top: 50%;
  left: 15px;
  height: 16px;
  width: 16px;
  vertical-align: middle;
  color: #828282;
`;
