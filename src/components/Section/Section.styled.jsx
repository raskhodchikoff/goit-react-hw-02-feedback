import styled from 'styled-components';

export const SectionTitle = styled.h2`
  margin-bottom: ${p => p.theme.space[3]}px;
  margin-left: auto;
  margin-right: auto;

  color: ${p => p.theme.colors.blackFont};
  font-size: ${p => p.theme.fontSizes[4]}px;
`;
