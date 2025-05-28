export interface CaseStudy {
     slug: string;
     title: string;
     description: string;
     thumbnail: string;
     category: string;
     year: number;
     path?: string;
     context?: string;
     goal?: string;
     role?: string;
     technologies?: string[];
     result?: string;
     isFeatured?: boolean;
     metrics?: {
       [key: string]: string | number | undefined;
     };
     [key: string]: any;
   }