import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Box } from '@mui/material'

const Header: React.FC = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    margin: '0 1rem',
  }

  const activeStyle = {
    fontWeight: 'bold',
    color: '#FF0000', // สีทองเมื่อ active
  }

  const TextStyle = {
    fontFamily: 'Prompt',
    fontWeight: 'bold',
    fontSize: '1.1rem',
}

  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgba(0,0,0,0)', boxShadow: 'none', }}>
      <Toolbar>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 ,}}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              ...linkStyle,
              ...(isActive ? activeStyle : {})
            })}
          >
            <Typography sx={TextStyle}>Home</Typography>
          </NavLink>
          <NavLink
            to="/function"
            style={({ isActive }) => ({
              ...linkStyle,
              ...(isActive ? activeStyle : {})
            })}
          >
            <Typography sx={TextStyle}>Function</Typography>
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              ...linkStyle,
              ...(isActive ? activeStyle : {})
            })}
          >
            <Typography sx={TextStyle}>Contact</Typography>
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              ...linkStyle,
              ...(isActive ? activeStyle : {})
            })}
          >
            <Typography sx={TextStyle}>About</Typography>
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
