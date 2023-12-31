import Header from '../../molecules/Header';
import Footer from '../../atoms/Footer/Footer';
import Table from '../../molecules/Table';

import { StyledDiv } from './style';

const Layout = () => {
  return (
    <StyledDiv>
      <Header />
      <Table className='table is-striped is-hoverable' />
      <Footer />
    </StyledDiv>
  );
};

export default Layout;
