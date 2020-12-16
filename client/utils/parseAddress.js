const parseAddress = (address) => {
  let parts = address.split(',');
  let trimmed = parts.map(part => {
    return part.trim();
  });

  for (let i = 0; i < trimmed.length; i++) {
    let current;
    if (i) {
      current = trimmed[i].split(' ');
      for (let j = 0; j < current.length; j++) {
        current[j] = '+' + current[j];
      }
      current = current.join('');
    } else {
      current = trimmed[0].split(' ').join('+');
    }
    trimmed[i] = current;
  }
  return trimmed.join('');
};

export default parseAddress;