---
name: vocab-list-examples
description: >-
  Creates Japanese vocabulary or grammar lists for Kotoba-Kobo with required
  classic example sentences and Vietnamese meanings. Use when adding a vocab
  list, từ vựng, ngữ pháp, theme/chủ đề mới, n2/n1 items, flashcard data,
  examples-data.js, or importing words into this project.
---

# Kotoba-Kobo — Vocab list examples

## Hard rule (verbatim)

Mỗi lần tạo list từ vựng thì luôn tạo 2 ví dụ kinh điển và thông dụng và có nghĩa tiếng việt.

Apply the same rule when creating grammar lists for this project.

## Required output per item

For **every** new word/grammar point:

1. **2 example sentences** — classic, common, natural (work or daily life)
2. Each example must include:
   - `ja`: Japanese sentence using the target naturally
   - `vi`: full Vietnamese meaning/translation (never empty, never truncated)

Do not ship a vocab/grammar list without examples wired into the app data.

## Data wiring (this repo)

| Field | Vocab item (`vocab-data.js`) | Examples (`examples-data.js`) |
|-------|------------------------------|-------------------------------|
| id | `v####` | key = same item `id` |
| word | `w` | — |
| reading / structure | `r` | — |
| meaning | `m` (Vietnamese) | — |
| theme | `t` + theme entry in `themes[]` | — |
| examples | — | `[{ja, vi}, {ja, vi}]` (exactly 2 minimum) |

- Update `window.VOCAB_DATA` and `window.EXAMPLES_DATA`.
- Theme appears in UI from `DATA.themes` — add `{ id, name, count }`.
- Flashcard back and detail view read examples via `getExamples(item)` → prefer `EXAMPLES_DATA[id]`.

## Example quality checklist

- [ ] Exactly **at least 2** JP+VI pairs per item
- [ ] Vietnamese is complete (fix cut-off drafts like “chắc chắn…”)
- [ ] No meta-study junk: `今日はXについて勉強しました`, `実際の場面でX機会が増えました`, collocation fragments as “examples”
- [ ] No “Kết hợp từ thường gặp” as example content
- [ ] Sentences fit workplace or daily life; vary patterns across the list
- [ ] Target word/grammar appears naturally in each Japanese sentence

## Workflow

1. Parse/normalize source list (word, reading, meaning).
2. For each item, write 2 classic examples with Vietnamese meaning.
3. Merge into `vocab-data.js` + `examples-data.js` (and optional `nguon/*.json` source).
4. Verify: every new id has `examples.length >= 2` and both `ja`/`vi` non-empty.
