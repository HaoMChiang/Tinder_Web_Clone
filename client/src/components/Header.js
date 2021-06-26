import React from 'react'
import '../styling/Header.css'
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import tinderLogo from '../images/icons8-tinder-48.png'
import ForumIcon from '@material-ui/icons/Forum';
 
const Header = () => {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize='large' className='header_icon' />
            </IconButton>
            <img src={tinderLogo} className='header_logo' alt='' />
            <IconButton>
                <ForumIcon fontSize='large' className='header_icon' />
            </IconButton>
        </div>
    )
}

export default Header
