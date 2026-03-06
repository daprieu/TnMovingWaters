# Agent Guidelines for Astro Projects

These guidelines define how an OpenCode-style coding agent should operate when working inside this repository.

Agents must follow tasks sequentially and verify each step before continuing.

---

# General Principles

- Prefer Static Site Generation (SSG)
- Avoid unnecessary JavaScript
- Preserve existing routes and SEO
- Use reusable components
- Maintain consistent design tokens

---

# Development Workflow

## 1. Analyze the Project

Tasks:

- [ ] Scan project structure
- [ ] Identify pages in `src/pages`
- [ ] Identify shared layouts
- [ ] Identify reusable components
- [ ] Identify design tokens and styles

Verify:

- [ ] All pages accounted for
- [ ] Layout hierarchy understood
- [ ] Component structure mapped

---

## 2. Page Changes

Tasks:

- [ ] Edit the correct route file
- [ ] Use BaseLayout or appropriate layout
- [ ] Maintain heading hierarchy
- [ ] Maintain metadata

Verify:

- [ ] Page renders in dev server
- [ ] Page metadata present
- [ ] No console errors

---

## 3. Component Changes

Tasks:

- [ ] Check for existing reusable components
- [ ] Extract duplicated markup into components
- [ ] Place components in `src/components`

Verify:

- [ ] Component reused across pages
- [ ] No duplicated markup remains

---

## 4. Styling Changes

Tasks:

- [ ] Use design tokens
- [ ] Maintain spacing scale
- [ ] Maintain typography scale

Verify:

- [ ] No hardcoded styles
- [ ] Visual consistency preserved

---

## 5. Performance Rules

Tasks:

- [ ] Optimize images
- [ ] Remove unused scripts
- [ ] Avoid unnecessary hydration

Verify:

- [ ] Lighthouse performance acceptable
- [ ] Page weight reduced

---

# Final Verification

Before finishing any task:

- [ ] Run dev server
- [ ] Run production build
- [ ] Check all routes
- [ ] Check metadata

Commands:

npm run dev
npm run build