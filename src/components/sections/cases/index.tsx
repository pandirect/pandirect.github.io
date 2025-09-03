
import { getPreviewCaseStudies } from '@/lib/case-studies-data';

import FeaturedCasesClient from "@/components/sections/cases/client";

const Cases = async () => {
  const cases = await getPreviewCaseStudies();

  return <FeaturedCasesClient cases={cases} />
};

export default Cases;
