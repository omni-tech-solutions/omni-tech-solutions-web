#!/usr/bin/env python3
"""
Generates every icon and logo size from the one official logo
(public/assets/logo_dark.png — the coral mark used in the header).

    python3 scripts/brand/generate-icons.py

Outputs (all in public/):
    favicon.ico (16/32/48), favicon-16x16.png, favicon-32x32.png
    apple-touch-icon.png      180×180, white background (iOS turns transparency black)
    android-chrome-192/512    transparent, for the web manifest
    maskable-512x512.png      white background with safe-zone padding (Android adaptive icons)
    mstile-150x150.png        Windows tiles
    assets/brand/logo-512.png structured-data logo for search engines
    assets/brand/logo-96.png  header/footer logo (shown at 48 px, 2× for sharp screens)
"""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
PUBLIC = ROOT / 'public'
BRAND = PUBLIC / 'assets' / 'brand'
WHITE = (255, 255, 255, 255)

source = Image.open(PUBLIC / 'assets' / 'logo_dark.png').convert('RGBA')
source = source.crop(source.getbbox())  # trim transparent margins so every size is centred


def fit(size: int, padding: float = 0.0, background=None) -> Image.Image:
    """The logo centred on a square canvas, with `padding` as a fraction of the side."""
    canvas = Image.new('RGBA', (size, size), background or (0, 0, 0, 0))
    inner = round(size * (1 - 2 * padding))
    logo = source.copy()
    logo.thumbnail((inner, inner), Image.LANCZOS)
    canvas.alpha_composite(logo, ((size - logo.width) // 2, (size - logo.height) // 2))
    return canvas


def save(image: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    image.save(path, optimize=True)
    print(f'{path.relative_to(ROOT)}  {image.width}×{image.height}  {path.stat().st_size // 1024} KB')


save(fit(16), PUBLIC / 'favicon-16x16.png')
save(fit(32), PUBLIC / 'favicon-32x32.png')

ico = fit(48)
ico.save(PUBLIC / 'favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])
print(f'public/favicon.ico  16/32/48  {(PUBLIC / "favicon.ico").stat().st_size // 1024} KB')

save(fit(180, padding=0.12, background=WHITE).convert('RGB'), PUBLIC / 'apple-touch-icon.png')
save(fit(192, padding=0.04), PUBLIC / 'android-chrome-192x192.png')
save(fit(512, padding=0.04), PUBLIC / 'android-chrome-512x512.png')
save(fit(512, padding=0.18, background=WHITE).convert('RGB'), PUBLIC / 'maskable-512x512.png')
save(fit(150, padding=0.15), PUBLIC / 'mstile-150x150.png')
save(fit(512, padding=0.08), BRAND / 'logo-512.png')
save(fit(96), BRAND / 'logo-96.png')
