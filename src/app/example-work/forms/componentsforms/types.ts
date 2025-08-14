import type { FileItem } from './FileDrop';

export type FormDataShape = {
  name: string;
  email: string;
  phone?: string;
  projectType: 'Website'|'SaaS'|'E-commerce'|'Other';
  otherProject?: string;
  budget: number;
  deadline: string;
  notes?: string;
  files: FileItem[];
  agree: boolean;
};
