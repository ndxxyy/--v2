import type { Locale } from "@/i18n/config";

const TIME_ZONE = "Asia/Shanghai";

const STEMS = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"] as const;
const BRANCHES = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"] as const;

type Stem = (typeof STEMS)[number];
type Branch = (typeof BRANCHES)[number];

interface LocalizedValue {
  readonly "zh-CN": string;
  readonly "zh-Hant": string;
  readonly en: string;
}

const STEM_NAMES: Record<Stem, LocalizedValue> = {
  甲: { "zh-CN": "甲", "zh-Hant": "甲", en: "Jia" },
  乙: { "zh-CN": "乙", "zh-Hant": "乙", en: "Yi" },
  丙: { "zh-CN": "丙", "zh-Hant": "丙", en: "Bing" },
  丁: { "zh-CN": "丁", "zh-Hant": "丁", en: "Ding" },
  戊: { "zh-CN": "戊", "zh-Hant": "戊", en: "Wu" },
  己: { "zh-CN": "己", "zh-Hant": "己", en: "Ji" },
  庚: { "zh-CN": "庚", "zh-Hant": "庚", en: "Geng" },
  辛: { "zh-CN": "辛", "zh-Hant": "辛", en: "Xin" },
  壬: { "zh-CN": "壬", "zh-Hant": "壬", en: "Ren" },
  癸: { "zh-CN": "癸", "zh-Hant": "癸", en: "Gui" },
};

const BRANCH_NAMES: Record<Branch, LocalizedValue> = {
  子: { "zh-CN": "子", "zh-Hant": "子", en: "Zi" },
  丑: { "zh-CN": "丑", "zh-Hant": "丑", en: "Chou" },
  寅: { "zh-CN": "寅", "zh-Hant": "寅", en: "Yin" },
  卯: { "zh-CN": "卯", "zh-Hant": "卯", en: "Mao" },
  辰: { "zh-CN": "辰", "zh-Hant": "辰", en: "Chen" },
  巳: { "zh-CN": "巳", "zh-Hant": "巳", en: "Si" },
  午: { "zh-CN": "午", "zh-Hant": "午", en: "Wu" },
  未: { "zh-CN": "未", "zh-Hant": "未", en: "Wei" },
  申: { "zh-CN": "申", "zh-Hant": "申", en: "Shen" },
  酉: { "zh-CN": "酉", "zh-Hant": "酉", en: "You" },
  戌: { "zh-CN": "戌", "zh-Hant": "戌", en: "Xu" },
  亥: { "zh-CN": "亥", "zh-Hant": "亥", en: "Hai" },
};

const MOVEMENTS: Record<Stem, LocalizedValue> = {
  甲: { "zh-CN": "土运太过", "zh-Hant": "土運太過", en: "Earth movement · excess" },
  乙: { "zh-CN": "金运不及", "zh-Hant": "金運不及", en: "Metal movement · insufficiency" },
  丙: { "zh-CN": "水运太过", "zh-Hant": "水運太過", en: "Water movement · excess" },
  丁: { "zh-CN": "木运不及", "zh-Hant": "木運不及", en: "Wood movement · insufficiency" },
  戊: { "zh-CN": "火运太过", "zh-Hant": "火運太過", en: "Fire movement · excess" },
  己: { "zh-CN": "土运不及", "zh-Hant": "土運不及", en: "Earth movement · insufficiency" },
  庚: { "zh-CN": "金运太过", "zh-Hant": "金運太過", en: "Metal movement · excess" },
  辛: { "zh-CN": "水运不及", "zh-Hant": "水運不及", en: "Water movement · insufficiency" },
  壬: { "zh-CN": "木运太过", "zh-Hant": "木運太過", en: "Wood movement · excess" },
  癸: { "zh-CN": "火运不及", "zh-Hant": "火運不及", en: "Fire movement · insufficiency" },
};

const QI_NAMES = {
  jueyinWind: { "zh-CN": "厥阴风木", "zh-Hant": "厥陰風木", en: "Jueyin wind-wood" },
  shaoyinFire: { "zh-CN": "少阴君火", "zh-Hant": "少陰君火", en: "Shaoyin sovereign fire" },
  taiyinEarth: { "zh-CN": "太阴湿土", "zh-Hant": "太陰濕土", en: "Taiyin damp-earth" },
  shaoyangFire: { "zh-CN": "少阳相火", "zh-Hant": "少陽相火", en: "Shaoyang ministerial fire" },
  yangmingMetal: { "zh-CN": "阳明燥金", "zh-Hant": "陽明燥金", en: "Yangming dry-metal" },
  taiyangWater: { "zh-CN": "太阳寒水", "zh-Hant": "太陽寒水", en: "Taiyang cold-water" },
} as const satisfies Record<string, LocalizedValue>;

const ANNUAL_QI: Record<Branch, { readonly governing: LocalizedValue; readonly atSource: LocalizedValue }> = {
  子: { governing: QI_NAMES.shaoyinFire, atSource: QI_NAMES.yangmingMetal },
  丑: { governing: QI_NAMES.taiyinEarth, atSource: QI_NAMES.taiyangWater },
  寅: { governing: QI_NAMES.shaoyangFire, atSource: QI_NAMES.jueyinWind },
  卯: { governing: QI_NAMES.yangmingMetal, atSource: QI_NAMES.shaoyinFire },
  辰: { governing: QI_NAMES.taiyangWater, atSource: QI_NAMES.taiyinEarth },
  巳: { governing: QI_NAMES.jueyinWind, atSource: QI_NAMES.shaoyangFire },
  午: { governing: QI_NAMES.shaoyinFire, atSource: QI_NAMES.yangmingMetal },
  未: { governing: QI_NAMES.taiyinEarth, atSource: QI_NAMES.taiyangWater },
  申: { governing: QI_NAMES.shaoyangFire, atSource: QI_NAMES.jueyinWind },
  酉: { governing: QI_NAMES.yangmingMetal, atSource: QI_NAMES.shaoyinFire },
  戌: { governing: QI_NAMES.taiyangWater, atSource: QI_NAMES.taiyinEarth },
  亥: { governing: QI_NAMES.jueyinWind, atSource: QI_NAMES.shaoyangFire },
};

export interface SeasonalSnapshot {
  readonly solarDate: string;
  readonly clock: string;
  readonly lunarDate: string;
  readonly hourBranch: string;
  readonly cyclicalYear: string;
  readonly movement: string;
  readonly governingQi: string;
  readonly sourceQi: string;
}

export function getShanghaiDailyRotationIndex(now: Date, itemCount: number): number {
  const normalizedItemCount = Math.max(0, Math.floor(itemCount));

  if (normalizedItemCount === 0) {
    return 0;
  }

  const parts = new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "numeric",
    timeZone: TIME_ZONE,
    year: "numeric",
  }).formatToParts(now);
  const year = Number(parts.find((part) => part.type === "year")?.value);
  const month = Number(parts.find((part) => part.type === "month")?.value);
  const day = Number(parts.find((part) => part.type === "day")?.value);

  if (![year, month, day].every(Number.isFinite)) {
    return 0;
  }

  const shanghaiDayNumber = Math.floor(Date.UTC(year, month - 1, day) / 86_400_000);

  return ((shanghaiDayNumber % normalizedItemCount) + normalizedItemCount) % normalizedItemCount;
}

function localize(locale: Locale, value: LocalizedValue): string {
  return value[locale];
}

function chineseDayName(day: number): string {
  const names = [
    "初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十",
    "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十",
    "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十",
  ] as const;

  return names[day - 1] ?? String(day);
}

function getChineseCalendarParts(now: Date): {
  readonly stem: Stem;
  readonly branch: Branch;
  readonly month: string;
  readonly day: number;
} {
  const parts = new Intl.DateTimeFormat("zh-CN-u-ca-chinese", {
    day: "numeric",
    month: "long",
    timeZone: TIME_ZONE,
    year: "numeric",
  }).formatToParts(now);
  const yearName = parts.find((part) => (part.type as string) === "yearName")?.value ?? "";
  const stem = STEMS.find((candidate) => yearName.startsWith(candidate)) ?? "甲";
  const branch = BRANCHES.find((candidate) => yearName.endsWith(candidate)) ?? "子";
  const month = parts.find((part) => part.type === "month")?.value ?? "";
  const day = Number(parts.find((part) => part.type === "day")?.value ?? "1");

  return { stem, branch, month, day };
}

function getShanghaiHour(now: Date): number {
  const hourPart = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    hourCycle: "h23",
    timeZone: TIME_ZONE,
  })
    .formatToParts(now)
    .find((part) => part.type === "hour")?.value;

  return Number(hourPart ?? "0");
}

export function getSeasonalSnapshot(now: Date, locale: Locale): SeasonalSnapshot {
  const calendar = getChineseCalendarParts(now);
  const shanghaiHour = getShanghaiHour(now);
  const hourBranch = BRANCHES[Math.floor(((shanghaiHour + 1) % 24) / 2)] ?? "子";
  const solarDate = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    timeZone: TIME_ZONE,
    weekday: "long",
  }).format(now);
  const clock = new Intl.DateTimeFormat(locale, {
    hour: "2-digit",
    hour12: false,
    hourCycle: "h23",
    minute: "2-digit",
    timeZone: TIME_ZONE,
  }).format(now);
  const cyclicalYear = `${localize(locale, STEM_NAMES[calendar.stem])}${
    locale === "en" ? "-" : ""
  }${localize(locale, BRANCH_NAMES[calendar.branch])}`;
  const lunarDate =
    locale === "en"
      ? new Intl.DateTimeFormat("en-u-ca-chinese", {
          day: "numeric",
          month: "long",
          timeZone: TIME_ZONE,
        }).format(now)
      : `${calendar.month}${chineseDayName(calendar.day)}`;
  const annualQi = ANNUAL_QI[calendar.branch];
  const localizedHourBranch = localize(locale, BRANCH_NAMES[hourBranch]);

  return {
    solarDate,
    clock,
    lunarDate,
    hourBranch: locale === "en" ? `${localizedHourBranch} hour` : `${localizedHourBranch}时`,
    cyclicalYear,
    movement: localize(locale, MOVEMENTS[calendar.stem]),
    governingQi: localize(locale, annualQi.governing),
    sourceQi: localize(locale, annualQi.atSource),
  };
}
