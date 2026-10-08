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

Ambas son **obligatorias y se comprueban antes de construir**: `npm run build`
ejecuta `scripts/check-env.mjs` y aborta con un mensaje claro si falta alguna o
tiene mal formato. Así nunca se publica un email de ejemplo.

Las variables se sustituyen en tiempo de empaquetado (`import.meta.env`), no se
leen en el navegador: cambiar el email exige **volver a construir**.

Para los tests, `.env.test` aporta valores de relleno y están en `.gitignore`
solo `.env*` locales (`.env`), no el de tests.

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

### Docker + nginx (servidor propio)

El sitio ya construido se sirve con nginx en un contenedor. El build se hace en
el host, así que **actualizar el sitio son dos comandos**:

```bash
npm run build
docker compose up -d --build
```

Queda accesible en `http://<ip-de-la-maquina>:8088`. El servicio se llama
`juanbautistavalero-web`, arranca con el sistema (`restart: unless-stopped`) y
tiene healthcheck.

- `Dockerfile` → imagen `nginx:alpine` que copia `dist/` y la configuración.
- `docker/nginx.conf` → rutas del cliente (`try_files … /index.html`), gzip,
  caché larga para assets con hash y sin caché para el HTML.
- `docker/security-headers.conf` → cabeceras de seguridad, incluidas en cada
  location (en nginx, `add_header` no se hereda si la location define las suyas).

Para el dominio, se añade un **Proxy Host** en nginx-proxy-manager apuntando a
la IP de la máquina y al puerto `8088`.

### Cloudflare Pages

1. **Workers & Pages** → *Create* → *Pages* → *Connect to Git*.
2. Selecciona el repositorio `Japama/curriculum`.
3. Build command: `npm run build` · Output directory: `dist`
4. Variables de entorno: `VITE_CONTACT_EMAIL` y `VITE_SITE_URL`.
5. Añade el dominio `juanbautistavalero.com` en *Custom domains*.

`public/_redirects` ya incluye el `www` → apex (301) y el fallback a
`index.html`.

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
