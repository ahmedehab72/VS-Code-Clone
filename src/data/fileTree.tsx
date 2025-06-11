import type { IFile } from "../interfaces";
import { v4 as uuid } from "uuid";
export const fileTree: IFile = {
  id: uuid(),
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: ".vite",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "abnf-Q7.js",
              isFolder: false,
              content: `import {
  require_apacheconf
} from "./chunk-ZQPQCAXD.js";
import "./chunk-EQCVQC35.js";
export default require_apacheconf();

`,
            },
          ],
        },
      ],
    },
    {
      id: uuid(),
      name: "public",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "index.ts",
          isFolder: false,
          content: `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

`,
        },
      ],
    },
    {
      id: uuid(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "Button.tsx",
              isFolder: false,
              content: `import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
`,
            },
            {
              id: uuid(),
              name: "Dialog.tsx",
              isFolder: false,
              content: `import * as React from 'react';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';

export default function BasicDialogs() {
  return (
    <Stack spacing={2} direction="row">
      <Dialog variant="text">Text</Dialog>
      <Dialog variant="contained">Contained</Dialog>
      <Dialog variant="outlined">Outlined</Dialog>
    </Stack>
  );
}
`,
            },
          ],
        },
      ],
    },
    {
      id: uuid(),
      name: "index.html",
      isFolder: false,
      content: `import { StrictMode } from "react";
      import { createRoot } from "react-dom/client";
      import "./index.css";
      import App from "./App.tsx";
      import { Provider } from "react-redux";
      import { store } from "./app/store.ts";
      
      createRoot(document.getElementById("root")!).render(
        <StrictMode>
          <Provider store={store}>
            <App />
          </Provider>
        </StrictMode>
      );
      `,
    },
    {
      id: uuid(),
      name: ".gitignore",
      isFolder: false,
      content: `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
      `,
    },
    {
      id: uuid(),
      name: "package.json",
      isFolder: false,
      content: `"dependencies": {
    "@reduxjs/toolkit": "^2.8.2",
    "@tailwindcss/vite": "^4.1.8",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.513.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-redux": "^9.2.0",
    "react-resizable-panels": "^3.0.2",
    "react-syntax-highlighter": "^15.6.1",
    "tailwind-merge": "^3.3.0",
    "tailwindcss": "^4.1.8",
    "uuid": "^11.1.0"
  },
      `,
    },

    {
      id: uuid(),
      name: "README.md",
      isFolder: false,
      content: `# React + TypeScript + Vite

This template provides a minimal setup.

Currently, two official plugins are available:
      `,
    },
    {
      id: uuid(),
      name: "vite.svg",
      isFolder: false,
      content: `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
});

`,
    },
  ],
};
