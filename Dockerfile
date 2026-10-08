# Imagen del sitio ya construido: sirve dist/ con nginx.
# El build se hace aparte (`npm run build`), así que este contenedor arranca al
# instante y no necesita node ni las dependencias del proyecto.
FROM nginx:alpine

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY docker/security-headers.conf /etc/nginx/conf.d/security-headers.conf
COPY dist /usr/share/nginx/html

EXPOSE 80
