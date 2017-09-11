/**
 *  Compute the repository number and return it as a string literal
 */

var baseVersion = 1;
var majorVersion = 0;
var minorVersion = 2;
var extension = majorVersion + minorVersion;
var repoVersion = baseVersion + "." + extension; // Automatic Conversion;
console.log(typeof repoVersion);
repoVersion = baseVersion + extension; // No Conversion
console.log(typeof repoVersion);
repoVersion = String(baseVersion + extension);
console.log(typeof repoVersion); // Manual Conversion
