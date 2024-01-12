'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
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
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import MapIcon from '@mui/icons-material/Map';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import DayPicking from '@/components/Molecules/DayPicking/DayPicking';
import DayRangePicking from '@/components/Molecules/DayRangePicking/DayRangePicking';
import { useGraphData } from '@/store/graphData';

export const drawerWidth = 240;

const drawer = (
    expanded: string | false,
    handleChange: (
        panel: string
    ) => (event: React.SyntheticEvent, newExpanded: boolean) => void,
    router: any
) => (
    <>
        <Toolbar />
        <Divider />
        <List>
            {/* Change date for day hourly charts */}
            <Accordion
                expanded={expanded === 'hourly'}
                onChange={handleChange('hourly')}
                style={{ boxShadow: 'none' }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                >
                    <Typography>Paros duomenys</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <DayPicking />
                </AccordionDetails>
            </Accordion>

            <Divider />

            {/* Change date for day avg charts */}
            <Accordion
                style={{ boxShadow: 'none' }}
                expanded={expanded === 'daily'}
                onChange={handleChange('daily')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                >
                    <Typography>Dienų duomenys</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <DayRangePicking />
                </AccordionDetails>
            </Accordion>
        </List>
        <Divider />
        <List>
            {['1as grafikas', 'Viršutinis limitas', 'Apatinis limitas'].map(
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
        <Box mt="auto">
            <Divider sx={{ marginTop: 'auto' }} />
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => router.push('/')}>
                        <ListItemIcon>
                            <MapIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Žemėlapis'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    </>
);

const SideDrawer = ({ children }: { children: React.ReactNode }) => {
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const { showGraph, setShowGraph } = useGraphData();
    const [expanded, setExpanded] = useState<string | false>(showGraph);
    const router = useRouter();

    const handleChange =
        (panel: string) =>
        (event: React.SyntheticEvent, newExpanded: boolean) => {
            if (newExpanded) {
                setShowGraph(panel);
            }
            setExpanded(newExpanded ? panel : false);
        };

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
                {drawer(expanded, handleChange, router)}
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
                {drawer(expanded, handleChange, router)}
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
