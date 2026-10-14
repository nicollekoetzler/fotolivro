"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Sample = { src: string; title: string };

const EVENT = "sample-zoom";

export default function ZoomButton({ src, title, children }: Sample & { children: ReactNode }) {
  return (
    <button
      type="button"
      aria-label={`Ampliar amostra: ${title}`}
      onClick={() => window.dispatchEvent(new CustomEvent<Sample>(EVENT, { detail: { src, title } }))}
    >
      {children}
    </button>
  );
}

export function ZoomDialog() {
  const ref = useRef<HTMLDialogElement>(null);
  const [sample, setSample] = useState<Sample | null>(null);

  useEffect(() => {
    const open = (e: Event) => {
      setSample((e as CustomEvent<Sample>).detail);
      ref.current?.showModal();
    };
    window.addEventListener(EVENT, open);
    return () => window.removeEventListener(EVENT, open);
  }, []);

  return (
    <dialog
      ref={ref}
      className="modal"
      aria-label="Amostra da coleção digital"
      onClick={(e) => {
        if (e.target === ref.current) ref.current?.close();
      }}
    >
      <button type="button" aria-label="Fechar" onClick={() => ref.current?.close()}>
        ×
      </button>
      {sample && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={sample.src} alt={`Amostra: ${sample.title}`} />
          <p>{sample.title}</p>
        </>
      )}
    </dialog>
  );
}
