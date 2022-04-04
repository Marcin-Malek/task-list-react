import TasksPage from './features/tasks/TasksPage/index';
import TaskPage from './features/tasks/TaskPage/index';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import AuthorPage from './features/author/AuthorPage';
import { HashRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const App = () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <NavLink to="/zadania">Zadania</NavLink>
                </li>
                <li>
                    <NavLink to="/autor">O Autorze</NavLink>
                </li>
            </ul>
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route path="/zadania">
                    <TasksPage />
                </Route>
                <Route path="/autor">
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to="zadania" />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);

export default App;
