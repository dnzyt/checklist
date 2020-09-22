import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [], // common component, directives declared here
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    HttpClientModule
  ], // common components, directives, modules exported here, so other modules just need to import this module
  entryComponents: [] // not needed after ivy
})
export class SharedModule { }
