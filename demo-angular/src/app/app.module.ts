import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import {AppComponent} from "./app.component";
import { NativeScriptColorWheelModule } from 'nativescript-n6-color-wheel/angular';
import {AppRoutingModule} from '~/app/app-routing.module';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptColorWheelModule,
    ],
    declarations: [
        AppComponent,
        // ColorPickerModalComponent,
    ],
    entryComponents: [
        // ColorPickerModalComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
