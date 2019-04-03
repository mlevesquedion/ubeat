export default {
  sanitize: bio => bio.replace(/ <.*>/, '')
};
