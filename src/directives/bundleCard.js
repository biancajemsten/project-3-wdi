function bundleCard() {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: './views/directives/bundleCard.html',
    scope: {
      image: '=',
      title: '='
    }
  };
}

export default bundleCard;
