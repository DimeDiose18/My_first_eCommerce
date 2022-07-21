import React, { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { withStyles } from "@material-ui/styles"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import type {} from "@mui/lab/themeAugmentation"

type Anchor = "left";

const Drawer = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };


  const list = (anchor: Anchor) => (
   <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    > 
      <List>
        {["Iniciar sesión", "Tienda", "Comunidad", "Soporte"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Cambiar idioma", "Ver versión clásica"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  //Aquí pones los estilos 
const StyleDrawer = withStyles ({
    root: {
        backgroundColor: "#171a2194",
    },
})(SwipeableDrawer);


const theme = createTheme({
  components: {
    SwipeableDrawer: {
      styleOverrides: {
        root: {
          backgroundColor: "yellow"
        }
      }
    }
  }
})
  //
  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <ThemeProvider theme={theme}></ThemeProvider>
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}>
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
        </ThemeProvider>)
      ))};
    </div>
  );
}

export default Drawer; 