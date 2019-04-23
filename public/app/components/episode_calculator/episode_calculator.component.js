(function () {
  'use strict'

  angular.module('app')
    .component('episodeCalculator', {
      controller: episodeCalculatorCtrl,
      templateUrl: 'app/components/episode_calculator/episode_calculator.template.html', // episode_calculator BAR TEMPLATE
    })



  episodeCalculatorCtrl.$inject = ['rgService']

  function episodeCalculatorCtrl(rgService) {

    const vm = this;
    vm.$onInit = onInit;
    vm.marketPen = marketPen;
    vm.Pricing = Pricing;
    vm.CostCalc = CostCalc;
    vm.ProfitCalc = ProfitCalc;
    vm.Market = Market;
    vm.Update = Update;
    let cost;
    let netRevenue;

    function onInit() {
      console.log("episode_calculator component")
      vm.totalMarket = 0;
    }
    // Select what the size of Supported headset market is
    function Market(headset, checked) {
      // console.log(headset, checked);
      switch (headset) {
        case 'oculus':
          if (checked) {
            vm.totalMarket += 3300000;
          } else {
            vm.totalMarket -= 3300000;
          }
          break;
        case 'vive':
          if (checked) {
            vm.totalMarket += 1900000;
          } else {
            vm.totalMarket -= 1900000;
          }
          break;

        case 'wmr':
          if (checked) {
            vm.totalMarket += 450000;
          } else {
            vm.totalMarket -= 450000;
          }
          break;

        case 'psvr':
          if (checked) {
            vm.totalMarket += 4200000;
          } else {
            vm.totalMarket -= 4200000;
          }
          break;

        default:
          break;
      }
      vm.totalMarketStr = (vm.totalMarket).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function marketPen() {
      vm.unitStr = ((vm.market_penetration_percent / 100) * vm.totalMarket).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      vm.units = ((vm.market_penetration_percent / 100) * vm.totalMarket);
    }

    function Pricing() {
      vm.priceStr = (vm.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      vm.grossRevenueStr = (vm.price * vm.units).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function CostCalc() {
      vm.footageCostStr = (vm.footageCost * vm.footageWorkDays).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      vm.softwareCostStr = (vm.softwareCost * vm.softwareWorkDays).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      vm.marketingCostStr = (vm.marketingCost * vm.marketingWorkDays).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      let costPreOverhead = ((vm.footageCost * vm.footageWorkDays) + (vm.softwareCost * vm.softwareWorkDays) + (vm.marketingCost * vm.marketingWorkDays));

      let overheadCostPct = (vm.overheadPercent / 100)
      vm.overheadCostStr = (overheadCostPct * costPreOverhead).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      let totalCost = (overheadCostPct * costPreOverhead) + costPreOverhead;
      cost = totalCost

      ProfitCalc();
    }
    // Net Revenue = (Gross Revenue) - (Total man hours cost) - (overhead % ) - (marketing cost) - (app store commisions)

    function ProfitCalc() {
      let grossRevenue = (vm.price * vm.units)
      let marketCut = (grossRevenue * 0.30)
      let netProfit = (grossRevenue - cost - marketCut)
      let totalCost = cost + marketCut;
      vm.totalCostStr = (totalCost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      vm.costStr = (cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      vm.marketCut = (marketCut).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      vm.netRevenueStr = (grossRevenue - cost - marketCut).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      let roi = ((netProfit / cost) * 100).toFixed(2);
      vm.roiStr = (roi).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

      let grossMargin = (((grossRevenue - cost - marketCut) / grossRevenue) * 100);
      vm.grossMarginStr = (grossMargin).toFixed(2);
      console.errorr("grossMargin: ", grossMargin)
    }

    function Update() {
      Market()
      marketPen()
      Pricing()
      CostCalc()
      ProfitCalc()
    }


  } // END mainController
}());