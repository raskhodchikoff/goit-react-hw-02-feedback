import styled from 'styled-components';

export const Message = styled.p`
  margin-left: auto;
  margin-right: auto;

  color: ${p => p.theme.colors.greyBorder};
  font-size: ${p => p.theme.fontSizes[2]}px;
`;
