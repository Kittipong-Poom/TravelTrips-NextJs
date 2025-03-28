// /src/leaflet-extensions.ts
/* eslint-disable @typescript-eslint/no-namespace */
import "leaflet";

declare module "leaflet" {
  interface Control {
    fullscreen: (options?: FullscreenOptions) => Control.Fullscreen;
  }

  namespace control {
    function fullscreen(options?: FullscreenOptions): Control.Fullscreen;
  }

  namespace Control {
    interface Fullscreen {
      addTo(map: L.Map): this;
    }
  }

  interface FullscreenOptions {
    position?: L.ControlPosition;
    title?: string;
    titleCancel?: string;
    content?: string;
    forceSeparateButton?: boolean;
    forcePseudoFullscreen?: boolean;
    fullscreenElement?: boolean;
  }
}
