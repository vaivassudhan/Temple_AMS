const data = require('../../UpdatedRecords.json');
for(let i=0;i<data.length;i++){
    if(data[i]["ACODE"]=="50"){
        data[i]["isVIP"]=true;
    }
}
console.log(data)