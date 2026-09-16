#!/usr/bin/env python3
"""
ELSIM Engineering — brand asset derivation.

Takes the supplied master logo (public/assets/elsim/logo.png) and derives every
other brand file the site needs:

  logo-mark.png      transparent background, for placement on any theme
  logo-inverse.png   light-ink variant, for dark surfaces (footer, black theme)
  favicon.ico        16/32/48/64
  icon-192.png       PWA icon
  icon-512.png       PWA icon
  apple-touch-icon.png
  og-image.png       1200x630 social card

Run after replacing the master logo:

    python3 scripts/generate_brand_assets.py

Requires Pillow. The master logo and the site photography under
public/assets/elsim/ are supplied by ELSIM and are not generated here.
"""

from __future__ import annotations

import os
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC = os.path.join(ROOT, "public")
ASSETS = os.path.join(PUBLIC, "assets", "elsim")
MASTER = os.path.join(ASSETS, "logo.png")

# Sampled from the master logo — these are the authoritative brand colours.
NAVY = (15, 49, 86)          # #0F3156
GOLD = (250, 182, 23)        # #FAB617
PAPER = (255, 255, 255)
INK_MUTED = (148, 163, 184)

# Lightness above which a pixel counts as logo background (near-white).
WHITE_CUTOFF = 238


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = (
        [
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
            "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
        ]
        if bold
        else [
            "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
            "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
        ]
    )
    for path in candidates:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def load_master() -> Image.Image:
    if not os.path.exists(MASTER):
        raise SystemExit(f"Master logo not found at {MASTER}")
    return Image.open(MASTER).convert("RGBA")


def cut_background(img: Image.Image) -> Image.Image:
    """Knock the near-white studio background out to transparency.

    Uses a soft ramp rather than a hard key so the anti-aliased edges of the
    gear teeth and lettering stay smooth instead of going jagged.
    """
    img = img.convert("RGBA")
    pixels = img.load()
    w, h = img.size

    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            lightness = (r + g + b) / 3
            if lightness >= 252:
                alpha = 0
            elif lightness >= WHITE_CUTOFF:
                alpha = int(255 * (252 - lightness) / (252 - WHITE_CUTOFF))
            else:
                alpha = a
            pixels[x, y] = (r, g, b, alpha)

    return img


def invert_ink(img: Image.Image) -> Image.Image:
    """Lift the navy ink to a light tone so the mark reads on dark surfaces.

    The gold is left untouched — it already has enough contrast against a dark
    ground, and changing it would break brand recognition.
    """
    img = img.convert("RGBA")
    pixels = img.load()
    w, h = img.size

    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if a == 0:
                continue
            is_navy = b > r and b >= g and (r + g + b) / 3 < 150
            if is_navy:
                # Pure white rather than a grey: the mark has to hold its own
                # against a saturated navy ground without looking ghosted.
                pixels[x, y] = (255, 255, 255, a)

    return img


def trim(img: Image.Image, padding_ratio: float = 0.04) -> Image.Image:
    """Crop to the visible mark, then add even breathing room back."""
    bbox = img.getbbox()
    if not bbox:
        return img
    cropped = img.crop(bbox)
    pad = int(max(cropped.size) * padding_ratio)
    out = Image.new("RGBA", (cropped.width + pad * 2, cropped.height + pad * 2), (0, 0, 0, 0))
    out.paste(cropped, (pad, pad))
    return out


def square(img: Image.Image, size: int, background: tuple | None = None) -> Image.Image:
    """Fit the mark into a square canvas without distorting it."""
    fitted = img.copy()
    fitted.thumbnail((size, size), Image.LANCZOS)
    canvas = Image.new("RGBA", (size, size), background or (0, 0, 0, 0))
    canvas.paste(fitted, ((size - fitted.width) // 2, (size - fitted.height) // 2), fitted)
    return canvas


def og_card(mark: Image.Image, path: str) -> None:
    """1200x630 social card in the ELSIM navy, with the gold as the accent."""
    w, h = 1200, 630
    img = Image.new("RGB", (w, h), NAVY)
    d = ImageDraw.Draw(img)

    for x in range(0, w, 48):
        d.line([(x, 0), (x, h)], fill=(22, 60, 100))
    for y in range(0, h, 48):
        d.line([(0, y), (w, y)], fill=(22, 60, 100))

    d.rectangle([0, 0, 12, h], fill=GOLD)

    # The mark sits on a white plate rather than being recoloured. Keeping the
    # original navy-and-gold artwork intact is more faithful than tinting it,
    # and the plate gives the gear teeth a clean edge against the navy ground.
    plate_size = 260
    plate = Image.new("RGBA", (plate_size, plate_size), (0, 0, 0, 0))
    ImageDraw.Draw(plate).rounded_rectangle(
        [0, 0, plate_size - 1, plate_size - 1], radius=24, fill=PAPER + (255,)
    )
    logo = square(mark, plate_size - 36)
    plate.paste(logo, (18, 18), logo)
    img.paste(plate, (w - 320, 60), plate)

    d.text((72, 104), "ELSIM ENGINEERING FIRM", font=font(22, True), fill=GOLD)
    d.text((72, 166), "Electrical, energy and", font=font(54, True), fill=PAPER)
    d.text((72, 232), "technical engineering", font=font(54, True), fill=PAPER)
    d.text((72, 298), "across West Africa", font=font(54, True), fill=PAPER)

    d.line([(72, 396), (400, 396)], fill=GOLD, width=3)
    d.text((72, 424), "Ghana · Togo · Côte d'Ivoire · Burkina Faso · Senegal · Niger",
           font=font(20), fill=INK_MUTED)
    d.text((72, 466), "Oyarifa Teiman, Inside 3T Plaza, Accra",
           font=font(20), fill=INK_MUTED)

    img.save(path, optimize=True)


def main() -> None:
    master = load_master()

    mark = trim(cut_background(master))
    mark.save(os.path.join(ASSETS, "logo-mark.png"), optimize=True)

    inverse = invert_ink(mark)
    inverse.save(os.path.join(ASSETS, "logo-inverse.png"), optimize=True)

    square(mark, 192, background=PAPER + (255,)).convert("RGB").save(
        os.path.join(PUBLIC, "icon-192.png"), optimize=True)
    square(mark, 512, background=PAPER + (255,)).convert("RGB").save(
        os.path.join(PUBLIC, "icon-512.png"), optimize=True)
    square(mark, 180, background=PAPER + (255,)).convert("RGB").save(
        os.path.join(PUBLIC, "apple-touch-icon.png"), optimize=True)

    square(mark, 64, background=PAPER + (255,)).save(
        os.path.join(PUBLIC, "favicon.ico"),
        sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])

    og_card(mark, os.path.join(PUBLIC, "og-image.png"))

    print("Derived brand assets from", MASTER)


if __name__ == "__main__":
    main()
