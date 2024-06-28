import { Link, NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import '../styles/common.css';
import logoImg from '../image/pandaMarketLogo.png';

function getLinkStyle({ isActive }, currentPath) {
  let color = isActive ? '#3692FF' : '#4B5563';
  if (currentPath === '/additem') {
    color = '#3692FF';
  }
  return {
    textDecoration: 'none',
    color: color,
  };
}

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <S.NavContainer>
      <S.NavWrapper>
        <S.LinkContainer to='/items'>
          <S.LogoImg src={logoImg} alt='pandaMarket Logo' />
          <S.BrandLogo>판다마켓</S.BrandLogo>
        </S.LinkContainer>
        <S.Menu>
          <li>
            <NavLink
              to='/boards'
              style={(navData) => getLinkStyle(navData, currentPath)}
            >
              자유게시판
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/items'
              style={(navData) => getLinkStyle(navData, currentPath)}
            >
              중고마켓
            </NavLink>
          </li>
        </S.Menu>
      </S.NavWrapper>
      <S.LoginBtn>로그인</S.LoginBtn>
    </S.NavContainer>
  );
}

const S = {};

S.NavContainer = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #dfdfdf;
`;

S.NavWrapper = styled.div`
  display: flex;
  align-items: center;
`;

S.LinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 200px;
  text-decoration: none;

  @media screen and (max-width: 1200px) {
    margin-left: 24px;
  }

  @media screen and (max-width: 744px) {
    margin-left: 16px;
  }
`;

S.LogoImg = styled.img`
  width: 40px;
  border-radius: 11.18px;

  @media screen and (max-width: 744px) {
    display: none;
  }
`;

S.BrandLogo = styled.span`
  font-family: 'ROKAF Sans';
  font-size: 25.63px;
  font-weight: 700;
  line-height: 34.6px;
  color: #3692ff;
  margin-left: 10px;
  margin-right: 32px;

  @media screen and (max-width: 744px) {
    font-size: 20.2px;
    line-height: 27.27px;
  }
`;

S.Menu = styled.ul`
  font-weight: 700;
  font-size: 18px;
  line-height: 21.48px;
  text-align: center;
  display: flex;
  gap: 15px;
  list-style: none;
  color: #4b5563;
`;

S.LoginBtn = styled.button`
  width: 88px;
  height: 42px;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.09px;
  color: #ffffff;
  background-color: #3692ff;
  border-radius: 8px;
  border: none;
  padding: 12px 23px;
  margin-right: 200px;

  @media screen and (max-width: 1200px) {
    margin-right: 24px;
  }

  @media screen and (max-width: 744px) {
    margin-right: 16px;
  }
`;
