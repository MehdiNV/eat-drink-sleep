import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { MultiIntegrationButtonComponent } from '../multi-integration-button/multi-integration-button.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page,MultiIntegrationButtonComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class Tab3PageModule {}
