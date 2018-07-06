console.log('Starting app');

setTimeout(()=>{
    console.log('Inside of callback');
}, 2000); //2000 i.e exécution de la fonction dans 2s après exécution du program

setTimeout(()=>{
    console.log('Second setTimeout');
}, 0)
console.log('Finishing up');
