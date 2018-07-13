import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueuePageRoutingModule } from './queue-routing.module';
import { QueuePageComponent } from './queue.component';

@NgModule({
    imports: [CommonModule, QueuePageRoutingModule],
    declarations: [QueuePageComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class QueuePageModule {}