import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});


function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper style={headerStyle} className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        
        <Tab label="About" to="/About">
          <Link to="/About"></Link>
        </Tab>
      </Tabs>
      <h1 style={headerText}>Scoreboard</h1>
    </Paper>
  );
}
const headerStyle = {
  background: "#009be5",
  height:"28vh"
}
const headerText = {
  color: '#000',
  textAlign: 'center'
}
export default Header;