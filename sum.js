const add = (a,b) => {
  return new Promise((resolve,reject) => {
    setTimeout(()=> {
      if(a<0 || b<0) 
        reject(new Error('Accepting only non negative numbers'))
      resolve(a+b)
    },500)
  })
  
}

module.exports = add