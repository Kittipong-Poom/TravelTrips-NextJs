import "leaflet";
import "leaflet-fullscreen";

declare module "leaflet" {
  namespace Control {
    // เพิ่มการประกาศให้ TypeScript รู้จัก fullscreen
    function fullscreen(options?: any): Control.Fullscreen;
  }

  namespace Control {
    interface Fullscreen extends Control {
      // คุณสามารถเพิ่ม options ที่ต้องการที่นี่ เช่นการตั้งค่า fullscreen
    }
  }
}
