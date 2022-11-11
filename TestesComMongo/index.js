const mongoose = require('mongoose');
const artModel = require('./art.js');
const uri = "mongodb://127.0.0.1:27017/teste";
const model = require('./art.js')


    mongoose.connect(uri).then(()=> {
        console.log('Conectado!');
    })
    const artigo = mongoose.model('artigo',artModel); // PEGANDO O ARTIGO

    /* SALVANDO DADOS
    const A = new artigo({title: "JEAN", autor: "Teste", body: "Jean é lindo"});
    A.save(); // SALVANDO NOVO ARTIGO
    */


    /* LISTANDO DADOS
    artigo.find{Opicional Para buscar apenas UM - One}({_id: "636ed07568d0b7272ec49dcc"}).then((data) => {
        console.log(data)
    });
    */



    /* DELETANDO DADOS
    artigo.findOneAndDelete({_id: "636ed07568d0b7272ec49dcc"}).then(() => {
        console.log('Removido');
    }).catch((err) => {
        console.log(err)
    })
    */



    /* ATUALIZANDO DADOS
    artigo.findOneAndUpdate({title: "JEAN"},{title: "VUE DO ZERO!", autor: "Jean"}).then(() => {
        console.log('Atualizado');
    }).catch((err) => {
        console.log(err)
    })
    */
