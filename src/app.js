import angular from 'angular';
import '@uirouter/angularjs';
import Router from './config/routes';

import 'bulma';

angular.module('bundleApi', ['ui.router'])
  .config(Router);
