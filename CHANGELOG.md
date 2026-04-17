# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Implementación de animaciones modernas al hacer *scroll* mediante la creación de la directiva especializada `scroll-animate.directive.ts`.
- Instalación de la librería `@ng-icons/core` y `@ng-icons/heroicons` (`package.json` y `package-lock.json`) para la gestión avanzada de íconos vectoriales.
- Despliegue de íconos SVG dinámicos mediante inyección de `<ng-icon>` en el `NavbarComponent`.
 - `src/app/shared/icons.ts`: archivo central para registrar iconos usados por la app (heroicons, ionicons, octicons).
 - Reutilizables de UI: añadidas utilidades de botones en `src/styles.scss` (`.btn`, `.btn-primary`, `.btn-secondary`, `.btn-accent`, `.btn-sm`, `.btn-lg`) para CTA consistentes y control de tamaños.

### Changed
- **UX/UI Portfolio Professional Revamp:** (Afectando: `hero`, `about`, `stack`, `projects`, `experience`, `contact`, `navbar`, `footer`):
  - **Identidad Visual**: Refactorización masiva de la paleta de colores en `tailwind.config.js`. Migración completa del prefijo de colores `brand-*` hacia una estructura escalable y altamente contrastante (`primary`, `secondary`, `neutral`, `shadow`, `warn`, `danger`, `accent`).
  - **Jerarquía y Experiencia**: Mejoras de storytelling y jerarquía visual en la línea de tiempo de `experience.html` y `experience.ts`.
  - **Proyectos**: Optimización del manejo de enlaces, estilización de tarjetas y adición de *placeholders* visuales robustos (`projects.html`, `projects.ts`).
  - **Navegación**: Sustitución de bloques crudos de `<svg>` por directivas `<ng-icon>` en el `navbar.html`. Ajuste fino de la vista paralela de los logotipos, botones de call-to-action (`Descargar CV`) y control del estado en `navbar.ts`.
- **Servicios y Modelos**: Refactorización y depuración en la estructura de datos (`portfolio.models.ts` y `data.service.ts`) para soportar nuevos requerimientos del front-end.
- **Contenido**: Correcciones ortográficas sistemáticas aplicadas a los textos y de la data centralizada.
 - `angular.json`, `package.json`, `package-lock.json`: dependencias y ajustes relacionados con librerías de iconos.
 - `src/app/app.config.ts`: registro global de iconos usando `provideIcons(appIcons)`.
 - `src/app/features/home/hero/hero.html`: reubicado `quick-links` debajo de los CTAs; el correo ahora se muestra como overlay (evita reflow) y la animación usa utilidades Tailwind (`group-hover`/`group-focus`).
 - `src/app/features/home/hero/hero.scss`: ajustes de estilos y soporte de focus outlines.
 - `src/app/features/home/hero/hero.ts`: eliminado registro local de iconos; uso de `NgIconComponent` y Signals para el toast.
 - `src/app/core/layout/navbar/navbar.ts`: eliminado registro local de iconos (usa registry global).
 - `src/styles.scss`: añadidas utilidades reutilizables de botones (`.btn`, `.btn-primary`, `.btn-secondary`, `.btn-accent`, `.btn-sm`, `.btn-lg`) y reglas de sizing para evitar desbalance visual.
 - `src/app/features/home/hero/hero.html`: CTAs actualizados para usar `btn`/`btn-primary`/`btn-secondary` y tamaños consistentes para mantener equilibrio visual.

### Fixed
- Guardada la creación de `IntersectionObserver` durante SSR en `src/app/shared/directives/scroll-animate.directive.ts`.
  - La directiva ahora inicializa la animación/observer solo en el navegador (`isPlatformBrowser`) y verifica `typeof IntersectionObserver`.
 - Evitado el bug donde mostrar el correo en hover empujaba/rompía el layout: `quick-links` se movió fuera del mismo flex de los CTAs y el texto del correo se muestra en un overlay absoluto, previniendo reflow y manteniendo hover/focus y accesibilidad.
 - Centralizado el registro de iconos para evitar duplicación e inconsistencias entre componentes.

### 2026-04-12 — Cambios locales

#### Added
- Copia al portapapeles con feedback (toast) en la sección `hero`.
- Creación de la lógica de copia al portapapeles a Angular Signals (`showToast`) y uso del control de flujo `@if` de Angular 21 para el toast.

#### Changed
- Rediseño tipográfico del `Hero` para enfatizar la jerarquía y tipografía (texto principal, subtítulo cian, descripción, CTAs). Implementación responsive.
- Añadido fondo azul marino profundo con tres gradientes radiales sutiles y una tarjeta flip-card con efecto glassmorphism.
- Reemplazo de SVGs por `ng-icon` para el icono de correo en la sección `hero`.

#### Fixed
- Correcciones de sintaxis y ajustes de imports en `HeroComponent` (resuelto duplicate `imports` y coma faltante antes de `viewProviders`).

Files modified/created:
- `src/app/features/home/hero/hero.html`
- `src/app/features/home/hero/hero.scss`
- `src/app/features/home/hero/hero.ts`
- `src/styles.scss`
- `src/index.html`

## [1.0.0] - 2026-04-05

### Added
- New standalone section components for the portfolio landing page:
  - `AboutComponent`
  - `StackComponent`
  - `ContactComponent`
- Centralized typed domain models for portfolio data in `src/app/shared/models/portfolio.models.ts`.
- New `DataService` (`providedIn: 'root'`) with mock data for projects, experience, stack, and contact.
- Simulated CV asset for download: `src/assets/cv-maria-guedez.pdf`.
- Footer content and quick links section with brand copy.
- Lazy-loaded root route using `loadComponent` for home page startup optimization.

### Changed
- Full landing page composition moved to a modular, reusable structure in `src/app/features/home/home/home.ts`.
- Navbar redesigned to responsive glassmorphism layout with mobile hamburger menu, section anchors, and CV CTA.
- Hero section updated with personal brand content (name, role, value statement, and CTAs).
- Projects section changed from placeholder to dynamic cards driven by `DataService`.
- Experience section changed from placeholder to timeline/cards driven by `DataService`.
- App shell adjusted to fixed navbar plus sectioned single-page flow in `src/app/app.html`.
- Global metadata and language adjusted for portfolio presentation in `src/index.html`.

### Design System
- Tailwind theme extended with custom portfolio tokens in `tailwind.config.js`:
  - `brand-bg`: `#0F172A`
  - `brand-surface`: `#1E293B`
  - `brand-text`: `#F8FAFC`
  - `brand-muted`: `#94A3B8`
  - `brand-primary`: `#8B5CF6`
  - `brand-cyan`: `#06B6D4`
  - `brand-pink`: `#EC4899`
- Added `soft` shadow token for depth and glow effects.
- Global style system updated in `src/styles.scss` with atmospheric gradients, typography setup, and smooth scrolling.

### Architecture
- Section-based feature architecture consolidated:
  - Layout primitives in `src/app/core/layout`
  - Services in `src/app/core/services`
  - Feature sections in `src/app/features`
  - Shared models in `src/app/shared/models`
- Standalone components with `ChangeDetectionStrategy.OnPush` applied across updated layout/feature components.
- `NgOptimizedImage` integrated in hero for optimized image loading.

### Fixed
- SSR bootstrap mismatch caused by root class rename: updated server bootstrap to use `AppComponent` in `src/main.server.ts`.

### Security
- No security changes in this release.

## Notes

- Current workspace state also includes `src/assets/MG/logo_nombre_completo.png` as a newly added asset.

[Unreleased]: https://github.com/MagmCode/portafolio-2026/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/MagmCode/portafolio-2026/releases/tag/v1.0.0
