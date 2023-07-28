import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import ErrorPage from '../pages/error-page.component';
import App from './App';
import { PAGES, PAGES_COMPONENTS } from '../pages';
import MyAdminPage from '../pages/my-admin/my-admin-page.component';
import MyAdminGoodsList from '../features/goods/my-admin-goods-list.component';
import MyAdminAddEditGoodItem from '../features/goods/my-admin-goods-add-edit-item.component';

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
        path='/my-admin'
        element={<MyAdminPage />}
        errorElement={<ErrorPage />}
      >
        <Route errorElement={<ErrorPage />}>
          <Route path='goods' element={<MyAdminGoodsList />} />
          {/* Back button (index element) */}
          <Route
            path='goods/edit/:goodId'
            element={<MyAdminAddEditGoodItem />}
          />
          <Route path='goods/add' element={<MyAdminAddEditGoodItem />} />
        </Route>
      </Route>
    </>
  )
);
