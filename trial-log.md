# Trial log — u-0xkianno-one-emoji-one-smile-5470751f

## Competition
- Slug: `u-0xkianno-one-emoji-one-smile-5470751f`
- Title: One Emoji, One Smile
- Sponsor: u-0xkianno (user-created bounty)
- Prize: $5 total, split over top 10 (1st $1.54, 2nd $1.08, 3rd $0.76, 4th $0.53, 5th $0.37, 6th $0.26, 7th $0.18, 8th $0.13, 9th $0.09, 10th $0.06). Free to enter.
- Opens: 2026-11-23T19:31:10Z (24 Nov 03:31 WITA). Deadline: 2026-11-26T19:30:00Z (27 Nov 03:30 WITA).
- Kit limits (competition.yaml + RULES.txt, read from the kit itself): harness program/v1, runtimes node22 / python3.13, sandbox NO network; program writes one text to `/output/entry.txt`; gate = UTF-8, 1–8 characters, not only whitespace; transcripts_required: true; license: osi; repo_created_after_open: true; max 5 submissions/entrant/day; rule Force_Last (last submit before deadline = final entry); min_authored_coverage: 0.
- Judge: z-ai/glm-5.3-flash, pairwise, no ties, margins 1–5, each pair in both orders; 3 Swiss rounds + playoff top 12; dev heats vs 3 anchors + 3 rungs (house texts, sealed, revealed with final kit); blind rounds, next round 2026-11-24T19:30:46Z.
- Kit: ~/workspace/make-fun/u-0xkianno-one-emoji-one-smile-5470751f-kit/ (kit.json bundle_sha256 2cc742de01bea06f878520899b233678a2f4abcfd7a507a6a34c469376a87bd7, matches the bundle_sha256 returned by https://make.fun/api/competitions/u-0xkianno-one-emoji-one-smile-5470751f/kit)
- Wallet (owner.json): FwUebjzYUBF6uybmEkUkiQf9z35bGGQuUE3GrToXFcUq

## Judge criteria (in order, from RULES.txt)
1. Single emoji a stranger reads as warm and friendly, most likely to make someone smile; loses to any emoji that plainly aims to warm a stranger.
2. Warmth at first glance: kind, friendly, or gently funny, no context needed.
3. Universality: any age or background reads it the same way, no irony or in-joke.
4. Chosen rather than default: feels picked for the moment, not the first smiley that comes to mind, while staying instantly readable.
5. Right for a stranger: no intimacy, sarcasm, or flirtation.

## Candidate emoji (code points and bytes verified with Python)
| # | Emoji | Code points | Bytes | Verdict |
|---|---|---|---|---|
| PICK | 😄 U+1F604 smiling face with open mouth and smiling eyes | 1 | 4 | PICK |
| C1 | 😊 U+1F60A smiling face with smiling eyes | 1 | 4 | Warmest canonical face, but the most default pick: it IS the first smiley that comes to mind, so it loses on criterion 4 to any equally warm but less default face, and it is the most likely crowd pick (identical entries share one rate, earliest receipt places first). |
| C2 | 🙂 U+1F642 slightly smiling face | 1 | 4 | The default itself. Polite, low energy, weakest warmth of the faces. Fails criteria 1 and 4. |
| C3 | 😁 U+1F601 beaming face with smiling eyes | 1 | 4 | Big toothy grin. Warm, but the grin can read as cheeky or smug rather than kind, so it is weaker than the pick on criterion 2. |
| C4 | 😃 U+1F603 smiling face with open mouth | 1 | 4 | Same open-mouth joy as the pick but plain open eyes instead of smiling eyes; the smiling eyes are what make the laugh read as genuine. Weaker on criterion 2. |
| C5 | 🤗 U+1F917 smiling face with open hands (hugging face) | 1 | 4 | Warmest gesture, but a hug from a stranger risks reading as too intimate (criterion 5), and some readers see jazz hands or excitement instead of a hug (criterion 3). |
| C6 | 🥰 U+1F970 smiling face with hearts | 1 | 4 | Warm, but the hearts read as affection, which fails criterion 5 from a stranger. |
| C7 | 🌞 U+1F31E sun with face | 1 | 4 | Cheerful, chosen, universal, no intimacy. But its warmth is metaphorical: a laughing face plainly aims to warm a stranger (criterion 1) more directly than a sun does, and a face reads as kind at first glance (criterion 2) better than a weather symbol. |
| C8 | 🌻 U+1F33B sunflower | 1 | 4 | Cheerful and clearly chosen, but no face, so it is pleasant rather than warm in the sense the judge weighs first. Loses to any face that plainly aims to warm a stranger. |
| C9 | ☺️ U+263A U+FE0F smiling face (rosy cheeks) | 2 | 6 | Gentle and warm, but reads as shy or flattered, slightly intimate, and its two-code-point form is needlessly fragile next to a one-code-point pick. |
| C10 | 🫶 U+1FAF6 heart hands | 1 | 4 | A gesture of love and gratitude, but newer, less universal for older readers (criterion 3), and affectionate from a stranger (criterion 5). |

## Pick: 😄 (U+1F604) — why it beats the others, criterion by criterion
- Criterion 1: an open-mouth laugh with smiling eyes is unambiguous joy; it does not hint at warmth, it shows it. It beats every non-face (sun, flower) because a laughing face plainly aims to make a stranger smile.
- Criterion 2: reads as kind and happy with no context. The smiling eyes make it a genuine laugh rather than a posed smile, which is what separates it from 😃 and from the polite 🙂.
- Criterion 3: a laughing smile reads the same at any age and in any background. No irony, no in-joke, no gesture that means different things in different places.
- Criterion 4: the first smiley that comes to mind is 🙂 or 😊. This is a deliberate step up in energy, a real laugh instead of a polite smile, while staying instantly readable at a glance.
- Criterion 5: no hearts, no hug, no wink, no flirtation, no sarcasm. Just happy to see you, which is exactly what a stranger can offer.

## Build
- main.ts written fresh with the file-write tool in this builder session (never copied/moved into place). Node 22, stdlib only, no network, deterministic. Writes ENTRY to `$ENTRY_OUTPUT` or `/output/entry.txt`, no trailing newline, file holds exactly the 4 bytes of 😄.
- Repo: `~/workspace/make-fun/u-0xkianno-one-emoji-one-smile-5470751f/` — main.ts, README.md (3 make.fun badges), LICENSE (MIT), .makefun/owner.json (wallet FwUebjzYUBF6uybmEkUkiQf9z35bGGQuUE3GrToXFcUq). Commit identity rwnliwan <rwnliwan@users.noreply.github.com>.
- NOT submitted by builder. The coordinator runs check/submit. Blind round 1 at 2026-11-24T19:30:46Z (25 Nov 03:30 WITA) — submit before then to move up.

## Preflight (token-free) — PASSED
- Run 1: `ENTRY_OUTPUT=/tmp/emoji-pre1/entry.txt node main.ts` → exit 0.
- Run 2: `ENTRY_OUTPUT=/tmp/emoji-pre2/entry.txt node main.ts` → exit 0.
- Determinism: `cmp` run1 vs run2 → **byte-identical**.
- Output: `"😄"` — **1 character, 4 bytes** (hex f09f9884 = U+1F604), gate valid (1–8 chars, non-whitespace), no trailing newline, UTF-8 round-trip OK.
- sha256 run 1: `250304ed085909837f9b782289173d19b7550d542ab51646e94c0f384384a502`
- sha256 run 2: `250304ed085909837f9b782289173d19b7550d542ab51646e94c0f384384a502`

## Trials
| Round | Version | Size | Result | Change |
|---|---|---|---|---|
| 0 | (pre-build) trial log + facts recorded | — | — | Kit RULES + competition.yaml read; judge criteria recorded; 11 candidates compared |
| 1 | Builder v1 — main.ts, entry: 😄 (U+1F604) | 1 char / 4 bytes, UTF-8, non-whitespace | PASS — local run via ENTRY_OUTPUT twice, byte-identical, sha256 250304ed085909837f9b782289173d19b7550d542ab51646e94c0f384384a502 both; stdlib only, no network | Builder session (this session) |
