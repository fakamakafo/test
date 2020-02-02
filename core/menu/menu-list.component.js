'use strict';

angular.module('core')
  .component('menuList', {
    template: `
      <script type="text/ng-template" id="categoryTree">
        <span 
          ng-class="{'-caret': category.nodes.length, '-active': category.opened}" 
          ng-bind="category.title"
          ng-click="$ctrl.getNodes(category)"></span>
        
        <ul class="menu -submenu"          
          ng-show="category.nodes && category.opened"> 
            <li class="menu__item" 
              ng-repeat="category in category.nodes" 
              ng-include="'categoryTree'"></li>
        </ul>
      </script>
      
      <menu-settings column="$ctrl.columnView"></menu-settings>

      <ul class="menu" ng-class="{'-horizontal': !$ctrl.columnView}">
        <li ng-repeat="category in $ctrl.menusArr"
          class="menu__item"
          ng-include="'categoryTree'"></li>
      </ul>`,
    controller: function (menu) {
      let ctrl = this;
      this.menusArr = [];

      this.getNodes = category => {
        category.opened = !category.opened;
        console.log(category.title);
      };

      this.$onInit = () => {
        let arr = Array.from(menu.get());

        arr.forEach(el => {
          ctrl.menusArr.push(el[1]);
        });

        ctrl.columnView = true;
      }

    }
  });
