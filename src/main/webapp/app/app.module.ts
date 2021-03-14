import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ProjectTestJenkinsSonarSharedModule } from 'app/shared/shared.module';
import { ProjectTestJenkinsSonarCoreModule } from 'app/core/core.module';
import { ProjectTestJenkinsSonarAppRoutingModule } from './app-routing.module';
import { ProjectTestJenkinsSonarHomeModule } from './home/home.module';
import { ProjectTestJenkinsSonarEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ProjectTestJenkinsSonarSharedModule,
    ProjectTestJenkinsSonarCoreModule,
    ProjectTestJenkinsSonarHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ProjectTestJenkinsSonarEntityModule,
    ProjectTestJenkinsSonarAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class ProjectTestJenkinsSonarAppModule {}
