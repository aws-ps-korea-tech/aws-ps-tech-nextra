#!/usr/bin/env python3
"""Generate vercel.json from public/_redirects (real 301s).

Destinations use UPPERCASE percent-encoding: Vercel emits redirect destinations with lowercase
percent-encoding for non-ASCII paths, but static files are case-sensitive (%EC.. exists, %ec.. is 404).
"""
import json, os, urllib.parse

redirects = {}
for line in open("public/_redirects", encoding="utf8"):
    p = line.split()
    if len(p) != 3 or not p[0].startswith("/books"):
        continue
    src, dst, _ = p
    dst = urllib.parse.quote(urllib.parse.unquote(dst), safe="/%")
    dst = dst if dst.endswith("/") else dst + "/"
    for s in {src.rstrip("/"), src.rstrip("/") + "/"}:
        redirects[s] = {"source": s, "destination": dst, "permanent": True}

cfg = {
    "framework": None,
    "buildCommand": None,
    "outputDirectory": ".",
    "cleanUrls": True,
    "trailingSlash": True,
    "redirects": [redirects[k] for k in sorted(redirects)],
}
# Deploy the built `out/` directory as static files: copy this file into out/ first.
json.dump(cfg, open("vercel.static.json", "w", encoding="utf8"), indent=2, ensure_ascii=False)
print(len(redirects), "redirects written to vercel.static.json")
