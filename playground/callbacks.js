var getUser = (id, callback)=>{
    var user ={// Création d'un objet user
        id:id,
        name:'Bibata'
    };
    setTimeout(()=>{
        callback(user);
    }, 3000)  
};

//Appel de la fonction
getUser(31,(userObject) =>{
    console.log(userObject);
})
