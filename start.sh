#!/bin/zsh
cd "$(dirname "$0")"
PORT=8765
echo ""
echo "  語彙工房 — Kotoba Kobo"
echo "  http://localhost:$PORT"
echo "  Nhấn Ctrl+C để dừng."
echo ""
# open browser after short delay
(sleep 1 && open "http://localhost:$PORT") &
python3 -m http.server "$PORT"
