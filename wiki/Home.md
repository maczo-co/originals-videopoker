# maczo Originals — Video Poker · Provably Fair

Welcome. This wiki explains how every **Video Poker** result on [maczo.co](https://maczo.co) is provably
fair — and how *you* can verify it yourself, with no need to trust us.

Originals share one **commit-first** design: we lock in a secret **server seed** and publish its hash
*before* you bet, so we cannot change the outcome after seeing your bet. Every result is a pure function
of three values you can inspect, mapped by this game's **published odds**.

## Quick links
- 🧮 **[Verifying Your Bets](Verifying-Your-Bets)** — step-by-step, browser & Node CLI
- 🔐 **[The Algorithm](Algorithm)** — the HMAC-SHA256 → uint32 engine + Video Poker's resolve step
- ❓ **[FAQ](FAQ)** — common questions

## The three inputs

| Value | Who controls it | When you see it |
| --- | --- | --- |
| **Server seed** | maczo (secret) | its **SHA-256 hash** is shown *before* you bet; the raw seed is revealed when you **Rotate** |
| **Client seed** | **you** (editable) | always |
| **Nonce** | server counter, +1 per bet | shown for each bet |

**Your bet inputs (params).** This game takes: `holds` — pass them as the `params` JSON, keys exactly as your bet history shows them.

## Try the verifier now
- **Live (offline in your browser):** https://verify.maczo.co/originals/?game=videopoker
- **Source / Node CLI:** https://github.com/maczo-co/originals-videopoker
- **Published odds:** https://verify.maczo.co/originals/paytables/videopoker.json
- **Shared engine:** https://github.com/maczo-co/originals-verify

Every **Verify ↗** link in your bet history opens the verifier pre-filled with that bet's data and
computes the result instantly.
