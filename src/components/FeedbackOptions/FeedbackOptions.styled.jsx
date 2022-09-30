import styled from 'styled-components';

export const FeedbackOptionsList = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const FeedbackOptionsBtn = styled.button`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;

  border: ${p => `${p.theme.borders.m} ${p.theme.colors.greyBorder}`};
  border-radius: ${p => p.theme.radii.m};
  box-shadow: ${p => p.theme.shadows.shadow};

  cursor: pointer;

  font-size: ${p => p.theme.fontSizes[2]}px;
  color: ${p => p.theme.colors.greyBorder};
  background-color: ${p => p.theme.colors.btnBgr};
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${p => p.theme.colors.btnHover};
  }
  &:active:focus {
    background-color: ${p => p.theme.colors.btnBgr};
  }
`;
