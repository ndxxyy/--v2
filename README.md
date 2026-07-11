# 小钟岐医 V2

“青瓷编目”方向的现代中医视觉档案站。当前完成任务 01：技术架构、内容模型、文件所有权、空数据目录与三语言路由骨架。

## 本地运行

要求 Node.js 24 LTS 与 npm 11。

```bash
npm install
npm run dev
```

质量检查：

```bash
npm run typecheck
npm run lint
npm run build
```

## 当前边界

- `/zh-CN`、`/zh-Hant`、`/en` 已有独立路由骨架。
- 业务数据保持为空；旧站只作为后续任务的只读事实来源。
- 未开发完整首页、图谱、医案、授权或联系页面。
- 未安装 Impeccable；任务 02 负责设计系统与项目级安装。

继续开发前必须阅读：

- `docs/architecture.md`
- `docs/content-model.md`
- `docs/work-ownership.md`
- `DESIGN.md`
- 对应前置任务的 `docs/handoffs/`

