import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, NavigationEnd } from '@angular/router';
import {ProcessesService} from '../../services/ProcessesServices';
import 'rxjs/add/operator/map';
import { ProcessModel } from '../../models/ProcessModel';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {


    constructor(private processService : ProcessesService, private dataModel : ProcessModel) {
        }

        loadProcesses(): Observable<any>[]{
            this.processService.getAbBotProcesses().subscribe(
                processes => {
                this.dataModel.UXI = blue_applications['value'].map(blue_applications => blue_applications.UXI);
            
                console.log(this.convertToDecimal(this.dataModel.UXI_WEIGHT));
    
                this.barChartLabels = [this.machine_names];
                this.barChartData2 = [
                    { data: this.dataModel.UXI, label: 'Uxi' },               
                    { data: this.dataModel.UXI_WEIGHT, label: 'Uxi Weight' },  
                    { data: this.dataModel.PERFORMANCE_INDEX, label: 'Performance Index' },  
                    { data: this.dataModel.PERFORMANCE_WEIGHT, label: 'Perfomance Weight' }
                ];  
            },
        );
        err => {
            console.log(err);
          }
    

    ngOnInit() {}
}
