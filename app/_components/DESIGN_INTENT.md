# Tokyo Hunters — Design Intent

> Tài liệu này là **hiến pháp thị giác** của project. Khi có tranh cãi về thiết kế, đây là nơi tham chiếu.
> Mọi thay đổi cần có sự đồng ý của Design Lead.

---

## 1. Mood — 3 tính từ

**Raw · Tactical · Neo-Tokyo**

- **Raw** — sketchy, hand-drawn, không polish, không gradient mượt. Cảm giác "field manual của lính chiến".
- **Tactical** — mono font, label viết hoa, số liệu, ticker. Cảm giác HUD game thật.
- **Neo-Tokyo** — kanji decorative, accent đỏ rực, paper texture. Cảm giác văn hóa Nhật được công nghệ hóa.

## 2. KHÔNG muốn giống

- ❌ **Cyberpunk neon-glow** (Cyberpunk 2077, Ghostrunner) — đã chọn paper-noir, không neon.
- ❌ **Anime kawaii / mascot** (Genshin, Honkai) — hướng nghiêm túc, không cute.
- ❌ **Corporate clean** (Riot Valorant landing) — giữ texture & "lỗi" cố ý.

## 3. Ba nguyên tắc bất di bất dịch

1. **Accent đỏ `#ff2a3d` chỉ dùng cho:** CTA chính, danger/live status, kanji highlight, 1 chi tiết duy nhất mỗi section. **KHÔNG** dùng làm background lớn.
2. **Mỗi section "lớn" phải có 1 kanji decoration** (mờ ở background hoặc rõ ở section header). Đây là DNA thị giác.
3. **Typography luôn pair: hand (Caveat) cho cảm xúc + mono (JetBrains) cho thông tin.** Không bao giờ dùng 1 font duy nhất cho cả title và body.
   - Hand: hero headline, hunter name, stat number, section title, logo wordmark
   - Mono: button, tag, nav, label/caption, hunter sig, status

## 4. "Lỗi cố ý" — wabi-sabi rules

Đây là **phong cách**, không phải bug. Junior không được "sửa" những thứ này:

| Element | Lỗi cố ý | Giữ vì |
|---|---|---|
| `.frame` shadow | `6px 8px 0` lệch, không blur | Cảm giác "tờ giấy xếp chồng" |
| `.img-ph` placeholder | Vẽ bằng 2 đường chéo gạch X | Cảm giác "field manual" |
| `.th-break` divider | Đường dashed `repeating-linear-gradient` | Cảm giác "perforation line" sổ tay |
| Border `1.5px solid` | Hơi dày bất thường (vs 1px chuẩn) | Cảm giác "ink trên giấy", không phải "border CSS" |
| Caveat font headline | Mỗi chữ nghiêng/lệch khác nhau | Cảm giác "khẩu hiệu viết tay trên tường" |
| `►` `▶` `≡` glyph | Dùng ASCII thay vì SVG icon | Cảm giác "terminal/HUD low-tech" |
| `text-transform: uppercase` + `letter-spacing: 0.18em` | Khó đọc hơn lowercase | Cảm giác "military stencil" |

**Quy tắc nhận diện "lỗi cố ý" thật vs lỗi vô tình:**
- "Lỗi cố ý" → lặp đi lặp lại có hệ thống → là phong cách
- Lỗi vô tình → xuất hiện 1 lần → cần sửa

## 5. Design tokens (source of truth)

Code-side: tất cả định nghĩa ở [globals.css](globals.css) trong `:root`.

| Token | Value | Use case |
|---|---|---|
| `--accent` | `#ff2a3d` | CTA chính, danger, kanji highlight |
| `--ink` | `#111418` | Text trên paper, border |
| `--paper` | `#f4f1ea` | Background paper sections, text trên dark |
| `--bg-dark` | `#0a0d12` | Background canvas chính |
| `--bg-dark-2` | `#0f1318` | Background section alternate |
| `--border-dark` | `#2a2f36` | Border trên dark bg |
| `--font-hand` | Caveat | Headline & emotion |
| `--font-mono` | JetBrains Mono | Info, action, label |
| `--font-body` | Inter | Paragraph dài |
| `--font-jp` | Noto Sans JP | Kanji decoration |

## 6. Quy trình review

- **Junior đề xuất component mới** → senior review trên `/design-system` route trước khi merge
- **Junior sửa component có sẵn** → kiểm tra mục 4 (lỗi cố ý) trước khi approve
- **Mỗi sprint** — senior review `/design-system` route, mark "deprecated" component không dùng nữa

---

_Last updated: 2026-05-12_
