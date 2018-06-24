import angular from 'angular';

import Router from './config/routes';

angular.module('bundle-api', ['angular'])
  .config(Router); 
