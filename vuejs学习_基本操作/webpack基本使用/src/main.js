import $ from 'jquery'
// const $ = require('jquery')
$(function() {
    $('li:odd').css('backgroundColor', 'red')
    $('li:even').css('backgroundColor', function() {
        return '#' + 'bfbf37'
    })
})