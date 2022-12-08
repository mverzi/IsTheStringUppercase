/**
 * This method determines if a string is in all caps or not
 * @returns true or false
 */
String.prototype.isUpperCase = function() {
    return this == this.toUpperCase()
  }