import $ from 'jquery'
// const $ = require('jquery')
import './css/index.css'
import './css/index.less'
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.css'
//注意webpack默认只能打包js类型文件，无法处理非js文件

//如果要处理非js文件我们要手动安装一些合适第三方loader加载器
//1、如果要打包处理css文件，需要安装 cnpm i style-loader css-loader -D
//2、打开webpack-config-js这个配置文件，在里面新增一个节点，叫做module，它是一个对象；在这个module对象身上有个rules属性，这个属性是一个数组；这个数组中存放了所有第三方文件的匹配和处理规则

// 注意：webpack处理第三方文件类型的过程：
//1、发现这个要处理的文件不是js文件，然后就去配置文件中查找有没有对应的第三方loader规则
//2、如果能找到对应的规则，就会调用对应的loader处理这种类型文件
//3、在调用loader的时候，是从后往前调用
//4、当最后一个loader调用完毕，会把处理结果直接交给webpack 进行打包合并，最终输出
$(function() {
    $('li:odd').css('backgroundColor', 'blue')
    $('li:even').css('backgroundColor', function() {
        return '#' + '000'
    })
})
class Persoon {
    static info = { name: '木槿', age: 19 }
}
console.log(Person.info)