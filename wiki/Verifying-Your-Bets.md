# Verifying Your Bets

You can verify any **Video Poker** bet in three ways. All of them run **the same math the server used** —
nothing is trusted, everything is recomputed.

## What you need

From your Video Poker bet history, each bet shows:
- **Server Seed Hash** (commitment) — shown before the bet
- **Client Seed** — yours
- **Nonce** — the bet number on that seed
- **Server Seed** — appears only after you **Rotate** (which reveals it)
- **Your bet inputs** (params) for that bet

The **odds** are published in
[`paytable.json`](https://github.com/maczo-co/originals-videopoker/blob/main/paytable.json); the verifier
fetches them for you.

## Method 1 — One-click (easiest)

After the seed is revealed, click **Verify ↗** next to any bet. It opens the verifier with everything
filled in and computes instantly:

```
https://verify.maczo.co/originals/?game=videopoker&server=<revealed>&commit=<hash>&client=<you>&nonce=<n>&params=<url-encoded JSON>
```

## Method 2 — Browser, manual

1. Open https://verify.maczo.co/originals/?game=videopoker (works fully offline; view source).
2. Paste **Server Seed**, **Commitment**, **Client Seed**, **Nonce**, and your **bet params** (JSON).
3. Press **Verify**. You'll see ✅/❌ the commitment check, the reproduced **outcome**, the multiplier and payout.

**Your bet inputs (params).** This game takes: `holds` — pass them as the `params` JSON, keys exactly as your bet history shows them.

## Method 3 — Node.js CLI

```bash
git clone https://github.com/maczo-co/originals-videopoker
cd originals-videopoker
npm install          # pulls the shared engine @maczo/originals-verify
npm test             # reproduces the bundled known-answer vectors (JS ⇄ the server's Python)
```

## What "verified" proves

- **Commitment match** → maczo committed to this exact seed *before* you played; it could not have been
  chosen after seeing your bet.
- **Reproduced outcome** → the published result is exactly what the algorithm produces from the seeds and
  the published odds — not a number the operator picked.
