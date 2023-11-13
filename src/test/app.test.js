function rle(input, compress = true) {
  if (typeof input !== 'string' && !(input instanceof String)) {
    throw new Error('InvalidType');
  }

  if (compress) {
    return compressRLE(input);
  } else {
    return decompressRLE(input);
  }
}

function compressRLE(input) {
  if (input.length === 0) {
    return '';
  }

  let result = '';
  let count = 1;

  for (let i = 1; i < input.length; i++) {
    if (input[i] === input[i - 1]) {
      count++;
    } else {
      result += input[i - 1] + (count > 1 ? count : '');
      count = 1;
    }
  }

  result += input[input.length - 1] + (count > 1 ? count : '');

  return result;
}

function decompressRLE(input) {
  if (input.length === 0) {
    return '';
  }

  let result = '';
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    if (isNaN(parseInt(input[i]))) {
      count = parseInt(input[i]) || 1;
      result += input[i].repeat(count);
    }
  }

  return result;
}

module.exports = rle;
