'use strict';

angular.module('core')
  .component('menuSettings', {
    bindings: {
      column: '='
    },
    template: `
      <div class="menu__settings">
        <div class="menu__settings--item" 
            ng-click="$ctrl.switchView(true)"
            ng-class="{'-active': $ctrl.column}">Vertical</div>
        <div class="menu__settings--item" 
            ng-click="$ctrl.switchView(false)"
            ng-class="{'-active': !$ctrl.column}">Horizontal</div>
      </div>`,
    controller: function () {
      let ctrl = this;

      this.switchView = val => {
        ctrl.column = val;
      }
    }
  });
