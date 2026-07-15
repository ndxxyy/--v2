import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "小钟岐医｜中医视觉档案",
    short_name: "小钟岐医",
    description: "中医可视化图谱、临证笔记与本草档案的多语言编目网站。",
    start_url: "/zh-CN",
    display: "standalone",
    background_color: "#f7f5ef",
    theme_color: "#173943",
    icons: [
      {
        src: "/images/brand/xiao-zhong-qiyi-seal.png",
        sizes: "1024x1024",
        type: "image/png",
      },
    ],
  };
}
