# Skill: Landing Page Generator

This skill generates SEO‑focused landing pages while preserving the Astro project structure.

Landing pages must be static, SEO‑optimized, and follow the site's design system.

---

# Inputs

- Page topic or keyword
- URL slug
- Page content data

Example:

keyword: fly fishing guide Montana
slug: montana-fly-fishing-guide

---

# Tasks

## 1. Create Page Route

- [ ] Create new file in `src/pages`
- [ ] File name must match slug
- [ ] Import the base layout

Example:

src/pages/montana-fly-fishing-guide.astro

Verify:

- [ ] File exists
- [ ] Route loads in dev server

---

## 2. Add SEO Metadata

- [ ] Add title tag
- [ ] Add meta description
- [ ] Add canonical URL

Verify:

- [ ] Metadata visible in page source
- [ ] Title contains target keyword

---

## 3. Create Page Structure

Required sections:

- [ ] Hero section
- [ ] Introduction
- [ ] Main content section
- [ ] FAQ section
- [ ] Call‑to‑action

Verify:

- [ ] Proper heading hierarchy
- [ ] Only one H1 used

---

## 4. Use Existing Components

- [ ] Use Hero component
- [ ] Use CTA component
- [ ] Use Layout component

Verify:

- [ ] No duplicated markup
- [ ] Components imported correctly

---

## 5. Optimize Content

- [ ] Include keyword in H1
- [ ] Include keyword in first paragraph
- [ ] Add internal links

Verify:

- [ ] Keyword present in metadata
- [ ] Content readable and structured

---

# Final Verification

Before finishing:

- [ ] Run `npm run build`
- [ ] Verify HTML generated
- [ ] Verify page accessible at slug