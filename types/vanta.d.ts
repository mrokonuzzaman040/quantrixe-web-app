declare module "vanta/dist/vanta.dots.min" {
    import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
  
    export interface VantaOptions {
      el: HTMLElement;
      THREE: {
        PerspectiveCamera: typeof PerspectiveCamera;
        Scene: typeof Scene;
        WebGLRenderer: typeof WebGLRenderer;
      };
      mouseControls?: boolean;
      touchControls?: boolean;
      gyroControls?: boolean;
      minHeight?: number;
      minWidth?: number;
      scale?: number;
      scaleMobile?: number;
      color?: number;
      color2?: number;
      backgroundColor?: number;
      size?: number;
      spacing?: number;
      showLines?: boolean;
    }
  
    export interface VantaEffect {
      destroy(): void;
    }
  
    const VANTA: (options: VantaOptions) => VantaEffect;
    export default VANTA;
  }
  