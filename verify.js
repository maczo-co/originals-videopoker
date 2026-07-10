// originals-videopoker — verifier CLI for the "Video Poker" Original.
//
// `node verify.js --selftest` (also `npm test`) reproduces every known-answer vector in
// test-vectors.json PURELY in JS — drawing the uint32 stream from @maczo/originals-verify and running
// ./resolve.js — then checks each against the `expected` block, which was produced by the AUTHORITATIVE
// server-side Python (libs/game_math/videopoker.py). Green = the JS matches the server bit-for-bit.
//
// SPDX-License-Identifier: MIT
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { selftestMain } from "@maczo/originals-verify/selftest.js";
import * as mod from "./resolve.js";

const here = dirname(fileURLToPath(import.meta.url));
const readJson = async (name) => JSON.parse(await readFile(join(here, name), "utf8"));

process.exit(await selftestMain(mod, { readJson }));
