# evdatabot.github.io

Static site hosting for **EVDataBot** — OBD-II telemetry app for Ford F-150 Lightning owners.

This repository serves the public-facing pages that App Store Connect references during App Review:

- **Privacy Policy** — [`/privacy/`](https://mmjennings2.github.io/evdatabot.github.io/privacy/)
- **ASC submission paste-blocks** — [`/submission/`](https://mmjennings2.github.io/evdatabot.github.io/submission/) (subtitle, description, keywords, App Review Notes, etc., each with a Copy button)

## Stability notice

The URL above is referenced by App Store Connect's "Privacy Policy URL" field for EVDataBot. **Do NOT rename this repository, change the GitHub Pages configuration, or delete the `privacy/` directory** without coordinating with the iOS app submission — Apple fetches this URL anonymously during App Review and a 404 mid-review is an automatic rejection.

## Source of truth

The canonical copy of the privacy policy lives in the iOS app repo at `EVDataBot/Resources/privacy-policy.html` (bundled as the in-app offline copy). The version here should always match. If the two drift, ship a v1.0.X update that re-syncs them.
