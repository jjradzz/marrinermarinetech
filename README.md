# Marriner Marine Technologies Website

This repository contains the static GitHub Pages website for Marriner Marine Technologies.

The site uses HTML5, CSS3, and vanilla JavaScript only. There is no framework, package manager, build process, server-side code, analytics, database, or active form service.

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
|-- robots.txt
|-- sitemap.xml
|-- README.md
|-- CNAME
|-- css/
|   `-- styles.css
|-- js/
|   `-- script.js
|-- images/
|   `-- logo/
|       |-- marrinermarinetech_fullLogo.png
|       |-- marrinermarinetech_textLogo.png
|       `-- marrinermarinetech_iconLogo.png
`-- assets/
```

## Logo Assets

Official logo files live in `images/logo/`.

- `marrinermarinetech_textLogo.png` is used in desktop navigation and footers.
- `marrinermarinetech_iconLogo.png` is used for mobile navigation, favicon, compact page headings, and the 404 page.
- `marrinermarinetech_fullLogo.png` is used for the home hero, About page, and Open Graph image metadata.

Do not edit or regenerate the logo artwork without approved replacement assets.

## Preview Locally

Open `index.html` directly in a browser.

You can also use a simple local server:

```powershell
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Content Status

The site now uses public-facing copy for the company, prototype product, technology overview, development updates, contact page, and interim privacy notice.

The first public product name currently used is:

```text
Man-Overboard Detection and Crew-Location System
```

The shared company description is:

```text
Developing practical marine safety, crew-location, and search-and-rescue technologies for commercial and recreational vessels.
```

## Contact Approach

The website does not currently use an active contact form.

All public contact calls point to:

```text
info@marrinermarinetech.com
```

The email is implemented as a clickable `mailto:` link. No phone number, street address, or unverified social media URLs are included.

## Privacy Notice

The privacy page is a simple interim notice for the current static website. It states that there is no active contact form, no intentional collection of personal information through the website, and no sale of personal information.

Privacy policy should be professionally reviewed before advanced data collection, analytics, cookies, advertising, or active forms are introduced.

## SEO Files

The site includes:

- Page-specific titles and meta descriptions
- Canonical URLs for the custom domain
- Open Graph title, description, URL, site name, and image metadata
- Twitter summary card metadata
- Basic Organization JSON-LD with verified name, URL, logo, and email only
- `robots.txt`
- `sitemap.xml`

The temporary Open Graph image is:

```text
https://marrinermarinetech.com/images/logo/marrinermarinetech_fullLogo.png
```

## Custom Domain

The `CNAME` file contains:

```text
marrinermarinetech.com
```

GitHub Pages uses this file to associate the repository with the custom domain. DNS records and HTTPS settings are managed outside this repository.

## Manual Tasks Remaining

- Review the interim privacy notice before adding analytics, cookies, advertising, or active forms.
- Add verified social media links only after official URLs are available.
- Add approved real photography or product imagery when available.
- Continue reviewing technical and safety claims before publication.
- Confirm DNS and HTTPS settings in GitHub Pages and the domain provider.
- Test the custom domain after deployment.
