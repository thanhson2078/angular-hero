import { SubmissionsStatusEnum } from '../enum/submissions.enum';

export interface Submission {
  id?: string;
  workFlow: string;
  status: SubmissionsStatusEnum;
  from: string;
  to: string;
  dueDate: string;
}
