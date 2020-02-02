'use strict';

angular.module('core')
  .service('menu', [function () {

    let storage = new Map();

    class Item {
      constructor(title, nodes = []) {
        this.title = title;
        this.nodes = nodes;
      }
    }

    /**
     * Validate params types
     * @param title
     * @param nodes
     * @returns {boolean}
     */
    let validator = (title, nodes) => {
      let check = true;

      check = check && typeof title === 'string';
      check = check && (nodes === undefined || Array.isArray(nodes));

      if (check && Array.isArray(nodes) && nodes.length) {
        nodes.forEach(el => {
          check = check && validator(el.title, el.nodes);
        })
      }

      return check;
    };

    /**
     * Register Menu instance
     * @param title {string} - node title
     * @param nodes {Object[]} - node childs
     */
    this.register = (title, nodes) => {
      if (validator(title, nodes)) {
        storage.set(title, new Item(title, nodes));
      } else {
        throw new TypeError('Registered menu is not valid');
      }
    };

    /**
     * Get menus storage or particular node
     * @param title {string} - node title
     * @returns {Map<any, any>}
     */
    this.get = (title = undefined) => !title ? storage: storage.get(title);

  }]);
