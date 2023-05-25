import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  margin: 24px auto;
  padding: 24px;
  text-align: center;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.mainBackgroundColor};
  border-radius: ${p => p.theme.borderRadius};
  box-shadow: ${p => p.theme.boxShadow};
`;
