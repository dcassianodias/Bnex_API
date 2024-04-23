import React, { useState } from 'react';
import './App.css'; // Importe o arquivo de estilos

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticação aqui
    setIsLoggedIn(true); // Define o estado de login como true após o envio do formulário
  };

  return (
    <div className="login-container"> {/* Adicione a classe login-container */}
      <header className="login-header">
        <h2>Bnex Produtos</h2>
        <p>Faça login para acessar sua conta</p>
      </header>
      <form className="login-form" onSubmit={handleSubmit}> {/* Adicione a classe login-form */}
        <div className="login-input-container"> {/* Envolve os campos de entrada em uma div */}
          <label>Usuário:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </div>
        <div className="login-input-container"> {/* Envolve os campos de entrada em uma div */}
          <label>Senha:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <footer className="login-footer"> {/* Adicione o rodapé */}
        <p>&copy; Desenvolvido por Danilo Dias</p>
      </footer>
    </div>
  );
}

export default Login;