import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import ErrorPage from '../pages/error-page.component';
import App from './App';
import { PAGES, PAGES_COMPONENTS } from '../pages';
import MyAdminPage from '../pages/my-admin/my-admin-page.component';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />} errorElement={<ErrorPage />}>
        <Route errorElement={<ErrorPage />}>
          {PAGES.map(({ path }) => (
            <Route key={path} path={path} element={PAGES_COMPONENTS[path]} />
          ))}
        </Route>
      </Route>

      <Route
        path='/my-admin/*'
        element={<MyAdminPage />}
        errorElement={<ErrorPage />}
      />
    </>
  )
);
