import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';

const PasswordRecovery = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('');

    try {
      await authService.requestPasswordReset(email);
      setMessage('Um link de recuperação foi enviado para seu e-mail.');
      setTimeout(() => navigate('/login'), 3000);
    } catch (err) {
      setError('Não foi possível enviar o e-mail de recuperação.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#13111b] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="relative mb-8">
          <img
            src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070&auto=format&fit=crop"
            alt="Recovery illustration"
            className="w-full h-48 object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/30 to-[#13111b] rounded-2xl" />
        </div>

        <div className="bg-[#1a1625] rounded-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Recuperar Senha</h1>
            <p className="text-gray-400">Digite seu e-mail para receber o link de recuperação</p>
          </div>

          {error && (
            <div className="bg-red-500 bg-opacity-10 text-red-500 p-4 rounded-lg mb-6 text-center">
              {error}
            </div>
          )}

          {message && (
            <div className="bg-green-500 bg-opacity-10 text-green-500 p-4 rounded-lg mb-6 text-center">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-400 text-sm mb-2">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#2a2435] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="Digite seu e-mail"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-600 transition-all transform hover:scale-[1.02] ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? 'Enviando...' : 'Enviar link de recuperação'}
            </button>

            <button
              type="button"
              onClick={() => navigate('/login')}
              className="w-full text-gray-400 hover:text-white transition-colors"
            >
              Voltar para o login
            </button>
          </form>

          <div className="mt-8 flex justify-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              FLUX
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecovery;