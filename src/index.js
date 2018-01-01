/**
 * qs-lib
 * Library for lazy purejs lovers
 *
 * @version 0.1.0
 * @author  Jim Filippou
 * @license MIT
 *
 **/
module.exports = {
  
  // qs stands for querySelector
  // It gets one instance of any HTML object using selectors
  qs: (q) => document.querySelector(q),
  
  // qsa stands for querySelectorAll
  // It gets multiple instances of any HTML objects using selectors
  qsa: (q) => document.querySelectorAll(q)
  
}
