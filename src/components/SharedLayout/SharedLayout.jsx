import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavWrapper, Nav, Title, Link, Footer, FooterLink, } from './SharedLayout.styled';
import { Container } from 'components/App/App.styled';
import { SiThemoviedatabase } from 'react-icons/si';
import { IconContext } from 'react-icons';
import Loading from 'components/Loading';

export default function SharedLayout() {
  return (
    <>
      <Header>
        <Container>
          <NavWrapper>
            <Link to="/">
              <IconContext.Provider
                value={{ size: '50px', color: 'orangered' }}
              >
                <div>
                  <SiThemoviedatabase />
                </div>
              </IconContext.Provider>
            </Link>
            <div>
              <Title>Movie - Space</Title>
            </div>
            <Nav>
              <Link to="/">Home</Link>
              <Link to="/movies">Movies</Link>
            </Nav>
          </NavWrapper>
        </Container>
      </Header>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
       <Footer>
        <Container>
          <p>&#169; 2023 | All Rights Reserved | Developed with 💙💛 by <FooterLink href="https://www.linkedin.com/in/inha-yurchenko-64b110150/" target="_blank" rel="noreferrer">Inha Yurchenko</FooterLink></p>
        </Container>
      </Footer>
    </>
  );
}
