import "./App.css";

import Routing from "./routes/routes";
// import { HomePage } from './components/home/homePage';
// global.backendUrl="http://localhost:3001"

global.backendUrl = "https://sovereignbackend.unialsolutions.com";
// global.backendUrlChatServer = "https://sovereignchatserver.unialsolutions.com";
global.backendUrlChatServer="http://localhost:3001"

const App = () => {
  return <Routing />;
};

export default App;
