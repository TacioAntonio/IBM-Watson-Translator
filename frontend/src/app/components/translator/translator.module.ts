import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslatorComponent } from "./translator.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TranslatorComponent
  ],
  exports: [
    TranslatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TranslatorModule { }
