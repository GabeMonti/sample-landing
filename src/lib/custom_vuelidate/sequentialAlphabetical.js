import { helpers } from "vuelidate/lib/validators/index";

export const sequentialAlphabetical = ( length ) =>
  helpers.withParams({
    name: 'sequentialAlphabetical',
    length: length
  }, function (value) {
    for(var i in value) {
      var n = 0
      var checkStr = ''
      while (n < length){
        checkStr += String.fromCharCode(value   .charCodeAt(i) + n)
        n++
      }
      if (value.indexOf(checkStr) !=-1) {
        return false
      }
    }
    return true
  })
