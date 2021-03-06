/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutRequest } from '../actions';
import gravatar from '../utils/gravatar';

import '../assets/styles/components/Header.scss';

import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  const hashUser = Object.keys(user).length > 0;

  const handleLogOut = () => {
    props.logoutRequest({});
  };

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });
  return (
    <header className={headerClass}>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {
            hashUser ?
              <img src={gravatar(user.email)} alt={`Foto del usuario ${user.name}`} /> :
              <img src={userIcon} />
          }
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            {
              hashUser ?
                <a href='/'>{user.name}</a> :
                <></>
            }
          </li>
          <li>
            {
              hashUser ?
                <Link to='/login' onClick={handleLogOut}>Cerrar sesión</Link> :
                <Link to='/login'>Iniciar Sesión</Link>
            }
          </li>
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
