set -e
npx create-next-app@latest temp-app --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --yes
shopt -s dotglob && mv temp-app/* . && rm -rf temp-app
npm install @supabase/supabase-js @supabase/ssr next-pwa next-intl clsx tailwind-merge lucide-react
