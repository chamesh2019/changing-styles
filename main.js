
const wrapper = document.getElementById("wrapper")
const shape = document.getElementsByClassName("shape")
var round = false
const roundness = function(){

}

const configs = [
  {config:1, round:'1000px'},
  {config:1, round:'20px'},
  {config:1, round:'0%'},
  {config:2, round:'20px'},
  {config:2, round:'0%'},
]

const ran = function(p){
  let r = Math.floor((Math.random() * 5))
  if (p == r){
    return ran(p)
  }
  return r
}

setInterval(() => {
  pre = 0
  x = ran(pre)
  pre = x
  console.log(x)
  const configuration = configs[x]
  wrapper.dataset.config = configuration.config
  
  for(i = 0; i < shape.length; i++) {
    shape[i].style.borderRadius = configuration.round;
}
}, 1500)
