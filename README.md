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
    # KTGK - Ứng dụng demo Blog (React + TypeScript + Vite)

    Đây là một ứng dụng nhỏ dùng để trình bày danh sách bài viết (posts), chi tiết bài viết, và form tạo bài. Mục tiêu: giúp thầy/chấm bài dễ hiểu cấu trúc, dữ liệu mẫu và cách chạy project.

    ## Tổng quan
    - Ngôn ngữ: TypeScript
    - Framework: React
    - Build tool: Vite
    - Mục đích: Demo chức năng CRUD cơ bản cho bài viết (hiển thị danh sách, xem chi tiết, tạo bài mới) dùng dữ liệu mẫu lưu tạm trong file.

    ## Cấu trúc chính của project
    - `index.html` - entry HTML
    - `src/main.tsx` - điểm khởi chạy React
    - `src/App.tsx` - component gốc
    - `src/routes.tsx` - định nghĩa route (nếu có)
    - `src/types.ts` - định nghĩa các kiểu dữ liệu (interface `Post`)
    - `src/data.ts` - dữ liệu mẫu (mảng `SAMPLE_POSTS`) — nơi chứa ~20 bài viết mẫu
    - `src/components/` - các component UI:
      - `Navbar.tsx` - thanh điều hướng
      - `PostList.tsx` - danh sách bài viết
      - `PostCard.tsx` - thẻ bài viết (ở danh sách)
      - `PostDetail.tsx` - trang chi tiết bài viết
      - `PostForm.tsx` - form để thêm bài viết mới
    - `src/utils/storage.ts` - helper lưu/đọc localStorage (nếu dùng lưu tạm)
    - `public/` - tài nguyên tĩnh

    ## Dữ liệu mẫu
    File `src/data.ts` chứa hằng `SAMPLE_POSTS: Post[]` với khoảng 20 bài viết mẫu. Mỗi bài bao gồm:
    - `id` (string)
    - `title` (string)
    - `author` (string)
    - `thumbnail` (string) - link ảnh (có dùng `picsum.photos/seed/...` để đảm bảo luôn có ảnh)
    - `content` (string)
    - `category` (string)
    - `createdAt` (ISO string)

    Thầy có thể chỉnh trực tiếp `src/data.ts` để thêm/bớt bài hoặc thay ảnh.

    ## Cách chạy (máy của thầy chạy macOS / zsh)
    1. Cài Node (phiên bản LTS, ví dụ Node 18+). Nếu chưa có, cài bằng Homebrew hoặc nvm.
    2. Mở terminal trong thư mục project (`ktgk`) và cài dependencies:

    ```bash
    npm install
    ```

    3. Chạy development server:

    ```bash
    npm run dev
    ```

    4. Mở trình duyệt tới địa chỉ hiển thị trong terminal (mặc định `http://localhost:5173`).

    5. Để build bản production:

    ```bash
    npm run build
    ```

    và để preview bản build:

    ```bash
    npm run preview
    ```

    ## Gợi ý kiểm tra/đánh giá nhanh
    - Mở `src/data.ts` để kiểm tra dữ liệu mẫu (title, author, category, createdAt)
    - Kiểm tra `PostList` hiển thị đủ 20 bài
    - Mở từng `PostDetail` để kiểm nội dung dài và hình ảnh
    - Thử thêm bài mới qua `PostForm` (nếu chức năng lưu vào localStorage đã được bật trong `utils/storage.ts`)

    ## Lưu ý kỹ thuật
    - Ảnh thumbnail dùng `https://picsum.photos/seed/<seed>/400/250` để tránh lỗi CORS/404. Nếu muốn dùng ảnh cụ thể, thay link trong `src/data.ts`.
    - Dữ liệu hiện tại là tĩnh (file `data.ts`). Nếu cần, có thể kết nối nhanh tới fake API (JSON Server) hoặc chuyển sang backend thật.

    ## Nếu thầy muốn thay đổi
    - Muốn có API giả lập: cài `json-server` và export `SAMPLE_POSTS` thành `db.json` rồi chạy `json-server --watch db.json --port 3001`.
    - Muốn xuất file CSV: tôi có thể thêm script nhỏ xuất `SAMPLE_POSTS` sang CSV.

    ---
    Nếu thầy cần, tôi sẽ:
    - Gửi file `db.json` chứa dữ liệu mẫu để chạy `json-server`.
    - Hoặc chỉnh giao diện/tiếng Việt cho từng component.

    Cần chỉnh gì tiếp theo cứ nói em làm luôn.
