import { Box, useMediaQuery } from '@mui/material'
import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar';
import { useState } from 'react';
import { useGetUserQuery } from '../../state/api';
import { useSelector } from 'react-redux';

function Layout() {
  const isNonMobile =  useMediaQuery('(min-width: 600px');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const userId = useSelector(state => state.global.userId)
  const { data } = useGetUserQuery(userId);

  return (
    <Box display={isNonMobile ? 'flex' : 'block'} width='100%' height='100%'>
      <Sidebar user={data || {}} isNonMobile={isNonMobile} isSidebarOpen={isSidebarOpen} drawerWidth='250px' setIsSidebarOpen={setIsSidebarOpen} />
      <Box flexGrow={1}>
        <Navbar user={data || {}} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout