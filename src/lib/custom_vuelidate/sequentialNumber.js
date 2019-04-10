import { helpers } from "vuelidate/lib/validators/index";

export const sequentialNumber = ( length ) =>
  helpers.withParams({
    name: 'sequentialNumber',
    length: length
  }, function (value) {
    for(var i in value) {
      var n = 0
      var checkStr = ''
      while (n < length){
        checkStr += (parseInt(value[i]) + n) + ''
        n++
      }
      if (value.indexOf(checkStr) !=-1) {
        return false
      }
    }
    return true
  })

