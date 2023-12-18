import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login"
import Dashboard from './pages/Dashboard'
import { theme } from "./utils/theme"

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
