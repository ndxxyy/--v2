"use client";

import { useRef, useState } from "react";

import {
  Button,
  ButtonLink,
  FilterButton,
  ImageFrame,
  ModalDialog,
  Notice,
  TextLink,
} from "@/components/ui";

export function DesignSystemShowcase() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const dialogTriggerRef = useRef<HTMLButtonElement>(null);

  return (
    <section aria-labelledby="design-system-showcase-title" className="catalog-container py-section">
      <div className="border-b border-rule pb-8">
        <h1 className="text-heading-1" id="design-system-showcase-title">
          青瓷编目 · 组件状态
        </h1>
        <p className="reading-measure mt-4 text-body-sm text-muted">
          本展示只用于验证设计系统状态，不代表公开业务内容。
        </p>
      </div>

      <div className="grid gap-12 py-10 lg:grid-cols-2 lg:gap-16">
        <section aria-labelledby="button-states-title">
          <h2 className="text-heading-3" id="button-states-title">
            按钮与链接
          </h2>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Button>主按钮</Button>
            <Button variant="secondary">次按钮</Button>
            <Button variant="quiet">安静动作</Button>
            <Button disabled>不可用</Button>
            <Button isLoading loadingLabel="处理中">
              提交
            </Button>
            <ButtonLink href="#design-system-showcase-title" variant="secondary">
              链接按钮
            </ButtonLink>
          </div>
          <p className="mt-6 text-body-sm">
            <TextLink href="#filter-states-title">正文链接状态</TextLink>
          </p>
        </section>

        <section aria-labelledby="filter-states-title" id="filter-states-title">
          <h2 className="text-heading-3">筛选状态</h2>
          <div className="mt-5 flex flex-wrap gap-3" role="group" aria-label="筛选状态示例">
            <FilterButton count={12}>默认</FilterButton>
            <FilterButton count={4} selected>
              已选择
            </FilterButton>
            <FilterButton disabled>不可用</FilterButton>
          </div>
        </section>

        <section aria-labelledby="notice-states-title" className="space-y-4">
          <h2 className="text-heading-3" id="notice-states-title">
            提示状态
          </h2>
          <Notice title="信息提示">用于解释当前页面或内容状态。</Notice>
          <Notice title="医学边界" tone="medical-boundary">
            用明确文字说明内容用途，不依赖颜色传达边界。
          </Notice>
          <Notice title="授权说明" tone="rights">
            仅展示已经核实的权利信息与可用动作。
          </Notice>
        </section>

        <section aria-labelledby="image-states-title">
          <h2 className="text-heading-3" id="image-states-title">
            图像加载占位
          </h2>
          <div className="mt-5 grid grid-cols-2 gap-4">
            <ImageFrame loading ratio="portrait" />
            <ImageFrame loading ratio="landscape" />
          </div>
        </section>

        <section aria-labelledby="dialog-state-title" className="lg:col-span-2">
          <h2 className="text-heading-3" id="dialog-state-title">
            弹窗状态
          </h2>
          <Button
            className="mt-5"
            onClick={() => setDialogOpen(true)}
            ref={dialogTriggerRef}
            variant="secondary"
          >
            打开弹窗示例
          </Button>
          <ModalDialog
            description="验证标题、正文、操作、ESC、遮罩和焦点返回。"
            footer={<Button onClick={() => setDialogOpen(false)}>确认</Button>}
            onOpenChange={setDialogOpen}
            open={dialogOpen}
            returnFocusRef={dialogTriggerRef}
            title="弹窗状态示例"
          >
            <p className="reading-measure text-body-sm">
              弹窗只承载必须中断当前流程的信息；普通说明应留在页面内。
            </p>
          </ModalDialog>
        </section>
      </div>
    </section>
  );
}
