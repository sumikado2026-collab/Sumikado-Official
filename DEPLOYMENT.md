# 官網部署 / Website Deployment

## 目前流程 / Current flow

澄花堂官網沿用現有的 Cloud Build 與 Cloud Run 設定。經確認後推送 `main`，就會自動建置網站並部署到 `official-website` 服務；不需要另外建立正式服務或發布觸發器。

The website uses its existing Cloud Build and Cloud Run setup. An approved push to `main` builds and deploys the site to the `official-website` service.

```text
main → cloudbuild.yaml → Docker image → Cloud Run: official-website → 官網
```

- 官網 / Website: https://www.sumikado-official.com/
- Cloud Run 網址 / Cloud Run URL: https://sumikado-32747562295.asia-east1.run.app/
- 儲存庫 / Repository: [sumikado2026-collab/Sumikado-Official](https://github.com/sumikado2026-collab/Sumikado-Official)
- Google Cloud 專案 / Project: `official-website-490303`
- 區域 / Region: `asia-east1`

## 發布前檢查 / Before publishing

1. 在 `http://localhost:8080` 預覽受影響頁面，包括所需的桌面、手機與語言版本。 / Preview affected pages locally, including relevant desktop, mobile, and language views.
2. 執行 `node scripts/validate-site.js`，並檢查文字、連結、圖片及版面。 / Run site validation and check copy, links, images, and layout.
3. 確認提交內容只包含本次已完成的修改，且已取得明確部署同意。 / Include only completed, approved changes.
4. 推送 `main` 後，核對遠端版本，並確認官網實際顯示更新內容。 / After pushing `main`, verify the remote revision and the live website.

網站編輯與部署授權規則以 [AGENTS.md](AGENTS.md) 為準。 / Follow [AGENTS.md](AGENTS.md) for editing and deployment authorization.

## 根目錄部署檔案 / Deployment files at repository root

| 檔案 / File | 用途 / Purpose |
| --- | --- |
| `Dockerfile` | 建立網站 Nginx 容器 / Builds the Nginx website container |
| `nginx.conf` | 設定網站伺服器 / Configures the web server |
| `cloudbuild.yaml` | 建置映像並部署至既有 Cloud Run 服務 / Builds and deploys to the existing Cloud Run service |
| `.dockerignore` | 排除不需進入容器的檔案 / Excludes files not needed in the container |

請勿在未確認 Cloud Build 觸發設定前移動或重新命名這些檔案。 / Do not move or rename these files without checking the Cloud Build trigger.
