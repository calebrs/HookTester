async function alreadyExist(url) { // move to separate file later
  return await Url.findOne({ url }).exec();
}

function convertHeaders(arr) {
  // evens are keys
  // odds are values
  let obj = {}
  for (let i = 0; i < arr.length; i += 2) {
    obj[arr[i]] = arr[i+1];
  }
  console.log(obj);
  return obj;
}

module.exports = { alreadyExist, convertHeaders }
