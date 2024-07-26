import { createBrowserRouter } from 'react-router-dom';
import AuthProtected from './protected/auth-protected.component';
import { Routes } from "./routes";
import AuthComponent from '../core/layouts/auth/auth.component';
import HomeComponent from '../pages/home/home.component';
import WorkersComponent from '../pages/workers/workers.component';
import LoginComponent from '../pages/login/login.component';
import { PublicComponent } from '../core/layouts/public/public.component';
import AddWorkerComponent from '../pages/add-worker/add-worker.component';
import EditWorkerComponent from '../pages/edit-worker/edit-worker.component';

const router = createBrowserRouter([
    {
        element: <AuthProtected layout="public">
            <PublicComponent />
        </AuthProtected>,
        children: [
            {
                path: Routes.default,
                element: <HomeComponent />
            },
            {
                path: Routes.workers,
                element: <WorkersComponent />,
            },
            {
                path: Routes.add,
                element: <AddWorkerComponent />,
            },
            {
                path: Routes.edit,
                element: <EditWorkerComponent />,
            }
        ]
    },
    {
        path: Routes.auth,
        element: <AuthProtected layout="auth">
            <AuthComponent />
        </AuthProtected>,
        children: [
            {
                path: Routes.login,
                element: <LoginComponent />
            }
        ]
    },
    {
        path: '*',
        element: <h1>404 - Not Found</h1>,
    }
], { basename: '/', });


export default router;