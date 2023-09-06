import * as React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../../../redux/authReducer'
import { useDispatch, useSelector } from 'react-redux'
import noAvatar from './../../../assets/images/NoAvatar.png'

export default function AccountMenu() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const img = useSelector(state => {
        const profileInfo = state.profilePage.profileInfo;
        if (profileInfo && profileInfo.photos) {
            return profileInfo.photos.small;
        }

        return noAvatar;
    });

    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <React.Fragment>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    marginRight: 'auto',
                    justifyContent: 'center',
                    height: '100%' // Устанавливаем высоту контейнера на 100% для вертикального выравнивания


                }}
            >
                <Tooltip title='Account settings'>
                    <IconButton
                        onClick={handleClick}
                        size='small'
                        sx={{ ml: 0.5 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup='true'
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }} src={img}></Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id='account-menu'
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: 0,
                            mr: 1
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0
                        }
                    }
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={() => { navigate('/profile') }}>
                    <Avatar />{' '}
                    <span>Profile</span>
                </MenuItem>
                <MenuItem onClick={() => { navigate('/dialogs') }}>
                    <Avatar />{' '}
                    <span>Messages</span>
                </MenuItem>
                <MenuItem onClick={() => { navigate('/users') }}>
                    <Avatar />{' '}
                    <span>Users</span>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout fontSize='small' />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    )
}