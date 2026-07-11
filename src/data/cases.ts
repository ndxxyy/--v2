import type { ClinicalCase } from "@/domain/content";

/**
 * 只允许写入有真实来源、完成匿名化与公开授权审核的医案。
 * 审核证明、患者资料和其他可识别信息不得进入本仓库。
 */
export const clinicalCases: readonly ClinicalCase[] = [];
