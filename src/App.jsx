import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Settings } from "./pages/Settings";
import { Questions } from "./pages/Questions";
import { Finalscreen } from "./pages/FinalScreen";

import { Box, Container } from "@mui/material";

function App() {
  return (
    <div>
      <Router>
        <Container maxWidth="sm">
          <Box textAlign="center" mt={5}>
            <Routes>
              <Route path="/" element={<Settings />} />
              <Route path="/questions" element={<Questions />} />
              <Route path="/score" element={<Finalscreen />} />
            </Routes>
          </Box>
        </Container>
      </Router>
    </div>
  );
}

export default App;
