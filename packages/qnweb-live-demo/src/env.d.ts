interface ImportMetaEnv extends Readonly<Record<string, unknown>> {
  readonly VITE_NODE_ENV: 'dev' | 'test' | 'prod';
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
