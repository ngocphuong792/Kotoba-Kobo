# 語彙工房 — Kotoba Kobo

Website học từ vựng tiếng Nhật (offline trên máy bạn), gắn plan luyện nói BrSE trên Notion.

## Cách mở (khuyến nghị)

**Cách 1 — macOS:** double-click `Mở-Kotoba-Kobo.command`  
(Lần đầu nếu mac chặn: chuột phải → Open)

**Cách 2 — Terminal:**

```bash
cd Kotoba-Kobo
./start.sh
```

Trình duyệt mở: http://localhost:8765

> Có thể mở `index.html` bằng double-click, nhưng một số trình duyệt hạn chế file local; dùng `start.sh` ổn định hơn.

## File trong gói (đủ để chạy)

| File | Vai trò |
|------|---------|
| `index.html` | Giao diện: Chủ đề · Danh sách · Flashcard · Quiz · Kaiwa BrSE |
| `vocab-data.js` | Kho từ (~5800) + phân chủ đề (gồm JLPT N1/N2, Ngữ pháp N2) |
| `examples-data.js` | Câu ví dụ JP+VN / mục (từ vựng & ngữ pháp N2) |
| `kaiwa-plan-data.js` | Map 12 tuần Notion ↔ nhóm từ |
| `start.sh` / `Mở-Kotoba-Kobo.command` | Chạy máy chủ cục bộ |
| `nguon/vocab.json` | Nguồn JSON (không bắt buộc để mở web) |

## Notion

- Hub: https://www.notion.so/3fccc809f7eb8154b712d2c5f8ac068f

Font chữ tải từ Google Fonts khi có mạng; phần còn lại chạy local.

## Copy đi đâu cũng được

Copy cả thư mục `Kotoba-Kobo` sang USB / máy khác — giữ nguyên cấu trúc, không cần cài thêm gì ngoài Python 3 (có sẵn trên macOS).
