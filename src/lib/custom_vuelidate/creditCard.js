import { helpers } from 'vuelidate/lib/validators'

var _common = require("../../../node_modules/vuelidate/lib/validators/common.js")
var _cards = require("./cardtypes.js")
var _cardTypes = _cards.cardTypes

export const creditCard = (creditCard, type = "number") =>
  helpers.withParams({
    name: 'creditCard',
    type: type,
    value: creditCard
  }, function (value, parentVm) {

    if( creditCard && type == "cvv" ) {
      var cardNumber = (0, _common.ref)(creditCard, this, parentVm) ? (0, _common.ref)(creditCard, this, parentVm) : null
      if( !cardNumber ) return true
      if (cardNumber !== null) {
        var card = getCardType(cardNumber)
        var validCVV = validateCVV(value, card)
        return validCVV
      } else {
        return false
      }
    } else if( creditCard && type == "expirationDate" ) {
      var cardNumber = (0, _common.ref)(creditCard, this, parentVm) ? (0, _common.ref)(creditCard, this, parentVm) : null
      if( !cardNumber ) return true
      return validateExpiry(value)

    } else {

      if( value ) {
        var card = getCardType(value)
        if (card !== null) {
          if (!isValidLength(value, card)) {
            return false
          }
          return true
        } else {
          return false
        }
      } else {
        return true
      }

    }

  })

var getCardType = function(number) {

  number = number.replace(/\s/g, "")

  for(var _l = 0; _l < _cardTypes.length; _l++) {

    if( _cardTypes[_l].hasOwnProperty('pattern') && _cardTypes[_l].pattern.test(number) ) {

      return _cardTypes[_l]

    } else if(_cardTypes[_l].hasOwnProperty('range')) {

      var bin = number.substr(0, 6)

      if( isNaN(bin) ) {
        return null
      }

      for(var _r = 0; _r < _cardTypes[_l].range.length; _r++) {

        if(_cardTypes[_l].range[_r][0] <= bin && bin <= _cardTypes[_l].range[_r][1])
          return _cardTypes[_l]
      }

    }
  }

  return null

}

var isValidLength = function(number, card) {
  var _ref1;
  var __indexOf = [].indexOf
  number = number.replace(/\s/g, "")
  return _ref1 = number.length, __indexOf.call(card.valid_length, _ref1) >= 0
};

var validateCVV = function(number, card) {

  var _ref1;
  var __indexOf = [].indexOf
  number = number || ''

  if( isNaN(number) ) {
    // 'CVV should be a number'
    return false
  }

  if( card ) {
    return _ref1 = number.length, __indexOf.call(card.cvv_length, _ref1) >= 0
  } else {
    return false
  }

}

var validateExpiry = function(date) {

  var d = new Date(),
    current_mm = d.getMonth() + 1,
    current_yy = d.getFullYear() + ''
  current_yy = current_yy.substring(2,4) * 1

  if( date === null ) return false

  var mm = date.substring(0,2) * 1,
    yy = date.substring(3,5) * 1

  if( date.length < 5 ) return false

  if ( mm < 1 || mm > 12 ) return false

  if ( yy < current_yy ) return false

  if ( mm < current_mm && yy <= current_yy ) return false

  return true

}
