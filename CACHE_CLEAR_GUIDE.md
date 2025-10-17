# Cache Clearing Guide - Fix Manifest Icon Error

## Problem
The deployed site is showing an old cached version of the manifest file that references `/icons/icon-192.png` instead of the correct `/icons/icon-192x192.png`.

## Solution
You need to clear the cache on your hosting provider and in your browser.

### Step 1: Identify Your Hosting Provider

Check where your site is deployed:
- **Netlify**: https://app.netlify.com
- **Vercel**: https://vercel.com/dashboard
- **GitHub Pages**: GitHub repository settings
- **Traditional Hosting**: Contact your hosting provider

### Step 2: Clear Cache by Provider

#### Netlify
1. Go to https://app.netlify.com
2. Select your site (Boswell-web-solid)
3. Go to **Deploys** tab
4. Click **Trigger deploy** → **Deploy site** (or use "Clear cache and redeploy")
5. Wait for deployment to complete
6. Hard refresh browser (Ctrl+Shift+R)

#### Vercel
1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to **Deployments** tab
4. Click the three dots on latest deployment
5. Select **Redeploy**
6. Hard refresh browser (Ctrl+Shift+R)

#### GitHub Pages
1. Go to your repository settings
2. Scroll to "GitHub Pages" section
3. If using a custom domain, check DNS settings
4. Hard refresh browser (Ctrl+Shift+R)
5. May need to wait 5-10 minutes for cache to clear

#### Cloudflare (if using)
1. Go to https://dash.cloudflare.com
2. Select your domain
3. Go to **Caching** → **Cache Rules**
4. Click **Purge Cache** → **Purge Everything**
5. Hard refresh browser (Ctrl+Shift+R)

#### Traditional Hosting
Contact your hosting provider and ask them to:
- Clear the CDN cache
- Clear the server cache
- Or provide FTP access to delete cache files

### Step 3: Hard Refresh Browser

After clearing cache on hosting provider:

**Windows/Linux:**
- Press `Ctrl + Shift + R`

**Mac:**
- Press `Cmd + Shift + R`

Or:
1. Open DevTools (F12)
2. Right-click refresh button
3. Select "Empty cache and hard refresh"

### Step 4: Verify Fix

1. Open DevTools (F12)
2. Go to **Application** tab
3. Click **Manifest** on the left
4. Check that icons show:
   - `/icons/icon-192x192.png` ✅
   - `/icons/icon-512x512.png` ✅

5. Check **Console** tab
6. Should see NO errors about icons

### Step 5: Verify Files Exist

In DevTools Console, run:
```javascript
fetch('/icons/icon-192x192.png').then(r => console.log('192x192:', r.status))
fetch('/icons/icon-512x512.png').then(r => console.log('512x512:', r.status))
fetch('/manifest.webmanifest').then(r => console.log('manifest:', r.status))
```

All should return status 200.

## Current Status

✅ Local build: CORRECT
✅ GitHub: UP TO DATE
✅ dist/ folder: CORRECT
⚠️ Deployed site: NEEDS CACHE CLEAR

## What Changed

- Manifest now correctly references `/icons/icon-192x192.png`
- Icons directory contains both files
- Service worker updated to network-first strategy
- All assets are correct in dist/

## If Cache Clear Doesn't Work

1. **Check if dist/ was deployed**: Verify all files are on server
2. **Check file permissions**: Icons should be readable
3. **Check CDN settings**: May need to purge CDN cache separately
4. **Contact hosting support**: They can force cache clear
5. **Wait 24 hours**: Browser cache may take time to expire

## Verification Commands

```bash
# Check manifest
curl https://boswelldigitalsolutions.com/manifest.webmanifest

# Check icons exist
curl -I https://boswelldigitalsolutions.com/icons/icon-192x192.png
curl -I https://boswelldigitalsolutions.com/icons/icon-512x512.png

# Should all return 200 OK
```

## Summary

The error is **NOT** a code issue - it's a **cache issue**.

1. Deploy latest dist/ folder
2. Clear cache on hosting provider
3. Hard refresh browser
4. Error should be gone ✅

