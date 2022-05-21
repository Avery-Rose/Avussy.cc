import React, { useState, useEffect } from 'react';
import { BiUpArrow } from 'react-icons/bi';
import {
  Container,
  Link,
  Col,
  Row,
  Spacer,
  Switch,
  useTheme,
  changeTheme,
  Text,
} from '@nextui-org/react';

import { GrSun } from 'react-icons/gr';
import { GrMoon } from 'react-icons/gr';

const isSelected = (link) => {
  return window.location.pathname === link;
};

const NavItem = (props) => {
  const { children, href, key } = props;
  return (
    <Col
      key={key}
      justify={'center'}
      css={{
        width: 'fit-content',
        margin: '0px 10px',
        padding: '10px',
        background: '$secondaryBackground',
      }}
    >
      <Text
        onClick={() => {
          window.location.href = href;
        }}
        key={key}
        href={href}
        color={isSelected(href) ? 'primary' : 'secondary'}
        css={{
          cursor: 'pointer',
          fontSize: '1.5rem',
          letterSpacing: '0.1rem',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          display: 'inline-block',
          position: 'relative',

          transition: 'transition 0.2s ease-in-out, opacity 0.25s ease-out',
          opacity: isSelected(href) ? 1 : 0.5,
          transformOrigin: 'bottom right',

          '&:after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            transform: 'scaleX(0)',
            height: '2px',
            bottom: '0',
            left: '0',
            transformOrigin: 'bottom right',

            transition: 'transform 0.25s ease-out',

            // linear background gradient
            background: '$secondary',
          },

          '&:active': {
            color: '$primary',
            transition: 'all 0.25s ease-out',
          },

          '&:hover': {
            '&:after': {
              transform: isSelected(href) ? 'scaleX(0)' : 'scaleX(1)',
              transformOrigin: 'bottom left',
            },
            transformOrigin: 'bottom left',
            transition: 'transform 0.25 ease-out',
            opacity: '1',
          },
        }}
      >
        {children}
      </Text>
    </Col>
  );
};

const Account = (props) => {
  const { user, handleLogin, css } = props;
  useEffect(() => {
    handleLogin({}, (res) => {
      if (!res.success) {
      }
    });
  }, [user, handleLogin]);
  return user ? (
    <Link key={'logout'} href={'/logout'} color={'error'} css={css}>
      Logout
    </Link>
  ) : (
    <Link key={'login'} href={'/login'} color={'text'} css={css}>
      Login
    </Link>
  );
};

/* const AccountMenu = (props) => {
  return (
    <Container>
      <BiUserCircle />
    </Container>
  );
}; */

const NavBar = (props) => {
  const { user, handleLogin } = props;
  const nav = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Trans Guide',
      link: '/trans',
    },
  ];

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [isMobile, setIsMobile] = useState(getWindowDimensions().width < 768);
  // eslint-disable-next-line no-unused-vars
  const [windowDimentions, setWindowDimentions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimentions(getWindowDimensions());
      if (getWindowDimensions().width >= 768) {
        setIsMobile(false);
        setIsOpen(false);
      } else {
        setIsMobile(true);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const curTheme = window.localStorage.getItem('data-theme') || 'dark';
    changeTheme(curTheme);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const handleNavClick = () => setIsOpen(!isOpen);

  const handleBurgerAnimation = () => {
    if (!isOpen) {
      return 'transform-gpu rotate-180';
    }
    return 'transform-gpu rotate-0 text-lgbtq-pink';
  };

  // theme
  const { type, isDark } = useTheme();

  const handleChange = () => {
    const nextTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('dark-theme', nextTheme);

    // useTheme,
    // changeTheme,
    changeTheme(nextTheme);
  };

  return (
    <div className='overflow-hidden'>
      <div
        className='select-none fixed w-full h-[80px] flex justify-between items-center text-white z-10'
        style={{
          backgroundColor: isDark ? '#1a1a1a' : '#fff',
        }}
      >
        <div
          className='group cursor-pointer z-10  px-4'
          onClick={() => {
            window.location.href = '/';
          }}
        >
          <Link
            href='/'
            color={'text'}
            css={{
              userSelect: 'none',
              fontSize: '2.5rem',
            }}
          >
            Avussy.cc
          </Link>
        </div>
        {/* menu */}
        {isMobile ? null : (
          <Container>
            <Row
              css={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'end',
                alignItems: 'center',
              }}
            >
              {nav.map((item, index) => {
                return (
                  <NavItem
                    key={item.name + index}
                    href={item.link}
                    isDark={isDark}
                  >
                    {item.name}
                  </NavItem>
                );
              })}
              {user ? (
                <Col
                  key={'account'}
                  css={{
                    display: 'flex',
                    width: 'fit-content',
                    justifyContent: 'end',
                    alignItems: 'end',
                    padding: 10,
                  }}
                >
                  <Link
                    key={'account'}
                    href={'/account'}
                    block
                    color={isSelected('/account') ? 'primary' : 'text'}
                    css={{
                      fontSize: '1.5rem',
                      letterSpacing: '0.1rem',
                    }}
                  >
                    {'Account'}
                  </Link>
                </Col>
              ) : (
                <></>
              )}
            </Row>
          </Container>
        )}

        {/* Hamburger */}
        <div
          onClick={handleNavClick}
          className='md:hidden bg-transparent hover:bg-opacity-50 hover:bg-black hover:text-lgbtq-blue z-10 h-full w-[80px] flex justify-center items-center duration-300'
        >
          <BiUpArrow
            size={35}
            className={'duration-300 ' + handleBurgerAnimation()}
          />
        </div>
        <div className='w-full h-1 top-[80px] left-0 absolute bg-gradient-to-r from-[#66faff] via-[#ff66f7] to-[#66faff] bg-200% animate-slideBackGround'></div>
      </div>
      {/* Mobile menu */}
      {isOpen ? (
        <Container
          justify='center'
          alignContent='center'
          css={{
            position: 'absolute',
            top: '81px',
            left: '0',
            width: '100vw',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'evenly',
            height: 'calc(90vh)',
            minWidth: '100vw',
            maxWidth: '100vw',
            m: '0',
            p: '0',
            overflowY: 'scroll',
            overflowX: 'hidden',
            // blur the background
            // blur gradient
            backdropFilter: 'blur(10px)',
            backgroundImage:
              'linear-gradient(to bottom, rgb(0,0,0, 1), rgb(0,0,0,0.6))',
            zIndex: '8',
          }}
          className='md:hidden overflow-scroll'
        >
          <Col
            css={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            {nav.map((item, index) => {
              return (
                <Row justify='center' key={index}>
                  <Link
                    key={index}
                    href={item.link}
                    block
                    color={isSelected(item.link) ? 'primary' : 'text'}
                    css={{
                      textAlign: 'center',
                      fontSize: '3rem',
                    }}
                    className={`animate-[drop-in ${index}]`}
                  >
                    {item.name}
                  </Link>
                </Row>
              );
            })}
          </Col>
        </Container>
      ) : null}
    </div>
  );
};

export default NavBar;

/* <Spacer />
            <Row justify='center' key={'account'}>
              <Account
                user={user}
                handleLogin={handleLogin}
                css={{ textAlign: 'center', fontSize: '3rem' }}
              />
            </Row> */

/* <Col
                css={{
                  display: 'flex',
                  width: 'fit-content',
                  justifyContent: 'end',
                  alignItems: 'end',
                  padding: 10,
                }}
              >
                <Account
                  user={user}
                  handleLogin={handleLogin}
                  css={{ fontSize: '1.5rem', letterSpacing: '0.1rem' }}
                />
              </Col>*/

/* <Container>
          <Switch
            iconOff={
              <GrMoon
                value={{
                  fontSize: '1.5rem',
                  color: isDark ? '#fff' : '#1a1a1a',
                }}
              />
            }
            iconOn={
              <GrSun
                value={{
                  fontSize: '1.5rem',
                  color: isDark ? '#1a1a1a' : '#fff',
                }}
              />
            }
            initialChecked={isDark}
            onChange={(e) => {
              handleChange();
            }}
          />
          <Text>{type}</Text>
        </Container> */
