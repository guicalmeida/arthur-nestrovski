/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  AppBar,
  Box,
  Card,
  Collapse,
  Drawer,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItemButton,
  ListItemText,
  Modal,
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
import useWindowSize from 'hooks/useWindowResize'
import YoutubeIcon from 'icons/Youtube'
import Instagram from 'icons/instagram'
import Search from '@mui/icons-material/Search'
import { useRouter } from 'next/router'

const NavDrawer = () => {
  const [drawer, setDrawer] = useState<boolean>(false)
  const [openSearch, setOpenSearch] = useState(false)
  const [searchText, setSearchText] = useState('')
  const handleClose = () => setOpenSearch(false)
  const router = useRouter()

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

  const { width } = useWindowSize() || {}
  const isSmallScreen = width! <= 900

  const SiteAppBar = () => {
    return (
      <AppBar
        position="fixed"
        sx={{
          right: 0,
          left: 0,
          top: isSmallScreen ? 'auto' : 0,
          bottom: isSmallScreen ? 0 : 'auto',
          width: isSmallScreen ? '100vw' : 80,
          height: isSmallScreen ? 70 : '100vh',
          display: {
            md: 'flex',
          },
        }}
      >
        <Toolbar
          sx={{
            flexDirection: isSmallScreen ? 'row' : 'column',
            justifyContent: 'space-between',
            height: '100%',
            width: '100%',
            p: isSmallScreen ? ' 0 16px' : '20px 0',
          }}
          disableGutters={true}
        >
          <div style={{ order: isSmallScreen ? 2 : 1 }}>
            <Link link={'/'}>
              <Image src={logo} alt="logo" height={60} width={60} />
            </Link>
          </div>
          <div style={{ order: isSmallScreen ? 1 : 2 }}>
            <IconButton color="inherit" onClick={() => setDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </div>
          <div style={{ order: 3 }}>
            <IconButton color="inherit" onClick={() => setOpenSearch(true)}>
              <SearchIcon />
            </IconButton>
          </div>
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
              <li key={slug} style={{ position: 'relative' }}>
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
              </li>
            )
          })}

          <li
            style={{ display: 'flex', gap: '24px', margin: '16px' }}
            className="navbarIconsList"
          >
            <a
              style={{ display: 'flex', alignItems: 'center' }}
              href="https://youtube.com/channel/UCyzE8SG0XtlE4meDIuKfgOQ"
              target="_blank"
              rel="noreferrer"
            >
              <YoutubeIcon />
            </a>
            <a
              style={{ display: 'flex', alignItems: 'center' }}
              href="https://www.instagram.com/arthur_nestrovski/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
          </li>
        </List>
      </Box>
    )
  }

  return (
    <>
      <Modal
        open={openSearch}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Card sx={{ width: 'fit-content' }}>
          <div
            style={{ padding: '16px 32px', width: '80vw', maxWidth: '650px' }}
          >
            <Input
              id="filled-basic"
              sx={{ width: '100%' }}
              onChange={(event) => {
                setSearchText(event?.target?.value)
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  router.push({
                    pathname: '/busca',
                    query: { termos: searchText },
                  })
                  handleClose()
                }
              }}
              endAdornment={
                <InputAdornment
                  position="start"
                  sx={{ cursor: 'pointer' }}
                  onClick={() => {
                    router.push({
                      pathname: '/busca',
                      query: { termos: searchText },
                    })
                    handleClose()
                  }}
                >
                  <Search />
                </InputAdornment>
              }
            />
          </div>
        </Card>
      </Modal>
      <Drawer anchor="left" open={drawer} onClose={toggleDrawer(false)}>
        <ListComp />
      </Drawer>
      <SiteAppBar />
    </>
  )
}

export default NavDrawer
