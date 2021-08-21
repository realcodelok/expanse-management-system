import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './containers/Dashboard';
import { pagePaths } from './utils/constant';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path={pagePaths.root} component={Dashboard} />
			</Switch>
		</Router>
	);
}

export default App;
