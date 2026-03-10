export {};

declare global {
  interface Grecaptcha {
    ready(callback: () => void): void;
    execute(siteKey: string, options: { action: string }): Promise<string>;
    render(container: string | HTMLElement, parameters: Record<string, unknown>): void;
  }

  interface Window {
    grecaptcha?: Grecaptcha;
  }
}