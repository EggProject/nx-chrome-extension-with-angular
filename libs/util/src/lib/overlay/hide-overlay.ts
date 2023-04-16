import { timer } from 'rxjs';
import { APP_INITIALIZER } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export function hideOverlay(document: Document) {
  return () => {
    return new Promise<void>((resolve) =>
      timer(3000).subscribe(() => {
        document.getElementById('main-loader')?.classList.add('finished');

        resolve();

        timer(2000).subscribe(() => {
          document.getElementById('main-loader')?.remove();
        });
      })
    );
  };
}

export const hideOverlayProvider = {
  provide: APP_INITIALIZER,
  useFactory: hideOverlay,
  deps: [DOCUMENT],
  multi: true,
};
