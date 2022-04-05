import TasksPage from './features/tasks/TasksPage/index';
import TaskPage from './features/tasks/TaskPage/index';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import AuthorPage from './features/author/AuthorPage';
import { HashRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import {
    Navigation,
    NavigationItem,
    NavigationList,
    StyledNavLink,
    Wrapper
} from './styled';

const App = () => (
    <HashRouter>
        <Navigation>
            <NavigationList>
                <NavigationItem>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </NavigationItem>
                <NavigationItem>
                    <StyledNavLink to="/autor">O Autorze</StyledNavLink>
                </NavigationItem>
            </NavigationList>
        </Navigation>
        <Wrapper>
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
        </Wrapper>
    </HashRouter >
);

export default App;
