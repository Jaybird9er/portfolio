import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

// components
import Header from "./components/Header";
import Navbar from "./components/Navbar";

// pages
import Work from "./pages/Work";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
	return (
			<div className='app'>
		  <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/work' component={Work} />
          <Route path='/about' component={About} />
        </Switch>
		  </Router>
			</div>
	);
}

export default App;
