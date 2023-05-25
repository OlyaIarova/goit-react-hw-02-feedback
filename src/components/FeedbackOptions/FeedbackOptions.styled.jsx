import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 8px;
  justify-content: center;
`;

export const FeedbackButton = styled.button`
  text-transform: capitalize;
  font-weight: bold;
  padding: 8px 12px;
  color: ${p => p.theme.colors.BtnTextColor};
  background-color: ${p => p.theme.colors.btnBackgroundColor};
  box-shadow: ${p => p.theme.colors.boxShadow};
  border-radius: ${p => p.theme.borderRadius};
  transition: color ${p => p.theme.duration} ${p => p.theme.timingFunction},
    background-color ${p => p.theme.duration} ${p => p.theme.timingFunction};

  :hover {
    color: ${p => p.theme.colors.text};
    background-color: ${p => p.theme.colors.btnBackgroundhoverColor};
  }
`;
