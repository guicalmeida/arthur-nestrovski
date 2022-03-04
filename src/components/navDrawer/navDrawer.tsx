import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import MailIcon from '@mui/icons-material/Mail'
import { useState } from 'react'
import Image from 'next/image'
import logo from '../../../public/logo.svg'

const NavDrawer = () => {
  const [drawer, setDrawer] = useState<boolean>(false)

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }
      setDrawer(open)
    }

  const SiteAppBar = () => {
    return (
      <AppBar
        position="fixed"
        sx={{ right: 'auto', left: 0, width: 80, height: '100vh' }}
      >
        <Toolbar
          sx={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            width: '100%',
            margin: '20px 0',
          }}
          disableGutters={true}
        >
          <Image src={logo} alt="logo" height={60} width={60} />
          <IconButton color="inherit" onClick={() => setDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    )
  }

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <Drawer anchor="left" open={drawer} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
      <SiteAppBar />
    </>
  )
}

export default NavDrawer

export interface NavDrawerProps {
  open: boolean
}
