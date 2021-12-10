'use strict'

const queries = require('./queries')
const mutatuions = require('./mutations')
const types = require('./types')
  
module.exports = {
  Query: queries,
  Mutation: mutatuions,
  ...types
}