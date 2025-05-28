import { CaseStudy } from '../types/CaseStudy';

   interface CaseStudyFiltersProps {
     caseStudies: CaseStudy[];
   }

   const CaseStudyFilters: React.FC<CaseStudyFiltersProps> = () => {
     return null; // Usuwamy filtry, zwracając null - caseStudies są już filtrowane w page.tsx
   };

   export default CaseStudyFilters;