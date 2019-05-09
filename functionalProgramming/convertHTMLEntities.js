
function getEntity(entity) {
  switch (entity) {
    case '<':
      return '&lt;';
      break;
    case '&':
      return '&amp;';
      break;
    case '>':
      return '&gt;';
      break;
    case '"':
      return '&quot;';
      break;
    case "'":
      return "&apos;";
      break;
    default:
      return entity;
  }
}

function convertHTML(str) {
  let arr = str.split('');
  let newStr = "";
  arr.forEach(char => newStr += getEntity(char));
  return newStr;
}


console.log(convertHTML("Dolce & Gabbana"));