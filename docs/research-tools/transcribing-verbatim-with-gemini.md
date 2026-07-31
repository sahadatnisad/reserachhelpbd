# Transcribing Verbatim with Google Gemini (Free) — A Student's Guide

A complete, step-by-step guide for students and qualitative researchers who need to
produce **verbatim transcripts** of interviews and Focus Group Discussions (FGDs) using
the **free version of Google Gemini** — including **English-only**, **Bengali-only**, and
**mixed Bengali–English (code-switched)** audio, with **speaker detection**, standard
**transcription notation**, **translation into English**, and one-click export to a
**ready-made Google Doc**.

> **Who this is for:** Students conducting qualitative research (theses, dissertations,
> term papers) who record interviews or FGDs and need accurate written transcripts
> without paying for transcription software.

---

## Table of Contents

1. [What you can do with free Gemini](#1-what-you-can-do-with-free-gemini)
2. [Which tool to use — the 10-minute rule](#2-which-tool-to-use--the-10-minute-rule)
3. [Language support: how many languages?](#3-language-support-how-many-languages)
4. [Before you start: preparing your audio](#4-before-you-start-preparing-your-audio)
5. [Transcription notation conventions](#5-transcription-notation-conventions)
6. [The prompts (copy-and-paste ready)](#6-the-prompts-copy-and-paste-ready)
   - [English only](#61-english-only)
   - [Bengali only](#62-bengali-only)
   - [Mixed Bengali–English (code-switched)](#63-mixed-bengalienglish-code-switched)
   - [FGD (multiple speakers)](#64-fgd-focus-group-discussion--multiple-speakers)
   - [Speaker detection with notation](#65-speaker-detection-with-notation)
   - [Translating the transcript into English](#66-translating-the-transcript-into-english)
7. [Step-by-step on a PC](#7-step-by-step-on-a-pc-desktopbrowser)
   - [Route A — Gemini app (short audio, ≤10 min)](#route-a--gemini-app-short-audio--10-minutes)
   - [Route B — Google AI Studio (long audio, up to ~9.5 hours)](#route-b--google-ai-studio-long-audio-up-to-95-hours)
8. [Step-by-step on mobile](#8-step-by-step-on-mobile-androidios)
9. [Getting a ready-made document (Docs / Drive / download)](#9-getting-a-ready-made-document-docs--drive--download)
10. [Troubleshooting: common errors and what to do next](#10-troubleshooting-common-errors-and-what-to-do-next)
11. [Accuracy, verification and research ethics](#11-accuracy-verification-and-research-ethics)
12. [Quick-reference cheat sheet](#12-quick-reference-cheat-sheet)

---

## 1. What you can do with free Gemini

Using only the free tier, you can:

- **Transcribe audio to text** (interviews, FGDs, lectures, voice memos).
- Produce a **verbatim** (word-for-word) transcript, including hesitations and fillers.
- **Detect and label speakers** (speaker diarisation).
- Handle **English**, **Bengali**, and **mixed Bengali–English** speech.
- Add **timestamps** and standard **transcription notation**.
- **Translate** the finished transcript into English.
- **Export** the result directly to a **Google Doc saved in Google Drive**, or download it.

There are **two free entry points**, and choosing the right one is the single most
important decision — see the next section.

---

## 2. Which tool to use — the 10-minute rule

| | **Gemini app** (`gemini.google.com`) | **Google AI Studio** (`aistudio.google.com`) |
|---|---|---|
| **Cost** | Free | Free (no card required) |
| **Max audio per request** | **~10 minutes total** (up to 10 files, combined ≤10 min) | **Up to ~9.5 hours** per request |
| **Best for** | Short clips, quick tests | **Full interviews and FGDs** |
| **One-click "Export to Docs"** | ✅ Yes | ❌ No (copy–paste into Docs instead) |
| **Interface** | Simple chat | Slightly more technical, but still point-and-click |

> **The 10-minute rule:** If your recording is **10 minutes or shorter**, use the
> **Gemini app**. If it is **longer** (most interviews and FGDs are 30–90 minutes),
> use **Google AI Studio**, which processes long audio for free. Do not try to force a
> 45-minute interview into the Gemini app — it will refuse or truncate.

Both are free and both use Google's Gemini models. This guide covers both.

---

## 3. Language support: how many languages?

- Google's official documentation states that the **Gemini models can understand and
  generate content in over 100 languages**, and Google markets **40+ languages** for its
  consumer products.
- **Bengali (`bn`)** and **English (`en`)** are both fully supported, alongside Assamese,
  Hindi, Urdu, and most major world languages.
- The Gemini app interface itself is available in English and several major languages
  (including Bengali across South Asia).

**What this means for your transcripts:**

| Situation | Supported? | Notes |
|---|---|---|
| **English only** | ✅ Strong | Highest accuracy. |
| **Bengali only** | ✅ Good | Accuracy is good but lower than English; **always verify** (see §11). |
| **Mixed Bengali–English (code-switching)** | ✅ Good | Gemini can keep each word in the language actually spoken; give it a clear instruction (see §6.3). |
| **FGD (many speakers, overlapping)** | ✅ With care | Diarisation works, but overlapping speech is the hardest case; manual clean-up is often needed. |

> **Tip — language hints:** Telling Gemini the language(s) in the audio ("the speakers
> use both Bengali and English") noticeably improves accuracy on multilingual or
> accented recordings. All prompts in §6 include this hint.

---

## 4. Before you start: preparing your audio

Good input produces good output. Before uploading:

1. **Check the length.** Decide Gemini app vs. AI Studio using the 10-minute rule (§2).
2. **Use a supported format.** MP3 and WAV work everywhere; AI Studio also accepts
   M4A, FLAC, AAC, OGG and more.
3. **Reduce noise where possible.** Record in a quiet room; place the recorder near
   speakers. Background noise is the biggest cause of `[inaudible]` gaps.
4. **Split very long or very noisy audio into parts** if you hit limits or accuracy
   drops (e.g., 30-minute chunks). Transcribe each part, then join the transcripts.
5. **Name files clearly**, e.g. `FGD1_2026-07-31.mp3`, so exported documents are easy
   to identify.
6. **Anonymise if required** by your ethics protocol before uploading (see §11).

---

## 5. Transcription notation conventions

For academic qualitative research, a **consistent notation system** is essential. Below
is a simplified, thesis-friendly convention set (a lighter version of Jefferson-style
notation). Include the relevant lines in your prompt so Gemini applies them.

### Speaker labels

| Context | Recommended labels |
|---|---|
| One-to-one interview | `R:` (Researcher/Interviewer) and `P:` (Participant) |
| FGD | `M:` (Moderator), then `P1:`, `P2:`, `P3:` … for each participant |
| Unknown speaker | `?:` |

### In-text conventions

| Symbol / tag | Meaning |
|---|---|
| `[00:12]` | Timestamp (minutes:seconds) at the start of a turn |
| `[inaudible]` | Speech that cannot be understood |
| `[unclear: word?]` | Best guess at an unclear word |
| `(.)` | Short pause |
| `(2.0)` | Timed pause of 2 seconds |
| `//` | Point where the next speaker's turn overlaps |
| `((laughs))`, `((coughs))` | Non-verbal sounds or actions |
| `-` | Cut-off or self-correction (e.g., "I thou- I thought") |
| `CAPITALS` | Marked emphasis (optional) |
| `°soft°` | Noticeably quiet speech (optional) |

> **Verbatim vs. clean verbatim:** *True verbatim* keeps every "um", "uh", false start
> and repetition. *Clean (intelligent) verbatim* removes fillers for readability.
> Decide which your methodology requires and state it in the prompt.

---

## 6. The prompts (copy-and-paste ready)

Paste the relevant prompt into Gemini **after** attaching your audio file. Adjust speaker
labels and the verbatim style to match your study.

### 6.1 English only

```
You are a professional transcriptionist. Transcribe the attached audio in ENGLISH,
word for word (true verbatim), keeping all fillers (um, uh), false starts and
repetitions.

Requirements:
- Add a timestamp [MM:SS] at the start of each speaker turn.
- Identify and label speakers as R: (interviewer) and P: (participant).
- Mark unclear speech as [inaudible] or [unclear: word?].
- Mark non-verbal sounds as ((laughs)), ((coughs)).
- Do not summarise, paraphrase or correct grammar. Preserve exactly what is said.
Output only the transcript.
```

### 6.2 Bengali only

```
You are a professional transcriptionist. The attached audio is in BENGALI (Bangla).
Transcribe it word for word (verbatim) in BENGALI SCRIPT (বাংলা), exactly as spoken.

Requirements:
- Add a timestamp [MM:SS] at the start of each speaker turn.
- Label speakers as R: (interviewer) and P: (participant).
- Keep fillers, hesitations and repetitions.
- Mark unclear speech as [inaudible] or [unclear: শব্দ?].
- Do NOT translate. Do NOT paraphrase or correct. Preserve the original Bengali exactly.
Output only the transcript in Bengali script.
```

### 6.3 Mixed Bengali–English (code-switched)

```
You are a professional transcriptionist. The speakers in the attached audio use BOTH
BENGALI and ENGLISH, switching between them (code-switching). Transcribe verbatim.

Requirements:
- Transcribe EACH word in the language actually spoken: Bengali words in Bengali
  script (বাংলা), English words in English (Latin) script. Do NOT translate anything.
- Preserve code-switching exactly as it occurs within sentences.
- Add a timestamp [MM:SS] at the start of each speaker turn.
- Label speakers as R: (interviewer) and P: (participant).
- Keep fillers, hesitations and repetitions.
- Mark unclear speech as [inaudible] or [unclear: word?].
Output only the bilingual verbatim transcript.
```

### 6.4 FGD (Focus Group Discussion — multiple speakers)

```
You are a professional transcriptionist. The attached audio is a Focus Group Discussion
with one moderator and several participants. The speakers use [English / Bengali /
both Bengali and English — choose one]. Transcribe verbatim.

Requirements:
- Identify each distinct speaker and label them: M: (moderator), then P1:, P2:, P3:
  and so on. Keep each speaker's label consistent throughout.
- If two people speak at once, mark the overlap with // and transcribe both turns.
- Add a timestamp [MM:SS] at the start of each turn.
- Transcribe each word in the language actually spoken (Bengali in Bengali script,
  English in English). Do NOT translate.
- Keep fillers and interruptions. Mark unclear speech as [inaudible].
- Mark non-verbal group reactions as ((laughter)), ((crosstalk)).
Output only the transcript.
```

> **FGD reality check:** Gemini cannot know participants' real names unless you tell it.
> It will assign generic labels (P1, P2 …). If you can identify voices, add a note such
> as: *"From 05:00 onward, P1 is the female participant, P2 is the male participant on
> the left."* You will still need to verify labels against the audio.

### 6.5 Speaker detection with notation

If a transcript already exists but speakers are not separated, paste the text and use:

```
Take the transcript below and separate it into speaker turns. Assign consistent
speaker labels (R:/P: for an interview, or M:/P1:/P2: for an FGD). Add a timestamp
[MM:SS] to each turn if timing is available. Apply these conventions:
[inaudible], (.) short pause, (2.0) timed pause, // overlap, ((laughs)) non-verbal.
Do not change any wording. Output only the formatted transcript.

TRANSCRIPT:
<paste here>
```

### 6.6 Translating the transcript into English

Do translation as a **separate step, after** you have verified the original verbatim
transcript. This keeps your primary data (the original) intact.

**Option A — English translation only:**

```
Translate the following Bengali (and mixed Bengali–English) transcript into clear,
natural ENGLISH. Keep the speaker labels and timestamps unchanged. Translate meaning
faithfully; do not add or omit content. Where a term has no exact English equivalent,
keep the original word in brackets after the translation.
Output only the English transcript.

TRANSCRIPT:
<paste here>
```

**Option B — side-by-side (original + English), recommended for research:**

```
Produce a two-column table from the transcript below.
- Left column: the ORIGINAL text exactly as given (Bengali/mixed), with speaker label
  and timestamp.
- Right column: a faithful ENGLISH translation of that same turn.
Do not alter the original. Output only the table.

TRANSCRIPT:
<paste here>
```

> **Note on the language of the transcript:** By default, transcribe in the language(s)
> **actually spoken** — this is your authentic primary data. Translate to English only
> as a secondary layer for analysis or for readers who do not read Bengali. Keep both
> versions.

---

## 7. Step-by-step on a PC (desktop/browser)

### Route A — Gemini app (short audio, ≤10 minutes)

1. Open a browser and go to **`gemini.google.com`**. Sign in with your Google account.
2. At the prompt bar, click the **`+`** (add) icon and choose **Upload files**.
3. Select your audio file (MP3, WAV or AAC). Wait for it to finish uploading.
4. Paste the appropriate prompt from **§6**.
5. Press **Enter** and wait for the transcript to generate.
6. Read it, then export it (see **§9**).

### Route B — Google AI Studio (long audio, up to ~9.5 hours)

Use this for full interviews and FGDs — it is free and handles long files.

1. Go to **`aistudio.google.com`** and sign in with your Google account. Accept the
   terms if prompted.
2. Start a new **Chat prompt** (the default screen).
3. (Optional but recommended) In the right-hand panel, select a current **Gemini
   model** (a recent *Flash* model is fast and free; a *Pro* model may be more accurate
   on difficult audio).
4. Click the **`+`** / **insert** icon near the prompt box and choose **Upload File**
   (or drag the audio file in). Wait for processing.
5. Paste the appropriate prompt from **§6**.
6. Click **Run**.
7. When the transcript appears, **copy** it (there is a copy icon on the response) and
   move it into a document (see **§9**).

> **For files near the limit or very long:** split the audio into ~30-minute parts,
> transcribe each in a separate run, and then join the transcripts. This also improves
> timestamp accuracy.

---

## 8. Step-by-step on mobile (Android/iOS)

**Using the Gemini app (short audio, ≤10 minutes):**

1. Install/update the **Google Gemini** app (Android: Play Store; iOS: available via
   the Google app / App Store). Sign in.
2. Tap the **`+`** icon in the prompt bar and choose **Files** (or **Gallery** if the
   audio is saved there).
3. Select your audio file and wait for it to attach.
4. Type or paste the prompt from **§6**. (Tip: keep the prompts saved in a notes app so
   you can paste them quickly on mobile.)
5. Tap **Send** and wait for the transcript.
6. Export it (see **§9**).

**For long interviews/FGDs on mobile:** open **`aistudio.google.com`** in your phone's
**browser** (Chrome/Safari) and follow **Route B** in §7. The mobile browser works the
same way as on a PC; it is simply a smaller screen.

---

## 9. Getting a ready-made document (Docs / Drive / download)

You have three ways to turn the output into a finished, shareable document.

### Method 1 — One-click **Export to Docs** (Gemini app only)

1. Below the transcript response, click/tap **Share & export** (or the **⋮ more** menu).
2. Choose **Export to Docs**.
3. Gemini creates a **new Google Doc saved automatically in your Google Drive** (in the
   Drive root by default). Open it to edit, format or share.

> This works on both **desktop and mobile** and on the **free** tier. It exports **one
> response** at a time, so export each part of a multi-part transcript separately.
> **Tip:** create a folder called `Transcripts` in Drive and move the exported files
> there to stay organised.

### Method 2 — Copy–paste into a new Google Doc (works for AI Studio)

1. Copy the transcript from AI Studio (or the Gemini app).
2. Open **`docs.google.com`** → **Blank document**.
3. Paste (`Ctrl + V` / `Cmd + V`). The document **saves to your Drive automatically**.
4. Rename it (e.g., `FGD1_Transcript_Verbatim`).

### Method 3 — Download as a file

- **From a Google Doc:** *File → Download →* choose **Microsoft Word (.docx)** or
  **PDF (.pdf)**.
- **Direct from the browser:** open the exported Doc, press **`Ctrl + P`** (`Cmd + P`),
  and choose **Save as PDF** (turn off headers/footers for a clean copy).

> **Optional alternative (in Google Docs):** the Google Workspace add-on **"Audio to
> Text AI"** (*Docs → Extensions*) can transcribe audio and insert the result straight
> into a Doc. It is a third-party tool with its own limits, but it can be convenient if
> you prefer to stay inside Google Docs. Native Gemini + AI Studio remains the free,
> first-party route described above.

---

## 10. Troubleshooting: common errors and what to do next

| Problem | Likely cause | What to do next |
|---|---|---|
| **"File too large" / audio rejected in the Gemini app** | Over the ~10-minute app limit | Switch to **Google AI Studio** (Route B), or split the file into shorter clips. |
| **Transcript is cut short / stops early** | Long input truncated | Split the audio into ~30-min parts and transcribe each separately. |
| **Many `[inaudible]` gaps** | Background noise, distant recorder, overlapping speech | Reduce noise, re-record if possible, or process shorter/cleaner segments. Verify gaps manually against the audio. |
| **Wrong language, or Bengali written phonetically in English letters** | Missing language hint | Re-run with an explicit hint: *"This audio is in Bengali; transcribe in Bengali script (বাংলা), not Romanised."* |
| **Speakers muddled or mislabelled** | Difficult diarisation | Use the §6.5 clean-up prompt; add manual notes about who speaks when; correct labels by hand. |
| **Timestamps drift on long files** | Cumulative timing error | Transcribe in shorter chunks; timestamps reset per chunk are usually more accurate. |
| **"You've reached your limit" / rate limit** | Free-tier usage cap | Wait and try again later, space out requests, or continue in **AI Studio**. |
| **Output is a summary, not verbatim** | Prompt not explicit | Re-state: *"Transcribe word for word. Do not summarise, paraphrase or shorten. Output only the transcript."* |
| **"Export to Docs" not visible** | Feature varies by account/Workspace settings | Use **copy–paste into Google Docs** (Method 2) instead. |
| **Response stops mid-transcript** | Length limit reached | Type **"continue"** to resume, then join the parts. |

> **General recovery step:** if a run fails or looks wrong, start a **fresh chat**,
> re-attach the audio, add a clear language hint, and re-run. A clean session often
> resolves odd behaviour.

---

## 11. Accuracy, verification and research ethics

AI transcription is a **first draft**, not a finished dataset. For any thesis or
publication:

- **Always verify against the audio.** Listen while reading the transcript and correct
  errors — especially for **Bengali** and **code-switched** speech, where accuracy is
  lower than for clean English.
- **Keep the original.** Preserve the verbatim transcript in the spoken language as your
  primary data; treat the English translation as a secondary layer.
- **Report your method.** In your methodology, state that you used Gemini (free) for an
  initial transcription and then manually verified and corrected it. This is good
  research practice and supports transparency.
- **Protect participants.** Interview and FGD recordings are sensitive personal data.
  Follow your institution's ethics approval: obtain informed consent, anonymise names
  and identifying details, and be aware that uploaded content is processed on Google's
  servers. Where your ethics protocol prohibits uploading identifiable data to
  third-party services, anonymise the audio/text first or seek approval.

---

## 12. Quick-reference cheat sheet

| Task | Do this |
|---|---|
| **Audio ≤ 10 min** | Gemini app → upload → prompt → **Export to Docs** |
| **Audio > 10 min (interviews/FGDs)** | Google AI Studio → upload → prompt → **Run** → copy → paste into Google Docs |
| **English audio** | Prompt §6.1 |
| **Bengali audio** | Prompt §6.2 (transcribe in Bengali script) |
| **Mixed Bengali–English** | Prompt §6.3 (each word in the spoken language) |
| **FGD** | Prompt §6.4 (M:, P1, P2 …) |
| **Fix speaker labels** | Prompt §6.5 |
| **Translate to English** | Prompt §6.6 (do this last; keep both versions) |
| **Ready-made doc** | Export to Docs (auto-saves to Drive) or paste into `docs.google.com` |
| **Download** | Google Doc → *File → Download → .docx / .pdf* |

---

*This guide covers the free tier of Google Gemini and Google AI Studio. Product features,
limits and interface labels are updated frequently by Google; if a menu item differs
from what is described here, look for the nearest equivalent (for example, an **add /
`+`** icon to attach files, or a **Share & export** menu below each response).*
