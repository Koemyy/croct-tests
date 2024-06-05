import {Suspense} from 'react';
import HomeHero from './HomeHero';

export default function Page() {
  return (
    <div>
      <h1>Page</h1>
      <Suspense fallback="✨ Personalizing...">
        <HomeHero />
      </Suspense>
    </div>
  );
}