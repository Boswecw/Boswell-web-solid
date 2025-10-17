#!/bin/bash

# Create images directory
mkdir -p images

# Download Unsplash images with optimization parameters
echo "Downloading and optimizing images..."

# Image 1: AI Biz Starter Template
curl -s "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&q=80&auto=format" \
  -o images/ai-biz-starter.jpg

# Image 2: FurBabies Pet Store
curl -s "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop&q=80&auto=format" \
  -o images/furbabies-store.jpg

# Image 3: Leopold Nature Tracker
curl -s "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&q=80&auto=format" \
  -o images/leopold-tracker.jpg

echo "✓ Images downloaded"

# Check if ImageMagick is available
if command -v convert &> /dev/null; then
  echo "Optimizing with ImageMagick..."
  
  # Optimize JPEGs
  for file in images/*.jpg; do
    convert "$file" -quality 75 -strip -interlace Plane "$file"
    echo "✓ Optimized $(basename $file)"
  done
else
  echo "ImageMagick not found, skipping optimization"
fi

# List file sizes
echo ""
echo "File sizes:"
ls -lh images/

