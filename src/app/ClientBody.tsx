"use client";

import { useEffect } from "react";
import { PhotoProvider } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { LanguageProvider } from '@/lib/LanguageContext';

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <LanguageProvider>
      <PhotoProvider>
        <div className="antialiased">{children}</div>
      </PhotoProvider>
    </LanguageProvider>
  );
}
