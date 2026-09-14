/// <reference types="@slidev/cli" />

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $slidev: {
      configs: Record<string, any>
      themeConfigs: Record<string, any>
      nav: Record<string, any>
      [key: string]: any
    }
    $nav: Record<string, any>
  }
}

export {}
