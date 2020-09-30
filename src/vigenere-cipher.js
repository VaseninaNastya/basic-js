

class VigenereCipheringMachine {
  constructor (direction=true){
    this.direction=direction
  }

  changeWordLenght(message, key){
    let newKey = ''
    if(key.length<message.length){
      while(newKey.length<message.length){
        newKey+=key
      }
      return newKey
    }else{return  key}
  }

  getAlphabetNumber(l){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    return alphabet.indexOf(l)
  }

  getAlphabetLetter(n){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    return alphabet[n]
  }

  encrypt(message, key) {
    if(!message || !key){
      throw Error
    }
    let output = ''
    message=message.toUpperCase();
    key=key.toUpperCase();
    key=this.changeWordLenght(message,key)
    let kIterator = 0
    for(let i=0;i<message.length;i++){
      if (!/^[A-Z]$/.test(message[i]))  {
        output+=message[i]
        continue
      }
      let n = (this.getAlphabetNumber(message[i])+this.getAlphabetNumber(key[kIterator]))
      if (n>=26) n=n%26 
      output+=this.getAlphabetLetter(n)
      kIterator++;
    }
    if (!this.direction) return output.split('').reverse().join('')
    return output
  }    
  decrypt(message, key) {
    if(!message || !key){
      return false
    }
    let output = ''
    message=message.toUpperCase();
    key=key.toUpperCase();
    key=this.changeWordLenght(message,key)
    let kIterator = 0
    for(let i=0;i<message.length;i++){
      if (!/^[A-Z]$/.test(message[i]))  {
        output+=message[i]
        continue
      }
      let n = (this.getAlphabetNumber(message[i])-this.getAlphabetNumber(key[kIterator])+26)
      if (n>=26) n=n%26 
      output+=this.getAlphabetLetter(n)
      kIterator++;
    }
    if (!this.direction) return output.split('').reverse().join('')
    return output
  }
}

module.exports = VigenereCipheringMachine;
