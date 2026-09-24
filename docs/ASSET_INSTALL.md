# Asset installation

All site imagery lives under `public/assets/elsim/` and is declared in
`lib/data/media.ts`. Nothing in the app hardcodes an image path — components
read the registry, so swapping a file is a one-line change.

## Layout

```
public/assets/elsim/
├── logo.png                    master logo as supplied (white ground)
├── logo-mark.png               derived: background knocked out
├── logo-inverse.png            derived: navy lifted to white, for dark surfaces
├── photography/
│   ├── engineer-panel-inspection.png
│   ├── solar-team-review.png
│   ├── technician-panel-work.png
│   └── site-engineer-laptop.png
├── infrastructure/
│   ├── electrical-pole.png
│   └── power-transmission.png
└── leadership/
    └── our-team.png
```

## Replacing a photograph

1. Drop the new file over the existing filename.
2. Update `width` and `height` for that entry in `lib/data/media.ts` to the new
   file's real pixel dimensions.
3. Update `alt` if the content of the shot changed.

Step 2 matters. The registry dimensions drive layout reservation and stop the
browser from upscaling a small source into a blur.

## Why images are contained, not cropped

The supplied photography is small and inconsistently proportioned — from
135×518 to 463×168. Per the standing decision, images are never cropped: they
are rendered with `object-contain` inside a fixed-ratio frame, with a blurred
copy of the same image filling the letterbox behind them. Nobody gets cut out
of a shot to make a grid line up.

If higher-resolution originals become available, replacing the files is all
that is needed — the containment still applies and simply has more detail to
work with.

## Regenerating the derived brand assets

`logo-mark.png`, `logo-inverse.png`, the favicon, the PWA icons and the Open
Graph card are all derived from `logo.png`. After replacing the master logo:

```bash
npm run assets          # or: python3 scripts/generate_brand_assets.py
```

Requires Python with Pillow (`pip install pillow`). The script never touches the
photography.

## Outstanding

- The four originally-supplied photographs (`photography/`) are low
  resolution and letterbox inside their frames as a result. Higher-resolution
  versions would materially improve the hero and the about-page panels that
  use them.
- Everything else — both `infrastructure/` shots and all 24 `work/` photos —
  is full resolution and needs no further attention.
