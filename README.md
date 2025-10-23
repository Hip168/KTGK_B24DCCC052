# KTGK — Bài giữa kỳ: Ứng dụng demo Blog (React + TypeScript + Vite)

Phiên bản nộp: giữa kỳ. README này trình bày mục đích, cấu trúc, cách chạy và hướng dẫn nhanh để thầy chấm.
## Tóm tắt ngắn
- Ứng dụng frontend nhỏ demo quản lý bài viết: danh sách bài, trang chi tiết, form thêm bài.
- Công nghệ: React + TypeScript, build bằng Vite.
- Dữ liệu mẫu: tĩnh trong `src/data.ts` (mảng `SAMPLE_POSTS`, khoảng 20 bài).
## 1) Cấu trúc quan trọng
- `index.html` — entry
- `src/main.tsx` — mount React
- `src/App.tsx` — component gốc
- `src/routes.tsx` — định nghĩa routes (nếu có)
- `src/types.ts` — định nghĩa kiểu `Post` và `Category`
- `src/data.ts` — dữ liệu mẫu (`SAMPLE_POSTS: Post[]`)
- `src/components/` — các component: `Navbar`, `PostList`, `PostCard`, `PostDetail`, `PostForm`
- `src/utils/storage.ts` — helper lưu/đọc `localStorage` (nếu dùng)
- `public/` — tài nguyên tĩnh (ảnh mặc định có thể để ở đây)
## 2) Kiểu dữ liệu (`src/types.ts`)
```ts
export type Category = 'Công nghệ' | 'Du lịch' | 'Ẩm thực' | 'Đời sống' | 'Khác'

export interface Post {
  id: string
  title: string
  author: string
  thumbnail: string
  content: string
  category: Category
  createdAt: string // ISO timestamp
}
```
## 3) Dữ liệu mẫu (`src/data.ts`)
- `SAMPLE_POSTS: Post[]` chứa các bài với đầy đủ trường trên.
- `thumbnail` sử dụng `https://picsum.photos/seed/<seed>/400/250` để có ảnh demo ổn định theo seed.
- `createdAt` lưu dưới dạng ISO string (ví dụ: `2025-10-20T08:30:00.000Z`).
## 4) Cách chạy (máy macOS / zsh)
```bash
# 1. Cài dependencies
npm install

# 2. Chạy dev server
npm run dev

# Mở trình duyệt tại URL in ra bởi vite (mặc định http://localhost:5173)

# 3. Build production (nếu cần)
npm run build
npm run preview
```
## 5) Hướng dẫn nhanh cho thầy khi chấm
- Kiểm tra `src/data.ts` có ~20 bài.
- Mở trang chính: có danh sách bài (thumbnail, title, author, category, createdAt).
- Click vào 1 bài: hiển thị trang chi tiết với nội dung đầy đủ.
- Kiểm tra `PostForm` (nếu bật): thử thêm bài, đảm bảo bài xuất hiện (lưu tạm bằng localStorage hoặc state).
- Mã nguồn: kiểm tra `types.ts`, `data.ts`, và các component trong `src/components/`.

## 6) Tips kỹ thuật / mở rộng
- Ảnh demo: `picsum.photos` phù hợp cho môi trường học — đổi sang CDN/Server khi production.
- Nếu chuyển sang dùng fake API:
  - Tạo `db.json` với:
    ```json
    { "posts": [ /* dán mảng SAMPLE_POSTS */ ] }
    ```
  - Cài `json-server` và chạy: `json-server --watch db.json --port 3001`.

- Đề xuất: dùng UUID cho `id` khi chuyển sang backend thật.
- Fallback image: thêm ảnh mặc định trong `public/` và bắt `onError` để gán ảnh này nếu thumbnail lỗi.

## 7) Muốn em bổ sung gì nữa?
- Em có thể:
  - Tạo `db.json` và commit để thầy chạy `json-server` nhanh
  - Thêm npm script để xuất CSV/JSON từ `SAMPLE_POSTS`
  - Thêm ảnh fallback và cập nhật components

Xin thầy cho biết nếu cần thêm file `db.json` hoặc script hỗ trợ — em sẽ tạo ngay.
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
