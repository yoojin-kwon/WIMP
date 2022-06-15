import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import AddPlaylist from './components/addPlayList';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import GlobalStyle from './style/GlobalStyle';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='addPlaylist' element={<AddPlaylist />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};
export default App;
