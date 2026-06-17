/**
 * Shared blur-up placeholder for /public images.
 *
 * Next/Image only auto-generates blurDataURL for statically *imported* images.
 * Ours are served from /public by path, so we supply one manually: a tiny
 * 8×10 JPEG tinted to --bg-dark-2 (#0f1318). Combined with placeholder="blur"
 * it shows a faint dark blur immediately, fading to the real image on load —
 * so below-the-fold art never flashes an empty box while scrolling in.
 */
export const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAQTGF2YzYyLjI4LjEwMQD/2wBDAAgEBAQEBAUFBQUFBQYGBgYGBgYGBgYGBgYHBwcICAgHBwcGBgcHCAgICAkJCQgICAgJCQoKCgwMCwsODg4RERT/xABLAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAhABAAAAAAAAAAAAAAAAAAAAABEBAAAAAAAAAAAAAAAAAAAAAP/AABEIAAoACAMBIgACEQADEQD/2gAMAwEAAhEDEQA/AIkAYP/Z";
