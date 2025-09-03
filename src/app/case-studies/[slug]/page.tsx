import {notFound} from 'next/navigation';
import {getCaseStudies} from '@/lib/case-studies-data';
import CaseDetailClient from "@/app/case-studies/[slug]/client";

export async function generateStaticParams() {
    const studies = await getCaseStudies();

    return studies.map((study) => ({
        slug: study.slug,
    }));
}

type Props = {
    params: {
        slug: string;
    };
};

export default async function CaseStudyDetailPage({params}: Props) {
    const caseStudies = await getCaseStudies();

    const {slug} = params;
    const study = caseStudies.find((c) => c.slug === slug);

    if (!study) {
        return notFound();
    }

    return <CaseDetailClient study={study} />
}
