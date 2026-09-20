# 部署設定指南 / Deployment Configuration Guide

## 目的 / Purpose

本文件說明網站的測試預覽與獨立正式發布流程，以及部署檔案為何必須保留在 `Sumikado-Official` 的根目錄。

This guide explains the staging preview, the separate production release flow, and why deployment files remain in the root of `Sumikado-Official`.

## 測試預覽流程 / Staging preview flow

推送到 `main` 分支會自動觸發測試預覽部署流程：

A push to the `main` branch automatically triggers this staging-preview deployment flow:

```text
main branch → Cloud Build → Docker image → Cloud Run service: official-website → staging preview
```

測試預覽網址 / Staging preview URL:

https://sumikado-32747562295.asia-east1.run.app/

只有在修改完成並取得明確同意後，才能推送到 `main`。`main` 只更新測試服務，不應直接更新正式服務。

Push to `main` only after the work is complete and explicitly approved. The `main` trigger must update staging only, never production.

## 獨立正式發布流程 / Separate production release flow

```text
main → cloudbuild.yaml → official-website (staging) → review and approve
prod-vMAJOR.MINOR.PATCH tag → manual Cloud Build approval → cloudbuild.production.yaml
  → verify the staged image digest → official-website-prod (candidate URL)
  → HTTP smoke test → send 100% of production-service traffic to the candidate
```

正式流程只提升已在測試服務執行的容器映像，不重新建置程式碼。發行標籤必須指向已完成測試的 `main` commit；`cloudbuild.production.yaml` 會比對該 commit 的映像摘要與測試服務的最新就緒版本，若不一致即停止。測試服務和正式服務使用不同 Cloud Run 服務；正式觸發器只接受 `^prod-v[0-9]+\.[0-9]+\.[0-9]+$` 標籤，且必須人工核准。單純推送 `main` 不應對正式服務產生任何變更。

Production promotes the image digest already running on staging; it does not rebuild source. The release tag must point to the tested `main` commit. The production build rejects a missing image or a digest mismatch with staging's latest ready revision. Staging and production use different Cloud Run services; the production tag trigger requires manual approval. A push to `main` must never update production.

這是**同一 Google Cloud 專案內的服務與發布權限分離**，不是不同專案的完整隔離；若未來需要獨立帳務或專案級 IAM 邊界，應另建正式專案並重新設計跨專案映像提升。

### 首次雲端設定（尚待執行）/ One-time cloud setup (not yet performed)

1. 以具有 `official-website-490303` 管理權限的帳戶登入 Google Cloud；先查明現有 Cloud Build GitHub 連線、測試觸發器，以及 `www.sumikado-official.com` 實際是由 Cloud Run 網域對應或負載平衡器提供。不要直接更動現有網域路由。
2. 在 `asia-east1` 建立正式服務專用執行身分 `official-website-prod-runtime@official-website-490303.iam.gserviceaccount.com`，以及正式觸發器專用部署身分。部署身分需能讀取現有 `gcr.io` 映像、讀取測試服務／版本、部署正式 Cloud Run 服務、使用正式執行身分並寫入 Cloud Logging。權限應限制在必要的資源上。
3. 在相同的 GitHub 儲存庫建立**另一個** Cloud Build 觸發器：事件為 Git tag，規則 `^prod-v[0-9]+\.[0-9]+\.[0-9]+$`，設定檔 `cloudbuild.production.yaml`，啟用「Require approval」，指定上述專用部署身分。依現有 GitHub 連線類型選擇第 1 代或第 2 代儲存庫；不要修改 `main` 的測試觸發器。確認核准者具 Cloud Build Approver 權限。在 GitHub 以標籤 ruleset 限制 `prod-v*` 的建立、更新與刪除，讓正式發布標籤只由授權人員建立且不能任意移動。
4. 首次發行前，以正式服務的 `run.app` 網址確認內容、三語頁面與報告連結；核對測試／正式服務分別使用不同名稱與部署紀錄。只有在這些檢查通過後，才安排正式網域切換。切換前記錄現有 DNS／網域對應及回復方式，避免切換失敗時使官網中斷。

An authenticated Google Cloud administrator must perform these steps. Merely adding this repository configuration does **not** create the service, trigger, IAM grants, or domain mapping.

### 每次發行 / Each release

1. 完成網站修改與 `node scripts/validate-site.js`；在本機和測試服務檢查受影響的桌面、手機與語言版本。
2. 記錄已審核的 `main` commit、測試網址與確認結果。確認沒有另一筆 `main` 部署在審核後覆蓋測試服務。
3. 經正式發布同意後，對該 commit 建立新的 `prod-vMAJOR.MINOR.PATCH` Git tag 並推送。正式觸發器會進入待核准狀態；核對 commit、測試摘要及映像後，再由核准者批准。
4. 正式建置會將映像以 digest 部署到 `official-website-prod` 的零流量標記版本，檢查首頁與科學檢驗頁 HTTP 200，再將正式**服務**流量切至新版本。之後仍須檢查正式服務網址及正式網域；首次發行的網域切換是獨立步驟，不會由此設定檔自動完成。
5. 保留前一個正式版本名稱。若內容或健康檢查異常，將 `official-website-prod` 流量切回前一個版本；若問題出在首次網域切換，依事前記錄的路由設定切回原服務。不要用測試服務覆蓋正式服務。

```bash
# Replace PREVIOUS_REVISION with the recorded, previously healthy production revision.
gcloud run services update-traffic official-website-prod \
  --region=asia-east1 --to-revisions=PREVIOUS_REVISION=100
```

References: [Cloud Build GitHub trigger](https://docs.cloud.google.com/sdk/gcloud/reference/builds/triggers/create/github), [approval gate](https://docs.cloud.google.com/build/docs/securing-builds/gate-builds-on-approval), [Cloud Run tagged revisions and rollback](https://docs.cloud.google.com/run/docs/rollouts-rollbacks-traffic-migration), [custom domains](https://docs.cloud.google.com/run/docs/mapping-custom-domains), [GitHub tag rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets).

## 根目錄部署檔案 / Root deployment files

| 檔案 / File | 用途 / Purpose | 維護規則 / Maintenance rule |
| --- | --- | --- |
| `Dockerfile` | 建立網站的 Nginx 容器；目前供測試預覽使用，未來也供正式網站使用 / Builds the Nginx container used by staging now and production later | 必須保留在根目錄 / Keep at the root |
| `nginx.conf` | 設定 Nginx 如何提供網站檔案 / Configures how Nginx serves the website | 必須保留在根目錄 / Keep at the root |
| `cloudbuild.yaml` | 設定 `main` 的 Cloud Build 建置與測試預覽部署 / Defines the `main` Cloud Build and staging-preview deployment | 必須保留在根目錄 / Keep at the root |
| `cloudbuild.production.yaml` | 以核准的發行標籤將測試映像提升至獨立正式服務 / Promotes an approved staging image to the separate production service | 只綁定正式標籤觸發器；不得綁定 `main` / Tag trigger only, never `main` |
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
- 正式網站 / Production website: `https://www.sumikado-official.com/` is public, but its routing to the new separate production service is pending verification and cutover
- 儲存庫 / Repository: [sumikado2026-collab/Sumikado-Official](https://github.com/sumikado2026-collab/Sumikado-Official)
- 測試預覽分支 / Staging-preview branch: `main`
- Google Cloud 專案 / Google Cloud project: `official-website-490303`
- 測試 Cloud Run 服務 / Staging Cloud Run service: `official-website`
- 正式 Cloud Run 服務 / Production Cloud Run service: `official-website-prod` (planned; not created by this file)
- 區域 / Region: `asia-east1`
