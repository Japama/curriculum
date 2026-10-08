# juanbautistavalero.com

Web personal de **Juan Bautista Valero Carrasco**: quién soy, los productos que
construyo (`Profeasy`, `ProEntreno`) y cómo contactarme. Una sola página, en
español, pensada para que la web pueda funcionar también como web de empresa si
me establezco como autónomo.

## Stack

| Pieza | Tecnología |
| --- | --- |
| Build | Vite 8 + TypeScript 5.9 |
| Interfaz | React 18.3 |
| Estilos | Tailwind CSS v4 (tokens en `src/index.css`) |
| Animación | Framer Motion 14 + animaciones CSS (`@theme`) |
| Iconos | `lucide-react` + iconos de marca propios (`src/components/ui/brand-icons.tsx`) |
| Tipografías | `@fontsource-variable` (Inter y Space Grotesk, locales) |
| Tests | Vitest 5 + Testing Library |

Sin CDNs externos: fuentes, iconos y banderas van dentro del bundle.

## Puesta en marcha

```bash
npm install --include=dev   # ver nota de abajo
cp .env.example .env
npm run dev                 # http://localhost:5173
```

> **Nota sobre npm**: si tu configuración global tiene `omit=dev` (habitual con
> `NODE_ENV=production`), `npm install` no instalará Vite ni TypeScript. Usa
> `npm install --include=dev`.

### Scripts

| Script | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con HMR |
| `npm run build` | `tsc -b` + build de producción en `dist/` |
| `npm run preview` | Sirve localmente el `dist/` generado |
| `npm run lint` | ESLint sobre todo el proyecto |
| `npm test` | Vitest en modo watch |
| `npm run test:run` | Vitest una vez (CI) |
| `npm run typecheck` | Comprobación de tipos sin emitir |

## Configuración

Variables en `.env` (ver `.env.example`):

| Variable | Para qué |
| --- | --- |
| `VITE_SITE_URL` | Dominio canónico, sin barra final |
| `VITE_CONTACT_EMAIL` | Email público de contacto |

Si `VITE_CONTACT_EMAIL` no está definida, la web muestra
`hola@juanbautistavalero.com` como valor de ejemplo: **cámbialo antes de publicar**.

## Cómo editar el contenido

| Quiero… | Fichero |
| --- | --- |
| Añadir o editar un proyecto | [src/data/projects.ts](src/data/projects.ts) |
| Ocultar un proyecto sin borrarlo | `visible: false` en su ficha (`MoodPlan` funciona así) |
| Cambiar nombre, rol, stats o principios | [src/data/bio.ts](src/data/bio.ts) |
| Skills, marquee de tecnologías y cursos | [src/data/skills.ts](src/data/skills.ts) |
| Experiencia y formación | [src/data/experience.ts](src/data/experience.ts) |

`MoodPlan` está en desarrollo y sin dominio: sus datos están completos en
`projects.ts` con `visible: false`, así que publicarlo es cambiar una línea.

## Despliegue

### Cloudflare Pages (recomendado)

1. **Workers & Pages** → *Create* → *Pages* → *Connect to Git*.
2. Selecciona el repositorio `Japama/curriculum`.
3. Build command: `npm run build` · Output directory: `dist`
4. Variable de entorno: `VITE_CONTACT_EMAIL` con tu email real.
5. Añade el dominio `juanbautistavalero.com` en *Custom domains*.

`public/_redirects` ya incluye el `www` → apex (301) y el fallback a
`index.html`.

### Docker

```bash
docker build -t web-personal .
docker run -p 3000:3000 web-personal
```

El `Dockerfile` construye con `npm ci --include=dev` y sirve `dist/`.

## Estructura

```
index.html                 metadatos, Open Graph y JSON-LD
public/                    assets estáticos (favicon, og.jpg, _redirects…)
src/
├── App.tsx                composición de las secciones
├── index.css              tokens de Tailwind v4 + utilidades (.glass, .spotlight…)
├── components/
│   ├── sections/          Nav, Hero, About, Projects, Stack, Experience, Contact, Footer
│   └── ui/                Reveal, SpotlightCard, SectionHeading, brand-icons
├── data/                  contenido tipado (projects, bio, skills, experience)
└── lib/accents.ts         estilos por acento de producto
```
