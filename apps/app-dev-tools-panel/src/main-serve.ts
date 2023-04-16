import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationRef, importProvidersFrom } from '@angular/core';
import {hideOverlayProvider} from "@app-grpc-networks-chrome-extension/util";

const ref = bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule),hideOverlayProvider],
}).catch((err) => console.error(err));

ref.then((app) => {
  if ((app as ApplicationRef).components[0].instance instanceof AppComponent) {
    debugFill((app as ApplicationRef).components[0].instance);
  }
});

function debugFill(appComponent: AppComponent): void {}
