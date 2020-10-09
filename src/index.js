module.exports = function check(string, config) {
  let count=0;
  while (count<50) {
    string=string.replace(/\(\)/, '');
    string=string.replace(/\{\}/, '');
    string=string.replace(/\[\]/, '');
    string=string.replace(/\|\|/, '');
    string=string.replace(/12/, '');
    string=string.replace(/34/, '');
    string=string.replace(/56/, '');
    string=string.replace(/77/, '');
    string=string.replace(/88/, '');
    count++;
  }
  if (string!=='') return false;
  else return true;
}
