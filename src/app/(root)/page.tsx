import { permanentRedirect } from "next/navigation";

import { DEFAULT_LOCALE } from "@/i18n/config";

export default function RootPage(): never {
  permanentRedirect(`/${DEFAULT_LOCALE}`);
}

