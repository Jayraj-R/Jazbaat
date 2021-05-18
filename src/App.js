import './App.css';
import Layout from './Component/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createMuiTheme, ThemeProvider} from '@material-ui/core'

function App() {
  const theme = createMuiTheme({
    palette:{
        primary:{
            main:"#4A4A4A"
        },
        secondary:{
            main:"#fef9f0"
        },
        error:{
            main:"#FACA08"
        }
    }
});
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Layout/>
      </ThemeProvider>
    </div>
  );
}

export default App;
