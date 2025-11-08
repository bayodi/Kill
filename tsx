# Required files for the Next.js App Router
test -f src/app/layout.tsx || cat > src/app/layout.tsx <<'TSX'
import './globals.css'
export const metadata = {
  title: 'Killmissedcalls — Never miss a call. Ever.',
  description: 'Voice AI that answers every call, qualifies leads, and books appointments 24/7.',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
TSX

# Tailwind base file (if missing)
mkdir -p src/app
test -f src/app/globals.css || cat > src/app/globals.css <<'CSS'
@tailwind base;
@tailwind components;
@tailwind utilities;
html { scroll-behavior:smooth }
body { background:#020617 }
CSS
