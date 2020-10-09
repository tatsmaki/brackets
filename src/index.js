module.exports = function check(str, bracketsConfig) {
  let obj={'(': 0, ')': 0, '[': 0, ']': 0, '{': 0, '}': 0, '|': 0,};
  for (let i of str) {
    obj[i]++;
    if (i===')' && obj['(']<obj[')']) return false;
    if (i===']' && obj['[']<obj[']']) return false;
    if (i==='}' && obj['{']<obj['}']) return false;
  }
  if (obj['(']!==obj[')'] || 
      obj['[']!==obj[']'] || 
      obj['{']!==obj['}']) return false;
  else return true;
}
