/* Motion tokens — keep in sync with the CSS vars in app/globals.css. */

export const DURATION = {
  fast: 0.18,
  base: 0.32,
  slow: 0.52,
} as const;

export const EASE = {
  out: [0.16, 1, 0.3, 1] as const,
  spring: [0.34, 1.56, 0.64, 1] as const,
};

export const STAGGER = {
  tight: 0.06,
  base: 0.09,
  loose: 0.14,
} as const;

export const REVEAL_DISTANCE = 16;
