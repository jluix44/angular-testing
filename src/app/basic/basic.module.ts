import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { CharizardComponent } from './charizard/charizard.component';
import { FatherComponent } from './father/father.component';
import { SonComponent } from './son/son.component';



@NgModule({
    declarations: [
    CounterComponent,
    CharizardComponent,
    FatherComponent,
    SonComponent
  ],
    imports: [
        CommonModule
    ]
})
export class BasicModule { }
