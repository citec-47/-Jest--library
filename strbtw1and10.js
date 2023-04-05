const stringFromOneToten = (string) => {
       if ( (string.length >= 1) && (string.length <= 10)){
        return string.length
       }else{
        throw new Error('Did not meet the criteria');
       }
}

module.exports = stringFromOneToten