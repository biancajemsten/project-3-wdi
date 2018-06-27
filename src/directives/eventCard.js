function eventCard() {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: './views/directives/eventCard.html',
    scope: {
      eventName: '=?',
      venueName: '=?',
      eventDate: '=?',
      venueAddress: '=?',
      venueTown: '=?',
      eventType: '=?',
      description: '=?',
      doorsopen: '=?',
      entryprice: '=?'
    }
  };
}

export default eventCard;
