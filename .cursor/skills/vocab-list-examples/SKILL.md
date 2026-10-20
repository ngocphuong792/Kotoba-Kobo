---
name: vocab-list-examples
description: >-
  Creates Japanese vocabulary or grammar lists for Kotoba-Kobo with required
  classic example sentences and Vietnamese meanings. Use when adding a vocab
  list, từ vựng, ngữ pháp, theme/chủ đề mới, n2/n1 items, flashcard data,
  examples-data.js, grammar families (もの/わけ/ばかり/限り/ところ), or importing
  words into this project.
---

# Kotoba-Kobo — Vocab & grammar list examples

## Hard rules

### Từ vựng
Mỗi lần tạo list từ vựng thì luôn tạo **3 ví dụ** kinh điển và thông dụng và có nghĩa tiếng Việt.

### Ngữ pháp
Không giới hạn số câu ví dụ — miễn sao **bao hàm được các nghĩa thông dụng** của dạng đó. Mỗi nghĩa thông dụng nên có ít nhất 1 câu ví dụ minh họa (JP + nghĩa tiếng Việt đầy đủ).

## Required output per item

### Từ vựng (`t` ≠ grammar themes)
1. **Đúng 3 câu ví dụ** — kinh điển, thông dụng, tự nhiên (công việc / đời sống)
2. Mỗi câu: `ja` + `vi` (tiếng Việt đầy đủ, không cắt cụt)
3. Fields: `w`, `r` (cách đọc), `m` (nghĩa; có thể kèm âm Hán Việt viết hoa nếu user yêu cầu)

### Ngữ pháp / kính ngữ (`n2_grammar`, `keigo`, hoặc theme ngữ pháp)
1. **Số ví dụ không cố định** — đủ để phủ các nghĩa thông dụng
2. Mỗi câu: `ja` + `vi` đầy đủ
3. Fields:
   - `w`: pattern (vd. `～たばかりだ`, `お／ご～になる`)
   - `r`: cách kết hợp / phân loại (尊敬語・謙譲語・丁寧語, có quy tắc / bất quy tắc)
   - `m`: ý nghĩa tiếng Việt (có thể ghi level `[N4–N3]` nếu hữu ích)
4. Theme **Kính ngữ** (`keigo`) / **Khiêm nhường ngữ** (`kenjougo`): mỗi dạng / động từ bất quy tắc / cụm thông dụng = **1 item** riêng.

Do not ship a vocab/grammar list without examples wired into the app data.

## Grammar families — mỗi dạng = 1 item

Khi user yêu cầu nhóm ngữ pháp (vd. もの / わけ / ばかり / 限り / ところ từ N5–N2):

- **Tách mỗi dạng thành 1 item riêng** (không gộp nhiều cấu trúc khác nhau vào một mục).
- Ví dụ tốt: `～るところだ`, `～ているところだ`, `～たところだ`, `～ところだった` — 4 item.
- Trong **một** item, nếu dạng có nhiều nghĩa thông dụng: viết rõ trong `m` và thêm ví dụ cho từng nghĩa (không giới hạn số câu).
- Bỏ qua nếu pattern đã tồn tại đúng; vẫn thêm nếu là dạng khác rõ ràng (vd. đã có `～ものだ` thì vẫn thêm `～たものだ`).
- Theme mặc định: `n2_grammar` (Ngữ pháp N2), trừ khi user chỉ định khác.

## Data wiring (this repo)

| Field | Item (`vocab-data.js`) | Examples (`examples-data.js`) |
|-------|------------------------|-------------------------------|
| id | `v####` | key = same item `id` |
| word / pattern | `w` | — |
| reading / structure | `r` | — |
| meaning | `m` (Vietnamese) | — |
| theme | `t` + update `themes[].count` | — |
| examples | — | vocab: **3** `{ja,vi}`; grammar: **N** `{ja,vi}` đủ nghĩa |

- Update `window.VOCAB_DATA` and `window.EXAMPLES_DATA`.
- Flashcard back shows first 2 examples; detail uses `getExamples(item)` (hiển thị đủ ví dụ đã lưu).

## Example quality checklist

- [ ] Từ vựng: đúng **3** cặp JP+VI
- [ ] Ngữ pháp: đủ ví dụ cho các nghĩa thông dụng (không cắt nghĩa)
- [ ] Vietnamese complete (no truncated drafts)
- [ ] No meta-study junk (`今日はXについて勉強しました`, collocation fragments…)
- [ ] Sentences fit workplace or daily life
- [ ] Target word/grammar appears naturally in each Japanese sentence

## Workflow

1. Parse/normalize source; for grammar families, expand to one item per form.
2. Write meaning + structure + examples (vocab = 3; grammar = đủ nghĩa thông dụng).
3. Merge into `vocab-data.js` + `examples-data.js` (optional `nguon/*.json`).
4. Verify: vocab `examples.length === 3`; grammar mỗi nghĩa thông dụng có ví dụ; mọi `ja`/`vi` non-empty.
5. Remind user to hard-refresh; theme list shows all items when a theme is selected.
