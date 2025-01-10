import { TaskDto, TaskResponse } from '../models/tasks.model';

export const transformTasksApiRes = (res: TaskDto[]): TaskResponse[] => {
  const taskDto: TaskResponse[] = res.map((task) => {
    const transformedTask: Record<string, any> = {};

    // Convert keys to camelCase
    Object.keys(task).forEach((key) => {
      const camelCaseKey = key.charAt(0).toLowerCase() + key.slice(1);
      transformedTask[camelCaseKey] = task[key as keyof TaskDto];
    });

    return transformedTask as TaskResponse;
  });

  return taskDto;
};
