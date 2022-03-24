import {
  AppBar,
  Box,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from '@mui/material'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'

import { useState } from 'react'
import universalSlugify from 'services/slugifyHelper'
import Image from 'next/image'

import logo from '../../public/logo.svg'
import sections from '../services/sectionsHelper'
import Link from './link'

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
        sx={{
          right: 'auto',
          left: 0,
          width: 80,
          height: '100vh',
          display: {
            xs: 'none',
            sm: 'none',
            md: 'flex',
          },
        }}
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
          <Link link={'/'}>
            <Image src={logo} alt="logo" height={60} width={60} />
          </Link>
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

  const [subItemsOpen, setSubItemsOpen] = useState<{
    [index: string]: boolean
  }>({
    Música: true,
    Escrita: true,
  })

  const ListComp = () => {
    const handleCollapseClick = (
      item: (string | { [index: string]: string })[]
    ) => {
      const name = item[0] as string
      const hasSubItems = typeof item[1] !== 'string'

      if (hasSubItems) {
        setSubItemsOpen({
          ...subItemsOpen,
          [name]: !subItemsOpen[name],
        })
      }
    }

    const expandArrowsStyle = {
      position: 'absolute',
      right: '10px',
      top: '7px',
    }
    return (
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {Object.entries(sections).map((item) => {
            const name = item[0]
            const slug = universalSlugify(name)
            const hasSubItems = typeof item[1] !== 'string'
            return (
              <div key={slug} style={{ position: 'relative' }}>
                <Link link={hasSubItems ? `/${slug}` : `/${item[1]}`}>
                  <ListItemButton onClick={toggleDrawer(false)}>
                    <ListItemText primary={name} />
                  </ListItemButton>
                </Link>
                {hasSubItems &&
                  (subItemsOpen[name] ? (
                    <IconButton
                      onClick={() => handleCollapseClick(item)}
                      sx={expandArrowsStyle}
                    >
                      <ExpandLess />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={() => handleCollapseClick(item)}
                      sx={expandArrowsStyle}
                    >
                      <ExpandMore />
                    </IconButton>
                  ))}
                {hasSubItems &&
                  Object.entries(item[1]).map((subitem) => {
                    return (
                      <Collapse
                        in={subItemsOpen[name]}
                        timeout="auto"
                        key={universalSlugify(subitem[0])}
                        unmountOnExit
                      >
                        <List component="div" disablePadding>
                          <Link link={`/${slug}/${subitem[1]}`}>
                            <ListItemButton
                              sx={{ pl: 4 }}
                              onClick={toggleDrawer(false)}
                            >
                              <ListItemText primary={subitem[0]} />
                            </ListItemButton>
                          </Link>
                        </List>
                      </Collapse>
                    )
                  })}
              </div>
            )
          })}
        </List>
      </Box>
    )
  }

  return (
    <>
      <Drawer anchor="left" open={drawer} onClose={toggleDrawer(false)}>
        <ListComp />
      </Drawer>
      <SiteAppBar />
    </>
  )
}

export default NavDrawer
