import { StyledFooterDiv } from './style';
export interface IFooterProps {
  breakpoint: string;
}

const Footer = () => {
  return (
    <StyledFooterDiv>
      <div>© 2023 Visos teisės saugomos </div>
    </StyledFooterDiv>
  );
};

export default Footer;
