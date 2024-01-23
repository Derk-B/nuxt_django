import type { TodoStatusEnum } from "./todoStatusEnum";

export interface ITodo {
    title: string,
    description: string
    id: number,
    status: TodoStatusEnum,
}