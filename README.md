# a little space for us

A simple, static Valentine's Day page — a hero section plus a photo/message gallery. No build tools, no backend, just HTML/CSS/JS. Free to host on GitHub Pages.

## 1. Customize it

Open `index.html` in any text editor:

- **Hero text** — edit the headline inside `<h1>every reason I <em>choose you</em></h1>` and the sentence below it.
- **Gallery captions** — each photo card is an `<article class="card">` block; edit the text inside `<p class="caption">...</p>`.
- **Photos** — drop your images into the `images/` folder (named `photo-1.jpg` through `photo-6.jpg`, or your own names). Then, in each card, replace:

  ```html
  <div class="photo-slot">
    <span class="placeholder-label">photo 1<br>images/photo-1.jpg</span>
  </div>
  ```

  with:

  ```html
  <div class="photo-slot">
    <img src="images/photo-1.jpg" alt="describe the photo here">
  </div>
  ```

- **Add or remove cards** — copy/paste a whole `<article class="card">...</article>` block to add one, or delete a block to remove one. The `style="--r:-3deg"` bit is just a slight rotation for the scattered-photo look — any small value between -3deg and 3deg looks good.
- **Closing note** — edit the text in the `<section class="note">` block near the bottom.

## 2. Preview it locally

Just double-click `index.html` to open it in a browser. No server needed.

## 3. Put it on GitHub Pages

1. Create a new repository on GitHub (public, since GitHub Pages on the free tier needs a public repo — or use a private repo if your org has Pages enabled for private repos).
2. Add these files to the repo root: `index.html` and the `images/` folder (with your photos inside).
3. Commit and push.
4. In the repo, go to **Settings → Pages**.
5. Under **Build and deployment → Source**, choose **Deploy from a branch**.
6. Pick the `main` branch and the `/ (root)` folder, then **Save**.
7. Wait a minute or two, then refresh — GitHub shows the live URL at the top of the Pages settings, usually:

   `https://<your-username>.github.io/<repo-name>/`

8. Share that link with your co-workers.

## Notes

- Photos are loaded straight from the `images/` folder, so keep file sizes reasonable (a few hundred KB each) so the page loads fast.
- Everything is self-contained in `index.html` — no npm install, no build step.
- If you'd rather not have Google Fonts load from an external CDN, you can remove the two `<link>` tags in `<head>` and the page will fall back to system fonts.
