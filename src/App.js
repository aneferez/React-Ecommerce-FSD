import { ColorModeContext, useMode } from "./theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router";
import Topbar from "./Components/Scenes/Global/Topbar";
import Sidebar from "./Components/Scenes/Global/Sidebar"
import Dashboard from "./Components/Scenes/Dashboard";
import Team from "./Components/Scenes/team/team";
import Invoices from "./Components/Scenes/invoice/invoice";
import Contacts from "./Components/Scenes/contacts/contacts";
import Calendar from "./Components/Scenes/calendar/calendar";
import Form from "./Components/Scenes/form/form";
import FAQ from "./Components/Scenes/FAQ/faq";



function App() {
  const [theme,colorMode] = useMode();
  return (<ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>  
      <CssBaseline/>
      <div className="app">
        <Sidebar/>
        <main className="content">
          <Topbar/>
          <Routes>
            <Route path="/"element={<Dashboard/>}/>
            <Route path="/team"element={<Team/>}/>
            <Route path="/contacts"element={<Contacts/>}/>
            <Route path="/invoices"element={<Invoices/>}/>
            <Route path="/form"element={<Form/>}/>
            <Route path="/faq"element={<FAQ/>}/>
            <Route path="/calendar" element={<Calendar />} />
            
          </Routes>
        </main>
        </div>
      </ThemeProvider>
  </ColorModeContext.Provider>
  

  );
}

export default App;
