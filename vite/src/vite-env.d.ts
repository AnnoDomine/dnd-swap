/// <reference types="vite/client" />
/// <reference types="unplugin-fonts/client" />

// Type declaration to create react components from SVG-files
declare module "*.svg" {
    import type * as React from "react";

    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

    const src: string;
    export default src;
}
