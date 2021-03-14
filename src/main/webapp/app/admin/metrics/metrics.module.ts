import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectTestJenkinsSonarSharedModule } from 'app/shared/shared.module';

import { MetricsComponent } from './metrics.component';

import { metricsRoute } from './metrics.route';

@NgModule({
  imports: [ProjectTestJenkinsSonarSharedModule, RouterModule.forChild([metricsRoute])],
  declarations: [MetricsComponent],
})
export class MetricsModule {}
