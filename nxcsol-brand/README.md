# NXCSOL logo files

| File | Use it for |
|---|---|
| `nxcsol-logo-transparent.png` | Dark backgrounds, websites, slides (white NXC, blue / and SOL, transparent background) |
| `nxcsol-logo-for-light-bg.png` | White or light backgrounds, documents, invoices (dark NXC) |
| `nxcsol-logo-dark.png` | Ready-made image on the brand background (#07090E), e.g. a social profile banner |
| `nxcsol-logo-animated.gif` | The animated logo, 1000x500, loops forever |
| `nxcsol-logo-animated-small.gif` | Same at 600x300, for WhatsApp and email signatures |
| `nxcsol-logo-animated.mp4` | Same at 1920x960; sharper and much smaller, best for Instagram and Facebook |

Colours: navy #07090E, white #EEF2FA, blue #3D7EFC. Font: Saira Semi Condensed Bold.

The animation goes NXC  SOL → NXC|SOL → SOL slides away → NXC rams the bar, which tips into the slash → NXC/SOL.

## source/

`logo-anim.html` is the animation itself (open it in a browser to watch it live). `render.mjs` re-renders every file above with headless Chrome; the GIF and MP4 are then made from its frames with ffmpeg.
