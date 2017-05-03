import { Component, OnInit } from "@angular/core";
import { PerfectScrollbarConfigInterface } from "angular2-perfect-scrollbar";

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.html'
})
export class DashboardComponent implements OnInit {

    scrollbaConfig: PerfectScrollbarConfigInterface = {
        wheelSpeed: 1
    };

    lat: number = -23.5489;
    lng: number = -46.6388;
    zoom: number = 15;

    // lineChart
    public lineChartData: Array<any> = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
    ];
    public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartOptions: any = {
        responsive: true
    };

    public lineChartColors: Array<any> = [
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend: Boolean = false;
    public lineChartType: String = 'line';

    private options: Object;
    private chart: Object;

    constructor() {
        this.options = {
            title: {text: 'simple chart'},
            series: [{
                data: [29.9, 71.5, 106.4, 129.2],
            }]
        };
    }

    ngOnInit() {
    }

    public saveInstance(chartInstance) {
        this.chart = chartInstance;
    }

    public randomize(): void {
        let _lineChartData: Array<any> = new Array(this.lineChartData.length);
        for (let i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = {
                data: new Array(this.lineChartData[i].data.length),
                label: this.lineChartData[i].label
            };
            for (let j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    }

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}
