
var CONST = {
  BACKURL: 'http://localhost:8000',
  WWWURL: 'https://jsonplaceholder.typicode.com/posts'
}

$(document).ready(function () {
  console.log('INFO', 'app.js is successfully loaded')

  $('#appdb-action-btn').click(function () {
    $.get(CONST.BACKURL + '/db', function (res) {
      console.log('Get data from back-end app, db', res)
    })
  })

  $('#appwww-action-btn').click(function () {
    $.get(CONST.BACKURL + '/www', function (res) {
      console.log('Get data from back-end app, www', res)
    })
  })

  $('#app-action-btn').click(function () {
    $.get(CONST.BACKURL + '/crypto', function (res) {
      console.log('Get simple data from back-end app', res)
    })
  })

  $('#www-action-btn').click(function () {
    $.get(CONST.WWWURL, function (res) {
      console.log('Get data from www', res)
    })
  })
})