#!/bin/bash

echo "Optimizing images with ImageMagick..."

# Optimize JPEGs
for file in *.jpg; do
  echo "Optimizing $file..."
  convert "$file" -quality 75 -strip -interlace Plane -resize 600x400 "$file"
done

echo ""
echo "Converting to WebP..."

# Convert to WebP
for file in *.jpg; do
  webp_file="${file%.jpg}.webp"
  if command -v cwebp &> /dev/null; then
    cwebp -q 75 "$file" -o "$webp_file"
    echo "✓ Created $webp_file"
  else
    echo "cwebp not found, skipping WebP conversion"
  fi
done

echo ""
echo "Final file sizes:"
ls -lh

