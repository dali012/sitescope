import HeroDashboardPreview from '@/components/landing/hero-dashboard-preview';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 pt-24 pb-16 text-center">
        <Badge
          variant="secondary"
          className="mb-6 gap-2 px-3 py-1 font-medium text-stone-600 dark:text-stone-400"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
          v1.0 is now live
        </Badge>
        <h1 className="animate-slide-up-fade mb-6 text-5xl font-bold tracking-tight text-stone-900 md:text-7xl dark:text-stone-100">
          Intelligent uptime monitoring for modern engineering.
        </h1>
        <p className="animate-slide-up-fade mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-stone-500 delay-100 dark:text-stone-400">
          SiteScope uses AI to detect anomalies, analyze root causes, and draft
          incident reports automatically. Stop firefighting, start fixing.
        </p>
        <div className="animate-slide-up-fade flex justify-center gap-4 delay-200">
          <Button size="lg" className="shadow-lg hover:scale-105">
            Start Monitoring Free
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-white shadow-sm hover:scale-105 dark:bg-zinc-900"
          >
            View Live Demo
          </Button>
        </div>
      </div>

      <div className="animate-slide-up-fade px-4 pb-16 delay-300">
        <HeroDashboardPreview />
      </div>
    </>
  );
};

export default Hero;
