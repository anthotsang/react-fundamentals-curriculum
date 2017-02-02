import moment from 'moment'

export function getDate (dt) {
  const date = moment(dt * 1000);
  return date.format("dddd, MMM D");
}
