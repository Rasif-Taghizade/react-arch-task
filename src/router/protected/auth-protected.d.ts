import { ReactElement } from "react";

export interface IAuthProtectedProps {
    dep?: unknown;
    children: ReactElement;
    layout?: 'auth' | 'public';
}