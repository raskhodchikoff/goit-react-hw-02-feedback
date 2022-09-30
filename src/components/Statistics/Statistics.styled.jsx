import styled from 'styled-components';

export const StatisticsList = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: ${p => p.theme.space[6]}px;

  color: ${p => p.theme.colors.greyBorder};
  font-size: ${p => p.theme.fontSizes[2]}px;

  span {
    font-weight: ${p => p.theme.fontWeights[6]};
  }
`;
