require("./styles/main.scss");

import angular from 'angular';
import TreeFormComponent from './components/tree-form';
import NavbarComponent from './components/navbar';
import FooterComponent from './components/footer';

angular.module('app', []);
angular.module('app').component('cfoTreeForm', TreeFormComponent);
angular.module('app').component('cfoNavbar', NavbarComponent);
angular.module('app').component('cfoFooter', FooterComponent);
