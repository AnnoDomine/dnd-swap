/// <reference types="vite/client" />
/// <reference types="unplugin-fonts/client" />

declare module "*.svg" {
    import type * as React from "react";

    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

    const src: string;
    export default src;
}
