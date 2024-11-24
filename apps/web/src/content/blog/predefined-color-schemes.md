---
author: Sat Naing
pubDatetime: 2022-09-26T12:13:24Z
modDatetime: 2024-01-04T09:09:06Z
title: Predefined color schemes
slug: predefined-color-schemes
featured: false
draft: false
tags:
  - color-schemes
description:
  Some of the well-crafted, predefined color schemes for AstroPaper blog
  theme.
---

I've crafted some predefined color schemes for this AstroPaper blog theme. You can replace these color schemes with the original ones.

If you don't know how you can configure color schemes, check [this blog post](https://astro-paper.pages.dev/posts/customizing-astropaper-theme-color-schemes/).

## Table of contents

## Light color schemes

Light color scheme has to be defined using the css selector `:root` and `html[data-theme="light"]`.

### Lobster

![lobster-color-scheme](https://user-images.githubusercontent.com/53733092/192282447-1d222faf-a3ce-44a9-9cfe-ac873155e5a9.png)

```css
:root,
html[data-theme="light"] {
  --color-bg: 246, 238, 225;
  --color-fg: 1, 44, 86;
  --color-accent: 225, 74, 57;
  --color-surface: 217, 209, 195;
  --color-muted: 239, 216, 176;
  --color-border: 220, 152, 145;
}
```

### Leaf Blue

![leaf-blue-color-scheme](https://user-images.githubusercontent.com/53733092/192318782-e80e3c39-54b5-423e-8f4b-9ae60402fc8d.png)

```css
:root,
html[data-theme="light"] {
  --color-bg: 242, 245, 236;
  --color-fg: 53, 53, 56;
  --color-accent: 17, 88, 209;
  --color-surface: 206, 213, 180;
  --color-muted: 187, 199, 137;
  --color-border: 124, 173, 255;
}
```

### Pinky light

![pinky-color-scheme](https://user-images.githubusercontent.com/53733092/192286510-892d0042-2d6d-471e-bb72-954221ae2d17.png)

```css
:root,
html[data-theme="light"] {
  --color-bg: 250, 252, 252;
  --color-fg: 34, 46, 54;
  --color-accent: 211, 0, 106;
  --color-surface: 234, 206, 219;
  --color-muted: 241, 186, 212;
  --color-border: 227, 169, 198;
}
```

## Dark color schemes

Dark color scheme has to be defined as `html[data-theme="dark"]`.

### AstroPaper 1 original Dark Theme

![AstroPaper 1 default dark theme](https://user-images.githubusercontent.com/53733092/215769153-13b0ad8d-5ba2-44b1-af06-e5ae61293f62.png)

```css
html[data-theme="dark"] {
  --color-bg: 47, 55, 65;
  --color-fg: 230, 230, 230;
  --color-accent: 26, 217, 217;
  --color-surface: 63, 75, 90;
  --color-muted: 89, 107, 129;
  --color-border: 59, 70, 85;
}
```

### Deep Oyster

![deep-oyster-color-scheme](https://user-images.githubusercontent.com/53733092/192314524-45ec5904-3d8f-450a-9edf-1e32c5e11d6c.png)

```css
html[data-theme="dark"] {
  --color-bg: 33, 35, 61;
  --color-fg: 244, 247, 245;
  --color-accent: 255, 82, 86;
  --color-surface: 57, 60, 102;
  --color-muted: 74, 78, 134;
  --color-border: 177, 47, 50;
}
```

### Pikky dark

![pinky-dark-color-scheme](https://user-images.githubusercontent.com/53733092/192307050-fbd55326-911c-4001-87c6-a8ad9378ac2e.png)

```css
html[data-theme="dark"] {
  --color-bg: 53, 54, 64;
  --color-fg: 233, 237, 241;
  --color-accent: 255, 120, 200;
  --color-surface: 75, 76, 89;
  --color-muted: 113, 85, 102;
  --color-border: 134, 67, 107;
}
```

### Astro dark (High Contrast)

![astro-dark-color-scheme](https://user-images.githubusercontent.com/53733092/215680520-59427bb0-f4cb-48c0-bccc-f182a428d72d.svg)

```css
html[data-theme="dark"] {
  --color-bg: 16, 23, 42; /* higher contrast bgColor */
  --color-bg: 33, 39, 55;
  --color-fg: 234, 237, 243;
  --color-accent: 255, 107, 1;
  --color-surface: 27, 39, 70;
  --color-muted: 138, 51, 2;
  --color-border: 171, 75, 8;
}
```

### Astro dark (New default dark theme in AstroPaper 2)

![new dark color scheme - low contrast](https://user-images.githubusercontent.com/53733092/215772856-d5b7ae35-ddaa-4ed6-b0bf-3fa5dbcf834c.png)

```css
html[data-theme="dark"] {
  --color-bg: 33, 39, 55; /* lower contrast bgColor */
  --color-fg: 234, 237, 243;
  --color-accent: 255, 107, 1;
  --color-surface: 52, 63, 96;
  --color-muted: 138, 51, 2;
  --color-border: 171, 75, 8;
}
```

### Astro Deep Purple (New dark theme in AstroPaper 3)

![AstroPaper v3 new theme](https://github.com/satnaing/astro-paper/assets/53733092/c8b5d7e1-a3bc-4852-a5ad-4abf7b3cec79)

```css
html[data-theme="dark"] {
  --color-bg: 33, 39, 55;
  --color-fg: 234, 237, 243;
  --color-accent: 235, 63, 211;
  --color-surface: 52, 63, 96;
  --color-muted: 125, 79, 124;
  --color-border: 100, 36, 81;
}
```

### AstroPaper v4 Special (New dark theme in AstroPaper 4)

![AstroPaper v4 new theme](https://github.com/satnaing/astro-paper/assets/53733092/66eb74dc-7a0e-4f2e-982d-25f5c443b25a)

```css
html[data-theme="dark"] {
  --color-bg: 0, 1, 35;
  --color-accent: 97, 123, 255;
  --color-fg: 234, 237, 243;
  --color-surface: 33, 34, 83;
  --color-muted: 12, 14, 79;
  --color-border: 48, 63, 138;
}
```
