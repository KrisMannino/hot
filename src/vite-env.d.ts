// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_API_KEY: string;
  readonly VITE_POSTHOG_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
