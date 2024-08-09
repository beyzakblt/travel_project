import React, { useState } from 'react';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, username, password });
    // Burada form verilerini işleyebilirsiniz
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-posta"
          required
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Kullanıcı Adı"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Şifre"
          required
        />
        <button type="submit">Kayıt Ol</button>
      </form>
      <div>
        <p>Kayıt olarak, <a href="#">hizmet şartlarımızı</a> kabul etmiş olursunuz.</p>
      </div>
    </div>
  );
}

export default SignupForm;
