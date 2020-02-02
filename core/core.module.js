'use strict';

angular.module('core', [])
    .run(['menu', function(menu) {

      // Menus registration

      menu.register('Hello',
        [
          {
            title: 'Man',
          },
          {
            title: 'how\'s',
            nodes: [
              {
                title: 'it',
                nodes: [
                  {
                    title: 'going?'
                  }
                ]
              },
            ]
          },
          {
            title: 'Cucumber',
          },
        ]);

      menu.register('Ok',
        [
          {
            title: 'cool',
          },
          {
            title: 'lol',
            nodes: [
              {
                title: 'kek',
              },
            ]
          },
        ]);

      menu.register('Empty', []);

}]);
