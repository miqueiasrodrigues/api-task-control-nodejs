export interface ICreateTask {
  name: string;
  description: string;
  date: Date;
  time_start: string;
  time_expected_end: string | null;
  time_end: string | null;
  status: string;
}

export interface IUpdateTask {
  id: string;
  name?: string;
  description?: string;
  date?: Date;
  time_start?: string;
  time_expected_end?: string | null;
  time_end?: string | null;
  status?: string;
}
