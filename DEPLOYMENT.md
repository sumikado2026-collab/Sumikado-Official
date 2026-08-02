# 部署設定指南 / Deployment Configuration Guide

## 目的 / Purpose

本文件說明網站的測試預覽與未來正式部署檔案，以及它們為何必須保留在 `Sumikado-Official` 的根目錄。

This guide explains the website staging-preview and future production deployment files and why they must remain in the root of `Sumikado-Official`.

## 測試預覽流程 / Staging preview flow

推送到 `main` 分支會自動觸發測試預覽部署流程：

A push to the `main` branch automatically triggers this staging-preview deployment flow:

```text
main branch → Cloud Build → Docker image → Cloud Run service: official-website → staging preview
```

測試預覽網址 / Staging preview URL:

https://sumikado-32747562295.asia-east1.run.app/

只有在修改完成並取得明確同意後，才能推送到 `main`。正式 Cloud Run 服務仍在規劃中；建立後會透過發行分支或標籤部署正式版本。

Push to `main` only after the work is complete and explicitly approved. The production Cloud Run service is still pending; production releases will deploy from a release branch or tag once it is configured.

## 根目錄部署檔案 / Root deployment files

| 檔案 / File | 用途 / Purpose | 維護規則 / Maintenance rule |
| --- | --- | --- |
| `Dockerfile` | 建立網站的 Nginx 容器；目前供測試預覽使用，未來也供正式網站使用 / Builds the Nginx container used by staging now and production later | 必須保留在根目錄 / Keep at the root |
| `nginx.conf` | 設定 Nginx 如何提供網站檔案 / Configures how Nginx serves the website | 必須保留在根目錄 / Keep at the root |
| `cloudbuild.yaml` | 設定 `main` 的 Cloud Build 建置與測試預覽部署 / Defines the `main` Cloud Build and staging-preview deployment | 必須保留在根目錄 / Keep at the root |
| `.dockerignore` | 排除不應進入容器的檔案 / Excludes files from the container build context | 與 Dockerfile 一起維護 / Maintain with Dockerfile |

請不要將這些檔案移到子資料夾、重新命名，或在不確認 Cloud Build 觸發設定的情況下修改其路徑。

Do not move or rename these files, or change their paths, without confirming the Cloud Build trigger configuration.

## 部署前檢查 / Before deployment

在推送到 `main` 前：

Before pushing to `main`:

1. 在本機預覽網站 / Preview the website locally.
2. 執行 `node scripts/validate-site.js` / Run `node scripts/validate-site.js`.
3. 確認修改內容已完成並已核准 / Confirm the milestone is complete and approved.
4. 確認不包含草稿、暫存檔或無關檔案 / Confirm no drafts, temporary files, or unrelated files are included.

## 環境資訊 / Environment details

- 測試預覽 / Staging preview: https://sumikado-32747562295.asia-east1.run.app/
- 正式網站 / Production website: pending production-service setup
- 儲存庫 / Repository: [sumikado2026-collab/Sumikado-Official](https://github.com/sumikado2026-collab/Sumikado-Official)
- 測試預覽分支 / Staging-preview branch: `main`
- Google Cloud 專案 / Google Cloud project: `official-website-490303`
- 測試 Cloud Run 服務 / Staging Cloud Run service: `official-website`
- 正式 Cloud Run 服務 / Production Cloud Run service: pending setup
- 區域 / Region: `asia-east1`
