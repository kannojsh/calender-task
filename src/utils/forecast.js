const request=require('request')
const forecast=(latitude,longitude,callback)=>{
const url='http://api.weatherstack.com/current?access_key=2249e47d11f81f363b7fa6673debde9f&query='+latitude+','+ longitude+'&units=m'
request({url:url,json:true},(error, response)=>{
if(error){
callback('Unable to connect to weather service!',undefined)
} else if(response.body.error){
callback('Unable to find the location',undefined)
} else {
callback(undefined, response.body.current.weather_descriptions[0] +'. It is currently ' + response.body.current.temperature  + ' degree out. It feels like ' + response.body.current.feelslike + ' degree out')
}
})
}

module.exports=forecast