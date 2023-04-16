import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {hideOverlayProvider} from "@app-grpc-networks-chrome-extension/util";

(async () => {
  const app = await createApplication({
    providers: [importProvidersFrom(BrowserAnimationsModule),hideOverlayProvider],
  });

  const appElement = createCustomElement(AppComponent, {
    injector: app.injector,
  });

  customElements.define('app-dev-tools-panel', appElement);
})();
