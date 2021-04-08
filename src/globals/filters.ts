import Vue from 'vue';

Vue.filter('getYear', (timeStamp: string) => {
  if (timeStamp) {
    return timeStamp.substr(0, 4);
  }
  return timeStamp;
});

Vue.filter('DDMMYYYY', (timeStamp: string) => {
  if (timeStamp) {
    return timeStamp.substr(6, 2) + '/' + timeStamp.substr(4, 2) + '/' + timeStamp.substr(0, 4);
  }
  return timeStamp;
});
