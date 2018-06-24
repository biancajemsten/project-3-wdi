function filePicker(filepickerService) {
  return {
    restict: 'A',
    require: 'ngModel',
    link($scope, $element, attrs, ngModel) {
      $element.bind('click', (e) => {
        e.preventDefault();

        filepickerService.pick({
          accept: 'image/*',
          maxFiles: 1,
          transformations: { crop: { force: true, aspectRation: 3/2 } }
        }, data => {
          console.log(data);
          ngModel.$setViewValue(data.url);
        });
      });
    }
  };
}

export default filePicker;
