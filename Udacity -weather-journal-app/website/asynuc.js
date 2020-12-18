const { json } = require("body-parser");
const { response } = require("express");

const newdata = async(URL ='',data = {}) =>{


    const nfetch = await fetch (url , {
        method : 'post',
        credentials : 'same-origin',
        headers : {
            'Content-Type': 'application/json',
        },
        body : json.stringify(data)

    });
        try {
            const newn = await response.json();
                return newn
            
        }catch(error){
            console.log('erroe', error)
        }


}

postData('/admovies',{movie : 'the matrix', score : 5});

const postdata = async(url = '' , data = {}) =>{
    const responce = await fetch(url,{

        method: 'post ',
        credentials : 'same-origin',
        headers : {
            'Content-Type': 'application/json',
        },
        body : json.stringify(data),
    });

    try{

        const ne = await response.json()
            return ne
    }catch(error){
        console.log('Error',error)
    }
}



