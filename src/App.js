import TasksPage from './features/tasks/TasksPage/index';
import TaskPage from './features/tasks/TaskPage/index';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import AuthorPage from './features/author/AuthorPage';
import { HashRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { StyledNavLink } from './styled';

const App = () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/autor">O Autorze</StyledNavLink>
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
