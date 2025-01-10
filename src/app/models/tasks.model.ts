export interface TaskResponse {
  taskId: number;
  projectType: number;
  projectNo: number;
  projectName: string;
  subject: string;
  priority: string;
  customer: string;
  customerDetails: string;
  site: string;
  siteDetails: string;
  parentTaskId: number;
  status: string;
  sectionDepartmentId: number;
  sectionDepartmentName: string;
  sectionName: string;
  companyId: number;
  startDate: string; // ISO string format (e.g., "2024-06-21")
  createdDate: string; // ISO string format with timezone (e.g., "2024-06-17T13:48:54+10")
  estimatedHrs: string;
  actualHrs: string;
  dueDate: string; // ISO string format (e.g., "2024-06-28")
  notes: string;
  description: string;
  completedDate: string; // Optional, can be empty string or ISO string
  assignedEmployeeIds: number[];
  assignedEmployeeDetails: { [key: number]: string };
  statusId: number;
  progress: string;
  createdEmployeeId: number;
  categoryId: number;
  emailNotification: number;
}

export interface TaskDto {
  TaskID: number;
  ProjectType: number;
  ProjectNo: number;
  ProjectName: string;
  Subject: string;
  Priority: string;
  Customer: string;
  CustomerDetails: string;
  Site: string;
  SiteDetails: string;
  ParentTaskID: number;
  Status: string;
  SectionDepartmentID: number;
  SectionDepartmentName: string;
  SectionName: string;
  CompanyID: number;
  StartDate: string; // ISO string format (e.g., "2024-06-21")
  CreatedDate: string; // ISO string format with timezone (e.g., "2024-06-17T13:48:54+10")
  EstimatedHrs: string;
  ActualHrs: string;
  DueDate: string; // ISO string format (e.g., "2024-06-28")
  Notes: string;
  Description: string;
  CompletedDate: string; // Optional, can be empty string or ISO string
  AssignedEmployeeIDs: number[];
  AssignedEmployeeDetails: { [key: number]: string };
  StatusID: number;
  Progress: string;
  CreatedEmployeeID: number;
  CategoryID: number;
  EmailNotification: number;
}
