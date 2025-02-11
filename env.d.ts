declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<any, {}, any>
    export default component
}

declare const PROD: boolean
declare const DEV: boolean
declare const TEST: boolean