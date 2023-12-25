'use client';

import { useState } from 'react';
import {
    Box,
    Drawer,
    Toolbar,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    CssBaseline,
    IconButton,
    Typography,
    AppBar,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';

import { useGraphDayData } from '@/store/graphDayData';
import DayPicker from '@/components/Atoms/DayPicker/DayPicker';

export const drawerWidth = 240;

const drawer = (date: string, updateDate: (value: string) => void) => (
    <div>
        <Toolbar />
        <Divider />
        <List>
            <ListItem>
                <DayPicker
                    value={date}
                    setValue={updateDate}
                    label="Pakeisti datą"
                />
            </ListItem>
            {['Day range'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {['Only 1 graph', 'Add upper max', 'Add lower max'].map(
                (text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                )
            )}
        </List>
    </div>
);

const SideDrawer = ({ children }: { children: React.ReactNode }) => {
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const { date, updateDate } = useGraphDayData();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    display: { sm: 'none', xs: 'block' },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Pakeisti duomenų atvaizdavimą
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Drawer on bigger screen */}
            <Drawer
                sx={{
                    display: { sm: 'block', xs: 'none' },
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                {drawer(date, updateDate)}
            </Drawer>

            {/* On smaller screen */}
            <Drawer
                variant="temporary"
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    zIndex: 100,
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                    },
                }}
            >
                {drawer(date, updateDate)}
            </Drawer>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    bgcolor: 'background.default',
                    p: 3,
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default SideDrawer;
