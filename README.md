# Phaser 3 & TypeScript - Basics

A simple game built with **Phaser 3**, **TypeScript**, and **Vite**.

**Playable Demo:** [https://mizar999.github.io/phaser-typescript-basics/](https://mizar999.github.io/phaser-typescript-basics/)

---

## Resources

- [How to build a simple game in the browser with Phaser 3 and TypeScript](https://medium.freecodecamp.org/how-to-build-a-simple-game-in-the-browser-with-phaser-3-and-typescript-bdc94719135) by Mariya Davydova [@mariyadavydova](https://www.freecodecamp.org/news/author/mariya/)

---

## Development

To clone and develop this project locally:

```powershell
git clone https://github.com/Mizar999/phaser-typescript-basics.git
cd phaser-typescript-basics
npm install
npm run dev
```

### Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite dev server with instant Hot Module Replacement (HMR). |
| `npm run build` | Runs TypeScript type-checking and builds the production bundle into `dist/`. |
| `npm run preview` | Previews the production build locally. |

---

## New Project Setup from Scratch

If you want to set up a new Phaser 3 project with TypeScript and Vite from scratch:

1. **Initialize NPM project & install dependencies:**

   ```powershell
   npm init -y
   npm install --save-dev typescript vite phaser
   ```

2. **Create Vite configuration (`vite.config.ts`):**

   ```typescript
   import { defineConfig } from 'vite';

   export default defineConfig({
     base: './',
     build: {
       outDir: 'dist',
     },
   });
   ```

3. **Create TypeScript configuration (`tsconfig.json`):**

   ```json
   {
     "compilerOptions": {
       "target": "ES2020",
       "useDefineForClassFields": true,
       "module": "ESNext",
       "lib": ["ES2020", "DOM", "DOM.Iterable"],
       "skipLibCheck": true,
       "moduleResolution": "node",
       "allowSyntheticDefaultImports": true,
       "strict": false,
       "noEmit": true
     },
     "include": ["src"]
   }
   ```

4. **Create HTML Entry Point (`index.html`):**

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Phaser TypeScript Basics</title>
     </head>
     <body>
       <div id="game"></div>
       <script type="module" src="/src/app.ts"></script>
     </body>
   </html>
   ```

5. **Configure `package.json` scripts:**

   ```json
   "scripts": {
     "dev": "vite",
     "build": "tsc && vite build",
     "preview": "vite preview"
   }
   ```

---

## Automatic Deployment (GitHub Pages)

This repository uses an automated GitHub Actions workflow defined in `.github/workflows/deploy.yml`.

Every push to the `main` or `master` branch automatically triggers a build and deploys the generated site directly to GitHub Pages.
