(function () {
  'use strict'

  angular.module('app')
    .component('home', {
      controller: homeCtrl,
      templateUrl: 'app/components/home/home.template.html', // home BAR TEMPLATE
    })

  homeCtrl.$inject = ['rgService']

  function homeCtrl(rgService) {

    const vm = this;
    vm.$onInit = onInit;
    vm.marketPen = marketPen;
    vm.Pricing = Pricing;
    vm.CostCalc = CostCalc;
    vm.ProfitCalc = ProfitCalc;
    vm.Market = Market;
    vm.Update = Update;

    function onInit() {
      console.log("home component")
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
      vm.grossProfitStr = (vm.price * vm.units).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function CostCalc() {
      vm.costStr = (vm.cost * vm.workDays).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      ProfitCalc();
    }

    function ProfitCalc() {
      let cost = (vm.cost * vm.workDays);
      let profit = (vm.price * vm.units)
      let marketCut = (profit * 0.30)
      let netProfit = (profit - cost - marketCut)
      console.log(marketCut);
      vm.marketCut = (marketCut).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      vm.netProfitStr = (profit - cost - marketCut).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      let roi = ((netProfit / cost) * 100).toFixed(2);
      vm.roiStr = (roi).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
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