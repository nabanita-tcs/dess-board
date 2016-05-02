'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
    .directive('stats',function() {
    	return {
  		templateUrl:'scripts/directives/dashboard/stats/stats.html',
  		restrict:'E',
  		replace:true,
  		scope: {
        'model': '=',
        'comment1': '@',
        'number1': '@',
		'comment2': '@',
        'number2': '@',
        'name': '@',
        'colour': '@',
        'details':'@',
        'type':'@',
        'goto':'@',
		'title':'@'
  		}
  		
  	}
  });
