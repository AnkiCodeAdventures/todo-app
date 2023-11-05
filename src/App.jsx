import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// const todos = [
//   { task: "Eat Breakfast", id: "1" },
//   { task: "Make todo", id: "2" },
// ];

function App() {
  function handleAdd() {
    console.log("working");
  }

  return (
    <Box
      textAlign="center"
      color="aquamarine"
      bgcolor="black"
      height="100vh"
      padding="1em 2em"
    >
      <Typography variant="h3" component="h1">
        TODO
      </Typography>
      <Box textAlign="right">
        <Button variant="outlined" onClick={handleAdd}>
          <AddIcon /> Add
        </Button>
      </Box>
    </Box>
  );
}

export default App;
