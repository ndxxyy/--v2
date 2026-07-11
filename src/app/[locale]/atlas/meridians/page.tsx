import { AtlasCatalogPage, selectAtlasCatalog } from "@/features/atlas";
import { requireLocale } from "@/i18n/server";

export default async function MeridianAtlasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = requireLocale(localeParam);

  return (
    <AtlasCatalogPage
      data={selectAtlasCatalog(locale, "meridians")}
      locale={locale}
    />
  );
}
