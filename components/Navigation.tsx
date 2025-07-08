'use client';

import { IMAGE_URLS } from '@/utils';

export default function Navigation() {

  return (
    <nav className="bg-blue-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <section style={{ backgroundImage: `url(${IMAGE_URLS.iplHero})` }} className={`w-24 h-16 bg-no-repeat bg-contain p-4 bg-center`}></section>
            </div>
          </div>
        </div>
      </div>

    </nav>
  );
}