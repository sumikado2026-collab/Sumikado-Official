# 澄花堂網站編輯指南 / Sumikado Website Editor Guide

## 這個資料夾的用途 / What this folder is

這是澄花堂的主要網站基礎資料夾，內容會用於測試預覽與未來的正式網站。即使沒有程式經驗，也可以用自然語言描述想修改的內容，再依照以下流程進行。

This is the main website base folder for Sumikado, and its contents are used by the staging preview and future production website. You do not need coding experience: describe the desired result in plain language and follow the workflow below.

## 安全編輯流程 / Safe editing cycle

### 1. 先描述一個完整的修改里程碑 / Describe one complete milestone

請說明想要修改什麼，以及哪些內容必須維持不變。例如：

Describe what should change and what must remain unchanged. For example:

- 更新一張產品圖片 / Update a product image
- 修正一段文字 / Correct a sentence
- 調整手機版間距 / Adjust mobile spacing
- 在產品區塊後新增一個完整區塊 / Add a complete section after the product section

將一組可以一起檢查的修改視為一個里程碑。草稿與實驗內容應留在本機，不要直接發布。

Treat a coherent, reviewable group of changes as one milestone. Keep drafts and experiments local instead of publishing them.

### 2. 在本機修改 / Make the change locally

網站修改應放在這個資料夾內。參考素材與草稿應先放在工作區的 `Resources/` 資料夾，確認要使用後，再放入網站素材資料夾。

Website changes belong in this folder. Keep reference materials and drafts in the workspace `Resources/` folder until they are approved for website use.

### 3. 預覽網站 / Preview the website

啟動伺服器前，先確認以下網址是否已經可以開啟：

Before starting a server, check whether this address is already responding:

http://localhost:8080

如果網址可以開啟，請重複使用現有伺服器，不要再啟動另一個執行個體。

If it is responding, reuse the existing server. Do not start another instance.

如果網址無法開啟，請在這個資料夾中執行：

If it is not responding, run this command from this folder:

```bash
python3 -m http.server 8080
```

接著在瀏覽器開啟 `http://localhost:8080`。

Then open `http://localhost:8080` in a browser.

### 4. 檢查修改結果 / Review the milestone

視修改內容，請檢查：

Depending on the change, review:

- 桌面版與手機版版面 / Desktop and mobile layouts
- 繁體中文、日文與英文版本 / Traditional Chinese, Japanese, and English versions
- 圖片與連結 / Images and links
- 按鈕、選單與彈出視窗 / Buttons, menus, and pop-up panels
- 拼字與整體視覺一致性 / Spelling and visual consistency

如果工作仍是草稿或尚未完成，請繼續在本機修改與預覽。

If the work is still a draft or incomplete, continue iterating locally.

### 驗證網站檔案 / Validate website files

在預覽前或準備發布前，請在這個資料夾中執行以下指令，檢查 JavaScript、樣式表匯入與本機素材參照：

Before previewing or preparing a release, run this command from this folder to check JavaScript, stylesheet imports, and local asset references:

```bash
node scripts/validate-site.js
```

### 5. 完成後才考慮發布 / Consider release only when complete

只有在這個修改里程碑已經足夠完整並完成檢查後，才應考慮部署到測試預覽環境。每次修改不代表都要立即部署。

Only consider staging deployment when the milestone is sufficiently complete and reviewed. Every edit does not need to be deployed immediately.

推送到 `main` 前，應先整理修改摘要，並取得明確同意。未經同意，不要將變更推送到 `main`。

Before staging deployment, summarize the final changes and obtain explicit approval. Do not push to `main` without approval.

## 測試預覽與正式部署 / Staging preview and production deployment

`main` 是測試預覽分支，推送到 `main` 會自動部署到目前的 Cloud Run 服務。

`main` is the staging-preview branch. Pushes to `main` automatically deploy to the current Cloud Run service.

測試預覽網站 / Staging preview:

https://sumikado-32747562295.asia-east1.run.app/

正式 Cloud Run 服務仍在規劃中。建立後，正式版本會透過發行分支或標籤部署，而不是透過 `main`。

The production Cloud Run service is still pending. Once created, production releases will deploy from a release branch or tag, not from `main`.

## 部署資訊 / Deployment details

部署檔案必須保留在這個資料夾的根目錄。詳細說明請閱讀 [DEPLOYMENT.md](DEPLOYMENT.md)。

Deployment files must remain at this folder's root. See [DEPLOYMENT.md](DEPLOYMENT.md) for details.

- 儲存庫 / Repository: [sumikado2026-collab/Sumikado-Official](https://github.com/sumikado2026-collab/Sumikado-Official)
- 測試預覽分支 / Staging-preview branch: `main`
- Google Cloud 專案 / Google Cloud project: `official-website-490303`
- 測試 Cloud Run 服務 / Staging Cloud Run service: `official-website`
- 區域 / Region: `asia-east1`
- 測試部署方式 / Staging deployment: automatic on push to `main`
- 正式部署 / Production deployment: pending a new service and release branch/tag configuration

## 網站檔案 / Website files

- `index.html` — 頁面結構與網站內容 / page structure and website content
- `translations.js` — 三種語言的網站文字 / website copy in three languages
- `modals.js` — 食譜、課程與會員彈出視窗 / recipe, lesson, and member modals
- `app.js` — 語言切換與一般頁面互動 / language switching and general page behavior
- `style.css` 與 `css/` — 視覺樣式與分類樣式表 / visual styling and organized stylesheets
- `assets/` — 已核准的網站素材 / approved website assets
- `Dockerfile`、`nginx.conf`、`cloudbuild.yaml` — 部署設定；必須保留在根目錄 / deployment configuration; must remain at the root

請不要將無關的草稿、參考素材或暫存檔放在這個資料夾。

Do not place unrelated drafts, reference materials, or temporary files in this folder.
