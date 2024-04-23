import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Objeto Produto
  const produto = {
    id: 0,
    nome: '',
    descricao: '',
    valor: ''
  }

  // UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [objProduto, setObjproduto] = useState(produto);

  //UseEffect
  useEffect(() =>{
    fetch("http://localhost:8080/produtos/listar ")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProdutos(retorno_convertido));
  }, [])

  //Obtendo os dados do formulário
  const aoDigitar = (e) =>{
    setObjproduto({...objProduto, [e.target.name]:e.target.value});
  }

  // Cadastrar Produto
  const cadastrar = () =>{
    fetch('http://localhost:8080/produtos/cadastrar', {
      method:'post',
      body:JSON.stringify(objProduto),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      } else{
        setProdutos([...produtos, retorno_convertido])
        alert('Produto Cadastrado com sucesso!')
        limparFormulario();
      }
    })
  }

  // Alterar Produto
  const atualizar = () =>{
    fetch('http://localhost:8080/produtos/atualizar', {
      method:'put',
      body:JSON.stringify(objProduto),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      } else{
        
          //Mensagem
          alert('Produto Alterado com sucesso!')

          // Cópia do vetor de produtos
          let vetorTemp = [...produtos];

          // Índice
          let indice = vetorTemp.findIndex((p) => {
            return p.id === objProduto.id;
          });

          //Alterar produto do vetorTemp
          vetorTemp[indice] = objProduto;

          //Atualizar o vetor de produtos
          setProdutos(vetorTemp);

          //Limpar o formulário
          limparFormulario();
        }
    })
  }

  // Remover Produto
  const remover = () =>{
    fetch('http://localhost:8080/produtos/deletar/'+objProduto.id, {
      method:'delete',
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {

      //Mensagem 
      alert(retorno_convertido.mensagem);

      // Cópia do vetor de produtos
      let vetorTemp = [...produtos];

      // Índice
      let indice = vetorTemp.findIndex((p) => {
        return p.id === objProduto.id;
      });

      //Remover produto do vetorTemp
      vetorTemp.splice(indice, 1);

      //Atualizar o vetor de produtos
      setProdutos(vetorTemp);

      //Limpar Formulário
      limparFormulario();
    })
  }

  //Limpar Formulário
  const limparFormulario = () =>{
    setObjproduto(produto);
    setBtnCadastrar(true);
  }

  // Selecionnar Produto
  const selecionarProduto = (indice) =>{
    setObjproduto(produtos[indice]);
    setBtnCadastrar(false);
  }

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objProduto}
              cancelar={limparFormulario} remover={remover} atualizar={atualizar}/>
          <Tabela vetor={produtos} selecionar={selecionarProduto}/>
        </div>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;


