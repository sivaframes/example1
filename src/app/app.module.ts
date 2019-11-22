import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { HeaderComponent } from './header/header.component';
import { TablerComponent } from './tabler/tabler.component';
import { FooterComponent } from './footer/footer.component';
import { FirstupperPipe } from './firstupper.pipe';
import { DataconversionPipe } from './dataconversion.pipe';
import { FilteringclgnamesPipe } from './filteringclgnames.pipe';
import {StudentmarksComponent} from "./studentmarks/studentmarks.component"


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    HeaderComponent,
    TablerComponent,
    FooterComponent,
    FirstupperPipe,
    DataconversionPipe,
    FilteringclgnamesPipe,
    StudentmarksComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
