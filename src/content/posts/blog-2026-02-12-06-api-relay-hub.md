---
title: API 中转站实测与选型清单（2026 年 2 月）
published: 2026-02-12
description: 一份面向 AI 开发者的 API 中转站筛选清单，包含监测网站、候选服务与实用选型标准。
tags:
  - API
  - AI
  - 工具
  - 折腾
category: 技术
draft: false
---

最近在整理 AI API 中转服务时，我把常用的监测站点和候选服务做了一份清单，方便后续快速对比可用性、稳定性和价格。

## 监测与评价网站

- [RelayPulse - 实时监测 API 中转服务可用性矩阵](https://relaypulse.top/)
- [LinuxDo 商家评价平台](https://rate.linux.do/)
- [LINUX DO - 模型中转状态检测](https://check.linux.do/)

这些站点适合做第一轮筛选：先看整体可用性，再看社区反馈和近期故障情况。

## 候选中转服务

- [DMXAPI - 聚合主流大模型 API](https://dmxapi.com/)
- [推理时代](https://aihubmix.com/)
- [n1n.ai - 企业级 LLM API 聚合平台](https://n1n.ai/zh/)
- [FoxCode 讨论帖（Linux.do）](https://linux.do/t/topic/859649)
- [NEW CLI - AI 编程新时代](https://foxcode.rjj.cc/)
- [OAIPro API](https://api.oaipro.com/)
- [Right Code - 企业级 AI Agent 中转平台](https://right.codes/)

## 当前在用

- [Yun API](https://api.zyai.online/)
- [Right Code](https://right.codes/)

## 我现在的筛选标准

如果你也在做 API 中转选型，我建议按下面四个维度打分：

1. **稳定性**：最近 7 天可用性和高峰时段延迟。
2. **模型覆盖**：是否支持你实际使用的主力模型与版本。
3. **计费透明度**：输入/输出、图像调用、缓存计费是否清晰。
4. **运维友好度**：文档完整性、密钥管理、错误码可读性、工单响应速度。

这份清单会持续更新，后续我会补充一版更偏量化的对比表（可用性、价格、延迟）。
