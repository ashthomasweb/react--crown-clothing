import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import CustomButton from '../custom-button/custom-button.component'

import './header.styles.scss'

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <CustomButton onClick={() => console.log(currentUser)}>
      Log State
    </CustomButton>

    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
        {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        ) : (
        <Link className='option' to='/signin'>SIGN IN</Link>
      )}
    </div>
  </div>
)

export default Header
