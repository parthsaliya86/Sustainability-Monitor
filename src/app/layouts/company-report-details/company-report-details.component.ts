import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'smart-webcomponents-angular/chart';
import { sampleDataEx } from "./charts-data";

@Component({
  selector: 'app-company-report-details',
  templateUrl: './company-report-details.component.html',
  styleUrls: ['./company-report-details.component.css']
})
export class CompanyReportDetailsComponent implements OnInit {

  constructor() {
  }
  @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;

  // Charts 1 Data
  caption = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  description = "Lorem ipsum dolor sit amet.";
  showLegend = false;
  padding = { left: 10, top: 10, right: 15, bottom: 10 };
  titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
  dataSource = [
    { Day: 'Monday', Running: 30, Swimming: 10, Cycling: 25, Goal: 40 },
    { Day: 'Tuesday', Running: 25, Swimming: 15, Cycling: 10, Goal: 50 },
    { Day: 'Wednesday', Running: 30, Swimming: 10, Cycling: 25, Goal: 60 },
    { Day: 'Thursday', Running: 40, Swimming: 20, Cycling: 25, Goal: 40 },
    { Day: 'Friday', Running: 45, Swimming: 20, Cycling: 25, Goal: 50 },
    { Day: 'Saturday', Running: 30, Swimming: 20, Cycling: 30, Goal: 60 },
    { Day: 'Sunday', Running: 20, Swimming: 30, Cycling: 10, Goal: 90 }
  ];
  colorScheme = 'scheme13';
  xAxis = {
    dataField: 'Day',
    unitInterval: 2,
    tickMarks: { visible: true, unitInterval: 1 },
    gridLines: { visible: true, unitInterval: 1 },
    valuesOnTicks: false,
    padding: { bottom: 10 }
  };
  valueAxis = {
    unitInterval: 10,
    minValue: 0,
    maxValue: 50,
    title: { text: 'Time in minutes<br><br>' },
    labels: { horizontalAlignment: 'right' }
  };
  seriesGroups1 = [
    {
      type: 'spline',
      series: [
        {
          dataField: 'Swimming',
          symbolType: 'square',
          labels: {
            visible: true,
            backgroundColor: '#FEFEFE',
            backgroundOpacity: 0.2,
            borderColor: '#7FC4EF',
            borderOpacity: 0.7,
            padding: { left: 5, right: 5, top: 0, bottom: 0 }
          }
        },
        {
          dataField: 'Running',
          symbolType: 'square',
          labels: {
            visible: true,
            backgroundColor: '#FEFEFE',
            backgroundOpacity: 0.2,
            borderColor: '#7FC4EF',
            borderOpacity: 0.7,
            padding: { left: 5, right: 5, top: 0, bottom: 0 }
          }
        }
      ]
    }
  ]

  // Charts2 Data
  sampleData = sampleDataEx;
  monthFormatter = new Intl.DateTimeFormat('en', { month: 'short' });
  toolTipCustomFormatFn = (value: any, itemIndex: any, serie: any, group: any, xAxisValue: any) => {
    const dataItem = this.sampleData[itemIndex], volume = dataItem.SPVolume;
    return `<div style='text-align: left;'>
                        <b>Date:</b> ${xAxisValue.getDate()}-${this.monthFormatter.format(xAxisValue)}-${xAxisValue.getFullYear()}</b>
                        <br />
                        <b>Index value:</b> ${value}
                        <br />
                        <b>Daily volume:</b> ${volume}
                    </div>`;
  };
  caption2 = 'H&D 500 Index value and daily volume';
  description2 = '(June 2020 - November 2021)';
  animationDuration = 1500;
  enableCrosshairs = true;
  padding2 = { left: 20, top: 5, right: 20, bottom: 5 };
  colorScheme2 = 'scheme17';
  dataSource2 = this.sampleData;
  xAxis2 = {
    dataField: 'Date',
    type: 'date',
    valuesOnTicks: true,
    labels: {
      formatFunction: (value: Date) => {
        return value.getDate() + '-' + this.monthFormatter.format(value) + '<br>' + value.getFullYear().toString();
      }
    },
    gridLines: { visible: false },
    rangeSelector: {
      visible: true,
      size: 100,
      padding: { top: 10, bottom: 0 },
      dataField: 'SPClose',
      baseUnit: 'month',
      gridLines: {
        visible: false
      },
      formatFunction: (value: Date) => {
        return this.monthFormatter.format(value) + '\'' + value.getFullYear().toString().substring(2);
      }
    }
  };
  
  seriesGroups2 : any = [
    {
      type: 'line',
      linesUnselectMode: 'click',
      toolTipFormatFunction: this.toolTipCustomFormatFn,
      valueAxis: {
        title: { text: 'H&D 500<br>' },
        gridLines: { visible: false }
      },
      series: [
        {
          dataField: 'SPClose',
          displayText: 'H&D Index Value',
          lineWidth: 1
        }
      ]
    },
    {
      type: 'area',
      toolTipFormatFunction: this.toolTipCustomFormatFn,
      linesUnselectMode: "click",
      valueAxis: {
        position: 'right',
        title: { text: '<br>Daily Volume' },
        gridLines: { visible: false },
        labels: {
          formatFunction: function (value : any) {
            return value / 1000000 + 'M';
          }
        }
      },
      series: [
        {
          dataField: 'SPVolume',
          displayText: 'H&D Index Volume',
          lineWidth: 1,
          opacity: 0.2
        }
      ]
    }
  ];

  // charts3

  source = [{ Browser: 'Chrome', Share: 68.95 }, { Browser: 'Firefox', Share: 10.67 }, { Browser: 'Internet Explorer', Share: 6.42 }, { Browser: 'Safari', Share: 5.35 }, { Browser: 'Edge', Share: 4.2 }, { Browser: 'Other', Share: 4.67 }];
  caption3 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  description3 = '(source: gs.statcounter.com)';
  showLegend3 = true;
  showBorderLine = true;
  legendPosition = { left: 520, top: 140, width: 100, height: 100 };
  padding3 = { left: 5, top: 5, right: 5, bottom: 5 };
  titlePadding3 = { left: 0, top: 0, right: 0, bottom: 10 };
  dataSource3 = this.source;
  seriesGroups3 = [
    {
      type: 'pie',
      showLabels: true,
      series: [
        {
          dataField: 'Share',
          displayText: 'Browser',
          labelRadius: 120,
          initialAngle: 15,
          radius: 170,
          centerOffset: 0,
          formatFunction: function (value : any) {
            if (isNaN(value)) {
              // Legend labels formatting
              return value;
            }
            return parseFloat(value) + '%';
          },
          useGradientColors: false
        }
      ]
    }
  ];


  // chars4
  sampleData4 = [
    { Day: 'Monday', 'Oklahoma City': 37, Sofia: 8, Bruges: 18 },
    { Day: 'Tuesday', 'Oklahoma City': 29, Sofia: 11, Bruges: 16 },
    { Day: 'Wednesday', 'Oklahoma City': 27, Sofia: 8, Bruges: 29 },
    { Day: 'Thursday', 'Oklahoma City': 37, Sofia: 14, Bruges: 29 },
    { Day: 'Friday', 'Oklahoma City': 37, Sofia: 11, Bruges: 27 },
    { Day: 'Saturday', 'Oklahoma City': 39, Sofia: 6, Bruges: 24 },
    { Day: 'Sunday', 'Oklahoma City': 42, Sofia: 8, Bruges: 21 }
  ];
  borderLineColor4 = '#808080';
  caption4 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  description4 = 'Lorem ipsum dolor sit amet.';
  showLegend4 = true;
  padding4 = { left: 5, top: 5, right: 5, bottom: 5 };
  titlePadding4 = { left: 90, top: 0, right: 0, bottom: 10 };
  dataSource4 = this.sampleData4;
  xAxis4 = {
    dataField: 'Day',
    gridLines: {
      visible: true,
      color: '#404040',
      step: 1
    },
    tickMarks: {
      visible: true,
      color: '#000000',
      step: 2
    },
    valuesOnTicks: false
  };
  valueAxis4 = {
    description: 'Time in minutes',
    gridLines: {
      visible: true,
      color: '#404040',
      step: 2
    },
    tickMarks: {
      visible: true,
      color: '#000000',
      step: 1
    },
    axisSize: 'auto'
  };
  seriesGroups44 = [
    {
      type: 'line',
      useGradientColors: true,
      series: [
        { dataField: 'Sofia', fillColor: '#048BA8' },
        { dataField: 'Bruges', fillColor: '#16DB93' }
      ]
    },
    {
      type: 'stackedline',
      series: [
        { dataField: 'Oklahoma City', symbolType: 'circle', symbolSize: 10, fillColorSymbol: '#3587CE', fillColor: '#3587CE', lineColor: '#0459A8' }
      ]
    }
  ];

  // chars5
  sampleData5 = [
    { Day: 'Monday', 'Oklahoma City': 37, Sofia: 8, Bruges: 18 },
    { Day: 'Tuesday', 'Oklahoma City': 29, Sofia: 11, Bruges: 16 },
    { Day: 'Wednesday', 'Oklahoma City': 27, Sofia: 8, Bruges: 29 },
    { Day: 'Thursday', 'Oklahoma City': 37, Sofia: 14, Bruges: 29 },
    { Day: 'Friday', 'Oklahoma City': 37, Sofia: 11, Bruges: 27 },
    { Day: 'Saturday', 'Oklahoma City': 39, Sofia: 6, Bruges: 24 },
    { Day: 'Sunday', 'Oklahoma City': 42, Sofia: 8, Bruges: 21 }
  ];
  borderLineColor5 = '#808080';
  caption5 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  description5 = 'Lorem ipsum dolor sit amet.';
  showLegend5 = true;
  padding5 = { left: 5, top: 5, right: 5, bottom: 5 };
  titlePadding5 = { left: 90, top: 0, right: 0, bottom: 10 };
  dataSource5 = this.sampleData4;
  xAxis5 = {
    dataField: 'Day',
    gridLines: {
      visible: true,
      color: '#404040',
      step: 1
    },
    tickMarks: {
      visible: true,
      color: '#000000',
      step: 2
    },
    valuesOnTicks: false
  };
  valueAxis5 = {
    description: 'Time in minutes',
    gridLines: {
      visible: true,
      color: '#404040',
      step: 2
    },
    tickMarks: {
      visible: true,
      color: '#000000',
      step: 1
    },
    axisSize: 'auto'
  };
  seriesGroups55 = [
    {
      type: 'steparea',
      useGradientColors: true,
      series: [
        { dataField: 'Sofia', fillColor: '#16DB93' },
        { dataField: 'Bruges', fillColor: '#048BA8' }
      ]
    }
  ];

  // chars6
  sampleData6 = [
    { Day: 'Monday', 'Oklahoma City': 37, Sofia: 8, Bruges: 18 },
    { Day: 'Tuesday', 'Oklahoma City': 29, Sofia: 11, Bruges: 16 },
    { Day: 'Wednesday', 'Oklahoma City': 27, Sofia: 8, Bruges: 29 },
    { Day: 'Thursday', 'Oklahoma City': 37, Sofia: 14, Bruges: 29 },
    { Day: 'Friday', 'Oklahoma City': 37, Sofia: 11, Bruges: 27 },
    { Day: 'Saturday', 'Oklahoma City': 39, Sofia: 6, Bruges: 24 },
    { Day: 'Sunday', 'Oklahoma City': 42, Sofia: 8, Bruges: 21 }
  ];
  borderLineColor6 = '#808080';
  caption6 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  description6 = 'Lorem ipsum dolor sit amet.';
  showLegend6 = true;
  padding6 = { left: 5, top: 5, right: 5, bottom: 5 };
  titlePadding6 = { left: 90, top: 0, right: 0, bottom: 10 };
  dataSource6 = this.sampleData4;
  xAxis6 = {
    dataField: 'Day',
    gridLines: {
      visible: true,
      color: '#404040',
      step: 1
    },
    tickMarks: {
      visible: true,
      color: '#000000',
      step: 2
    },
    valuesOnTicks: false
  };
  valueAxis6 = {
    description: 'Time in minutes',
    gridLines: {
      visible: true,
      color: '#404040',
      step: 2
    },
    tickMarks: {
      visible: true,
      color: '#000000',
      step: 1
    },
    axisSize: 'auto'
  };
  seriesGroups66 = [
    {
      type: 'waterfall',
      useGradientColors: true,
      series: [
        { dataField: 'Sofia', fillColor: '#16DB93' },
        { dataField: 'Bruges', fillColor: '#048BA8' }
      ]
    }
  ];
  ngOnInit(): void {
    // onInit code.
  }

  ngAfterViewInit(): void {
  }

  
}