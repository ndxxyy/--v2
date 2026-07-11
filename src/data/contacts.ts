import type { ContactChannel } from "@/domain/content";

export const contactChannels: readonly ContactChannel[] = [
  {
    id: "phone-primary",
    kind: "phone",
    audience: ["consultation", "licensing"],
    label: {
      "zh-CN": "就诊联系电话",
      "zh-Hant": "就診聯絡電話",
      en: "Consultation phone",
    },
    value: "13168639915",
    href: "tel:+8613168639915",
    verifiedAt: "2026-07-10",
    publication: { status: "published" },
  },
  {
    id: "email-primary",
    kind: "email",
    audience: ["learning", "licensing"],
    label: {
      "zh-CN": "联系邮箱",
      "zh-Hant": "聯絡電郵",
      en: "Contact email",
    },
    value: "215382805@qq.com",
    href: "mailto:215382805@qq.com",
    verifiedAt: "2026-07-10",
    publication: { status: "published" },
  },
  {
    id: "wechat-qr-primary",
    kind: "wechat",
    audience: ["learning"],
    label: {
      "zh-CN": "微信交流",
      "zh-Hant": "微信交流",
      en: "WeChat exchange",
    },
    qrImage: {
      kind: "preview",
      src: "/images/contact/wechat-qr.jpg",
      width: 662,
      height: 669,
      format: "jpg",
    },
    verifiedAt: "2026-07-10",
    publication: { status: "published" },
  },
  {
    id: "xiaohongshu-primary",
    kind: "xiaohongshu",
    audience: ["learning"],
    label: {
      "zh-CN": "小红书",
      "zh-Hant": "小紅書",
      en: "Xiaohongshu",
    },
    value: "drzhong_77",
    verifiedAt: "2026-07-10",
    publication: { status: "published" },
  },
  {
    id: "douyin-primary",
    kind: "douyin",
    audience: ["learning"],
    label: {
      "zh-CN": "抖音",
      "zh-Hant": "抖音",
      en: "Douyin",
    },
    value: "drzhong_77",
    verifiedAt: "2026-07-10",
    publication: { status: "published" },
  },
];
