export interface IState {
    user: IUser;
    workers: IWorker[];
}

export interface IUser {
    id: number;
    username: string;
    email: string;
    password: string;
}

export interface IWorker {
    id?: number;
    fullName: string;
    email: string;
    phone: string;
    address: string;
    position: string;
    salary: number;
    dateOfBirth: string;
    created_at?: string | null;
    updated_at?: string | null;
}