"use client";

import { useEffect, useMemo, useState } from "react";

import type { Locale } from "@/i18n/config";

import type { HomeCopy } from "./copy";
import { getSeasonalSnapshot } from "./seasonal";
import styles from "./HomePage.module.css";

interface SeasonalTodayPanelProps {
  readonly copy: HomeCopy["seasonal"];
  readonly initialNow: string;
  readonly locale: Locale;
}

export function SeasonalTodayPanel({ copy, initialNow, locale }: SeasonalTodayPanelProps) {
  const [now, setNow] = useState(() => new Date(initialNow));

  useEffect(() => {
    const refresh = () => setNow(new Date());
    const interval = window.setInterval(refresh, 30_000);

    refresh();
    document.addEventListener("visibilitychange", refresh);

    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, []);

  const snapshot = useMemo(() => getSeasonalSnapshot(now, locale), [locale, now]);

  return (
    <aside aria-label={copy.title} className={styles.seasonalPanel}>
      <div className={styles.seasonalCurrent} data-testid="seasonal-current">
        <div className={styles.seasonalDateLine}>
          <p className={styles.seasonalDate}>{snapshot.solarDate}</p>
          <time className={styles.seasonalClock} dateTime={now.toISOString()}>
            {snapshot.clock}
          </time>
        </div>
        <dl className={styles.seasonalCalendar}>
          <div>
            <dt>{copy.lunarLabel}</dt>
            <dd>{snapshot.lunarDate}</dd>
          </div>
          <div>
            <dt>{copy.hourLabel}</dt>
            <dd>{snapshot.hourBranch}</dd>
          </div>
        </dl>
      </div>
    </aside>
  );
}
