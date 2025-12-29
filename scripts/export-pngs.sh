#!/usr/bin/env bash
set -euo pipefail

# Requires ImageMagick: https://imagemagick.org/
# Ubuntu: sudo apt-get install imagemagick
# macOS: brew install imagemagick

SVG_SOURCE="assets/anvil-seal.svg"
SVG_16="assets/anvil-seal-16px.svg"
SVG_TAGLINE="assets/anvil-seal-with-tagline.svg"

OUTPUT_DIR="assets/exports"
mkdir -p "$OUTPUT_DIR"

density=300

# Base mark exports (use simplified version for 16px)
magick -background none -density "$density" "$SVG_16" -resize 16x16 "$OUTPUT_DIR/anvil-seal_16.png"
magick -background none -density "$density" "$SVG_SOURCE" -resize 32x32 "$OUTPUT_DIR/anvil-seal_32.png"
magick -background none -density "$density" "$SVG_SOURCE" -resize 64x64 "$OUTPUT_DIR/anvil-seal_64.png"
magick -background none -density "$density" "$SVG_SOURCE" -resize 128x128 "$OUTPUT_DIR/anvil-seal_128.png"
magick -background none -density "$density" "$SVG_SOURCE" -resize 256x256 "$OUTPUT_DIR/anvil-seal_256.png"
magick -background none -density "$density" "$SVG_SOURCE" -resize 512x512 "$OUTPUT_DIR/anvil-seal_512.png"
magick -background none -density "$density" "$SVG_SOURCE" -resize 1024x1024 "$OUTPUT_DIR/anvil-seal_1024.png"

# Dark background variants: render mark as light using SVG fill override for consistent output.
# NOTE: This uses -fill/-colorize to force a light mark; validate in your environment.
magick -size 512x512 xc:"#0a0a0a" \
  \( -background none -density "$density" "$SVG_SOURCE" -resize 512x512 -fill "#e0e0e0" -colorize 100 \) \
  -gravity center -composite "$OUTPUT_DIR/anvil-seal-darkbg_512.png"

magick -size 1024x1024 xc:"#0a0a0a" \
  \( -background none -density "$density" "$SVG_SOURCE" -resize 1024x1024 -fill "#e0e0e0" -colorize 100 \) \
  -gravity center -composite "$OUTPUT_DIR/anvil-seal-darkbg_1024.png"

# Tagline exports (after converting text → paths)
magick -background none -density "$density" "$SVG_TAGLINE" -resize 400x96 "$OUTPUT_DIR/anvil-seal-tagline_400x96.png"
magick -background none -density "$density" "$SVG_TAGLINE" -resize 800x192 "$OUTPUT_DIR/anvil-seal-tagline_800x192.png"
magick -background none -density "$density" "$SVG_TAGLINE" -resize 1200x288 "$OUTPUT_DIR/anvil-seal-tagline_1200x288.png"

echo "✓ PNG exports complete in $OUTPUT_DIR/"
