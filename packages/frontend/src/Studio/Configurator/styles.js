import styled from 'styled-components';
import { Flex } from '../../styles';

export const Wrapper = styled.div`
  width: 250px;
`;

export const Header = styled(Flex)`
  padding: 10px;
  color: ${props => props.theme.foreground};
  background: #4d4d4d;
  font-size: 1.5em;
  align-items: center;
`;

export const HeaderIcon = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
`;

export const HeaderTitle = styled.div`
  flex: 1;
  text-align: center;
`;

export const Section = styled.div`
  color: ${props => props.theme.foreground};
  font-size: 1.2em;
`;

export const SectionHeader = styled(Flex)`
  padding: 10px;
  background: #363636;
  align-items: center;
`;

export const SectionHeaderIcon = styled.div`
  width: 32px;
  height: 32px;
`;

export const SectionHeaderTitle = styled.div``;

export const SectionBody = styled.div`
  padding: 10px;
  background: #222222;
`;

export const File = styled.div`
  font-family: monospace;
  font-size: 1.4em;
  cursor: pointer;
`;

export const Widget = styled(Flex)`
  border-radius: 10px;
  background: black;
  margin-bottom: ${props => (props.isLast ? '0' : '10px')};
`;

export const WidgetTitle = styled.div`
  padding: 10px;
  flex: 2;
`;

export const WidgetValue = styled.div`
  flex: 1;
  background: ${props => props.fill};
  width: 100px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;
