import React from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Drawer, List, ListItemButton, ListItemText, Box, Toolbar, Typography } from "@mui/material";

const drawerWidth = 240;

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" fontWeight="bold">
            Admin Panel
          </Typography>
        </Toolbar>

        <List>
          <ListItemButton onClick={() => navigate("/admin")}>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

            <ListItemButton onClick={() => navigate("/admin/users")}>
    <ListItemText primary="Users" />
  </ListItemButton>

  <ListItemButton onClick={() => navigate("/admin/products")}>
    <ListItemText primary="Products" />
  </ListItemButton>
        </List>
      </Drawer>

      {/* Page Content */}
      <Box
  component="main"
  sx={{
    flexGrow: 1,
    bgcolor: "#f5f6fa",
    p: 4,
    minHeight: "100vh",
  }}
>
  <Outlet />
</Box>

    </Box>
  );
};

export default AdminLayout;