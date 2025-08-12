"use client";

import { AlertTriangle } from "lucide-react";

export default function PreprodBanner() {
  // Ne pas afficher le banner en production
  if (process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_ENVIRONMENT !== "preprod") {
    return null;
  }

  return (
    <div className="bg-yellow-500 text-black py-2 px-4 text-center text-sm font-medium">
      <div className="flex items-center justify-center gap-2">
        <AlertTriangle size={16} />
        <span>
          🚧 Site en pré-production - Version de développement - Ne pas indexer 🚧
        </span>
      </div>
    </div>
  );
}
