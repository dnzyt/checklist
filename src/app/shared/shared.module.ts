import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [], // common component, directives declared here
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule
  ], // common components, directives, modules exported here, so other modules just need to import this module
  entryComponents: [] // not needed after ivy
})
export class SharedModule { }
