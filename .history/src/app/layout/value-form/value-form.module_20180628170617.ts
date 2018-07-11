import { CommonModule } from '@angular/common';

import { ValueRoutingModule } from './queue-routing.module';
import { QueuePageComponent } from './';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, QueuePageRoutingModule, PageHeaderModule],
    declarations: [QueuePageComponent]
})
export class QueuePageModule {}