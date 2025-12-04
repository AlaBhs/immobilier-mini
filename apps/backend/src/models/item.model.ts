export interface Item {
  id: string;
  title: string;
  description?: string;
  status: 'todo' | 'in-progress' | 'done';
  createdAt: Date;
}
