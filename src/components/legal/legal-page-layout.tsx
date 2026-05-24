import Footer from '@/components/footer';
import Hero from '@/components/sections/hero';

type LegalPageLayoutProps = {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
};

export function LegalPageLayout({ title, updatedAt, children }: LegalPageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Hero showContent={false} />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
            <p className="mt-2 text-sm text-muted-foreground">Обновлено: {updatedAt}</p>
            <div className="mt-8">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
