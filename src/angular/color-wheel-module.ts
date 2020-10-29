import { NgModule } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';

import { DIRECTIVES } from './color-wheel-directives';

@NgModule({
  declarations: [DIRECTIVES],
  exports: [DIRECTIVES]
})
export class NativeScriptColorWheelModule {}

registerElement('ColorWheel', () => require('nativescript-n6-color-wheel').ColorWheel);
