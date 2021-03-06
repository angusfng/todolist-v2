export type ColumnType = {
  id: string;
  title: string;
  tasks: TaskType[];
};

export type TaskType = {
  id: string;
  details: string;
  taskState: string;
  date: string;
};
