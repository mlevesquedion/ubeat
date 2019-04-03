export default {
  sanitizeBio: bio => bio.replace(/ <.*>/, ''),
  sanitizeImage: image => image[5]['#text']
};
