# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies using yarn as this seems to be the most stable option

```bash
# yarn
yarn install

```

## Envs
add an .env file in the project root and add your storyblok api key

```bash
NUXT_PUBLIC_STORYBLOK_API_TOKEN=<your storyblok api key>

```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment) for more information.

## problem med powershell
Open powerShell as Administrator
Set-ExecutionPolicy -ExecutionPolicy Unrestricted

## Karrusell komponent
https://github.com/ismail9k/vue3-carousel

## https for storyblock v2

V2 av storyblok kräver https även för lokal utveckling.
1. installera [mkcert](https://github.com/FiloSottile/mkcert)
2. $ mkcert -install
3. $ mkcert localhost 127.0.0.1 ::1
Nu har filerna skapats
The certificate is at "./localhost+2.pem" and the key at "./localhost+2-key.pem"
lägg dom i /cert