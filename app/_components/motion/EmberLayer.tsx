"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

const init = async (engine: Engine) => {
  await loadSlim(engine);
};

/**
 * Atmosphere ember particles drifting up across the entire viewport.
 * Fixed behind content, no pointer events. Hides entirely when
 * reduced-motion is requested.
 */
export function EmberLayer() {
  const reduced = useReducedMotion();
  const [coarse, setCoarse] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: none), (pointer: coarse)");
    const handler = () => setCoarse(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      // Cap at 30fps — atmosphere particles don't need 60. Halves the
      // canvas redraw cost (and the recomposite it triggered each frame).
      fpsLimit: 30,
      detectRetina: true,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      particles: {
        // Fewer particles → less per-frame work + less memory.
        number: { value: coarse ? 16 : 28, density: { enable: true } },
        color: { value: ["#ff2a3d", "#ff7a3d", "#ffb14c"] },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.15, max: 0.6 },
          animation: {
            enable: true,
            speed: 0.6,
            sync: false,
            startValue: "random",
          },
        },
        size: { value: { min: 0.8, max: 2.4 } },
        move: {
          enable: true,
          direction: "top",
          speed: { min: 0.15, max: 0.6 },
          straight: false,
          random: true,
          outModes: { default: "out", top: "destroy", bottom: "none" },
        },
        wobble: {
          enable: true,
          distance: 6,
          speed: { min: -2, max: 2 },
        },
      },
      emitters: [
        {
          direction: "top",
          rate: { delay: 0.4, quantity: 1 },
          position: { x: 50, y: 110 },
          size: { width: 100, height: 0 },
        },
      ],
    }),
    [coarse]
  );

  if (reduced) return null;

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <ParticlesProvider init={init}>
        <Particles id="ember-layer" options={options} />
      </ParticlesProvider>
    </div>
  );
}
