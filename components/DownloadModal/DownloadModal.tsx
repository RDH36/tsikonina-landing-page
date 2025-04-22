"use client";

import { Download } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

interface DownloadModalProps {
  children: React.ReactNode;
}

export function DownloadModal({ children }: DownloadModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Télécharger Tsikonina</DialogTitle>
          <DialogDescription>
            La version demo de Tsikonina est disponible uniquement pour Android.
            Téléchargez-la pour découvrir la cuisine malgache!
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-6 py-4">
          <div className="flex flex-col gap-4">
            <p className="text-sm text-center text-muted-foreground">
              Cliquez sur le bouton ci-dessous pour télécharger la version demo
            </p>

            <div className="flex justify-center">
              <Button className="gap-2 px-8 py-6 text-lg cursor-pointer">
                <Link
                  href="https://drive.google.com/uc?export=download&id=1V66gkLwvzKFrbOvOG0ERfMxeeSJHZR64"
                  target="_blank"
                  className="flex items-center"
                >
                  <Download size={20} />
                  Télécharger pour Android
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          <DialogDescription>
            Version Demo 0.1.0 - Usage limité à des fins de test
          </DialogDescription>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
