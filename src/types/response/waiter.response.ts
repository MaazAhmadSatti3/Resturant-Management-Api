export interface WaiterSaveRes {
    _id: string;
    waiterName: string;
    password: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface WaiterLoginRes {
    message: string;
}