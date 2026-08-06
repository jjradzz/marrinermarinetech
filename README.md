# Marriner Marine Technologies Website

This repository contains the initial static website foundation for Marriner Marine Technologies.

It is built for GitHub Pages using only HTML5, CSS3, and vanilla JavaScript. There is no build process, database, server-side code, package manager, or external UI framework.

## File Structure

```text
/
|-- index.html
|-- about.html
|-- technology.html
|-- product.html
|-- development.html
|-- contact.html
|-- privacy.html
|-- 404.html
|-- README.md
|-- CNAME
|-- css/
|   `-- styles.css
|-- js/
|   `-- script.js
|-- images/
|   |-- logo-placeholder.svg
|   |-- hero-placeholder.svg
|   |-- product-placeholder.svg
|   `-- founder-placeholder.svg
`-- assets/
```

## Preview Locally

Open `index.html` directly in a browser.

You can also use a simple local server if you prefer:

```powershell
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Editing Text

Most temporary copy is written as bracketed placeholder text, such as `[COMPANY TAGLINE]` or `[BUSINESS EMAIL]`.

Search the project for `[` to find the placeholders that need final content.

## Replacing Images

Temporary SVG placeholders are stored in `images/`.

Replace these files with final approved assets when ready:

- `images/logo-placeholder.svg`
- `images/hero-placeholder.svg`
- `images/product-placeholder.svg`
- `images/founder-placeholder.svg`

If you rename the files, update every matching `src` and Open Graph `og:image` reference in the HTML.

## Changing Colors and Fonts

Edit the CSS variables at the top of `css/styles.css`.

Useful variables include:

- `--color-primary`
- `--color-secondary`
- `--color-accent`
- `--color-background`
- `--color-text`
- `--font-heading`
- `--font-body`
- `--max-width`
- `--radius`
- `--space`

## Updating Navigation

Each page has a copied navigation block. If you add, remove, or rename a page, update the navigation in every HTML file.

Also update the footer links where needed.

## Publishing With GitHub Pages

1. Push this repository to GitHub.
2. Open the repository settings on GitHub.
3. Go to Pages.
4. Select the branch and root folder that contain these files.
5. Save the Pages settings.
6. Wait for GitHub Pages to publish the site.

This website is static and should work on GitHub Pages without any build settings.

## Custom Domain

The `CNAME` file contains:

```text
marrinermarinetech.com
```

GitHub Pages uses this file to associate the repository with the custom domain. You will still need to configure DNS records with your domain provider and enable HTTPS in GitHub Pages settings.

## Contact Form

The contact form in `contact.html` is a placeholder and does not submit anywhere. GitHub Pages cannot process forms by itself.

Later, you can connect a static form service such as Formspree or another provider by updating the form `action`, `method`, and any provider-specific settings.

## Important Placeholders to Replace

- `[COMPANY TAGLINE]`
- `[SHORT COMPANY DESCRIPTION]`
- `[CURRENT PRODUCT NAME]`
- `[PRODUCT SUMMARY]`
- `[PROBLEM DESCRIPTION]`
- `[TECHNOLOGY OVERVIEW]`
- `[COMPANY MISSION]`
- `[CURRENT DEVELOPMENT STATUS]`
- `[FUTURE VISION]`
- `[COMPANY STORY]`
- `[WHY THE COMPANY WAS FOUNDED]`
- `[MEANING BEHIND THE MARRINER NAME]`
- `[FOUNDER BIOGRAPHY]`
- `[HIGH-LEVEL SYSTEM DESCRIPTION]`
- `[POSITIONING TECHNOLOGY SUMMARY]`
- `[SECONDARY DETECTION METHOD]`
- `[SOFTWARE PLATFORM SUMMARY]`
- `[TESTING APPROACH]`
- `[PRODUCT NAME]`
- `[INTENDED USERS]`
- `[PLANNED FEATURES]`
- `[FIELD TESTING PLACEHOLDER]`
- `[BUSINESS EMAIL]`
- `[SOCIAL MEDIA LINKS]`
- All placeholder development update cards
- All placeholder privacy language

## Pre-Publication Checklist

- [ ] Replace all bracketed placeholders
- [ ] Add the final logo
- [ ] Add final images
- [ ] Verify email addresses
- [ ] Verify social links
- [ ] Review technical claims
- [ ] Review privacy language
- [ ] Test mobile navigation
- [ ] Test every internal link
- [ ] Test the custom domain
- [ ] Enable HTTPS
- [ ] Remove placeholder development posts
- [ ] Check accessibility
- [ ] Check spelling and grammar

## Manual Steps Outside the Code

These steps are not completed in this repository:

- Configure GitHub Pages
- Configure DNS records for `marrinermarinetech.com`
- Enable HTTPS in GitHub Pages
- Add final company content
- Add final product content
- Add final brand assets
- Connect a contact form service if needed
- Add analytics only after reviewing privacy requirements
