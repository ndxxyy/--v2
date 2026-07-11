import type { Locale } from "@/i18n/config";
import { getRouteLabel, type RouteLabelKey } from "@/i18n/route-labels";

interface RouteScaffoldProps {
  readonly locale: Locale;
  readonly route: RouteLabelKey;
}

export function RouteScaffold({ locale, route }: RouteScaffoldProps) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl items-center px-6 py-16">
      <div className="border-l border-current/20 pl-6">
        <p className="mb-3 text-xs tracking-[0.16em] uppercase opacity-60">{locale}</p>
        <h1 className="text-4xl font-medium tracking-tight">{getRouteLabel(locale, route)}</h1>
      </div>
    </main>
  );
}

