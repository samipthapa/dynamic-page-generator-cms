import Drawer from '@mui/material/Drawer'
import {
    Logout,
    LaptopMac,
    KeyboardArrowRight,
    ExpandLess
} from '@mui/icons-material'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Logo from "../../assets/images/logo.webp"
import { Typography } from '@mui/material'
import React, { useState } from 'react'
import Collapse from '@mui/material/Collapse'

interface Props {
    selectedItem: string;
    handleSelected: (itemName: string) => void;
}

const SideBar: React.FC<Props> = ({ selectedItem, handleSelected }) => {
    const [open, setOpen] = React.useState(false);

    const sideBarContents = [
        { name: 'Preview', icon: <LaptopMac /> },
        { name: 'Components', icon: open ? <ExpandLess /> : <KeyboardArrowRight /> },
        { name: 'Logout', icon: <Logout /> },
    ]

    const components = [
        "Navigation Bar", "Hero Section", "Slider Section", "Detail Section", "Contact Section", "Footer"
    ]

    const handleItemClick = (itemName: string) => {
        if (itemName === 'Components') {
            setOpen(!open);
        } else if (components.includes(itemName)) {
            setOpen(true);
        }
        else {
            setOpen(false);
        }
        handleSelected(itemName === 'Components' ? selectedItem : itemName)

    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                sx={{
                    width: 270,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 270,
                        boxSizing: 'border-box',
                        padding: '10px',
                    },
                }}
                variant="permanent"
            >
                <div className="flex-row flex items-center py-3 self-center">
                    <img src={Logo} alt="logo" className="w-11 h-auto rounded" />
                    <Typography
                        component="div"
                        sx={{ flexGrow: 1, marginLeft: 1, fontWeight: 500, fontFamily: 'GilroyBold' }}
                    >
                        HAMRO PATRO
                    </Typography>
                </div>
                <List>
                    {sideBarContents.map((item, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton
                                sx={{
                                    '&.Mui-selected': {
                                        backgroundColor: '#B71D1C',
                                        borderRadius: '10px',
                                        color: '#fff',
                                    },
                                    '&.Mui-selected: hover': {
                                        backgroundColor: '#B71D1C',
                                        borderRadius: '10px',
                                        color: '#fff',
                                    },
                                    '&.MuiListItemButton-root': {
                                        borderRadius: '10px',
                                        marginY: '5px',
                                    },
                                    ...(open && item.name === 'Components' && {
                                        '&.MuiListItemButton-root': {
                                            backgroundColor: '#fff',
                                        },
                                    }),
                                }}
                                selected={selectedItem === item.name}
                                onClick={() => handleItemClick(item.name)}
                            >
                                {item.name == 'Components' &&
                                    <div>
                                        <div className="flex flex-row items-center">
                                            <ListItemIcon
                                                sx={{
                                                    '&.MuiListItemIcon-root': {
                                                        minWidth: '40px',
                                                    }
                                                }}
                                            >
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={item.name}
                                                primaryTypographyProps={{
                                                    fontFamily: 'GilroyBold',
                                                    fontSize: '15px',
                                                }}
                                            />
                                        </div>
                                        <Collapse in={open} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                {components.map((item, _) => (
                                                    <ListItemButton
                                                        selected={selectedItem === item}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleItemClick(item)
                                                        }}
                                                        sx={{
                                                            width: '210px',
                                                            '&.Mui-selected': {
                                                                backgroundColor: '#B71D1C',
                                                                borderRadius: '10px',
                                                                color: '#fff',
                                                            },
                                                            '&.Mui-selected: hover': {
                                                                backgroundColor: '#B71D1C',
                                                                borderRadius: '10px',
                                                            },
                                                            '&.MuiListItemButton-root': {
                                                                borderRadius: '10px',
                                                                marginY: '5px',
                                                            }
                                                        }}>
                                                        <ListItemText
                                                            primary={item}
                                                            primaryTypographyProps={{
                                                                fontFamily: 'GilroyBold',
                                                                fontSize: '15px',
                                                                marginLeft: '30px',
                                                            }}
                                                        />
                                                    </ListItemButton>
                                                ))}
                                            </List>
                                        </Collapse>
                                    </div>
                                }

                                {item.name != 'Components' &&
                                    <div className="flex flex-row items-center">
                                        <ListItemIcon
                                            sx={{
                                                color: selectedItem === item.name ? '#fff' : 'initial',
                                                '&.MuiListItemIcon-root': {
                                                    minWidth: '40px',
                                                }
                                            }}
                                        >{item.icon}</ListItemIcon>
                                        <ListItemText
                                            primary={item.name}
                                            primaryTypographyProps={{
                                                fontFamily: 'GilroyBold',
                                                fontSize: '15px',
                                            }}
                                        />
                                    </div>
                                }
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    )
}

export default SideBar