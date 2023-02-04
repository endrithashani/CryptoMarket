import React from 'react'
import { AppBar, Container , createTheme, MenuItem, Select, ThemeProvider, Toolbar , Typography} from '@mui/material'
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom'
import { CryptoState } from '../CryptoContext';

const useStyles = makeStyles(()=>({
  title: {
    flex: 1,
    color: "black",
    fontWeight: 500,
    cursor: "pointer"
  }
}))

const Navbar = () => {

  const classes = useStyles()

  const navigate = useNavigate()

  const {currency, setCurrency} = CryptoState()

  const darkMode = createTheme({
      palette: {
        primary:{
          main: "#000000",
        },
        type: "dark",
      },
  })
  return (
    <ThemeProvider theme={darkMode}>
    <AppBar color="transparent" position='static'>
      <Container>
        <Toolbar>
          <Typography  
          onClick={()=> navigate("/")} 
          className={classes.title}
          variant="h4"
          >
            Crypto Market
          </Typography>
          <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"EUR"}>EUR</MenuItem>
              <MenuItem value={"USD"}>USD</MenuItem>
            </Select>
        </Toolbar>
      </Container>
    </AppBar>
  </ThemeProvider>
  )
}

export default Navbar
