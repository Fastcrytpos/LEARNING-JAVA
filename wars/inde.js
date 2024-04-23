let arr=['codewars', 'flick', 'code', 'wars','flick','codewars'];

    let x="True"
    
    let newarraylist=[]

        for (i of arr)
        {
            //if the i is not equal to flick
            if(i == 'flick' && x == "True"){
                x = "False"
                newarraylist.push(x)
                console.log(newarraylist)
          
              }
              else if(i =='flick' &&  x == "False"){
                x = "True"
                newarraylist.push(x)
                console.log(newarraylist)
              }
              else{
                newarraylist.push(x)
                console.log(newarraylist)
              }
        }

