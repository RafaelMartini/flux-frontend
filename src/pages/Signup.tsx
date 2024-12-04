import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  
  const handleSignup = () => {
    window.location.href = 'https://www.hotmart.com.br';
  };

  return (
    <div className="min-h-screen bg-[#13111b] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="relative mb-8">
          <img
            src="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=2070&auto=format&fit=crop"
            alt="Signup illustration"
            className="w-full h-48 object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/30 to-[#13111b] rounded-2xl" />
        </div>

        <div className="bg-[#1a1625] rounded-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Cadastre-se</h1>
            <p className="text-gray-400">Para produtores, afiliados, agência e afins..</p>
          </div>

          <button
            onClick={handleSignup}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-600 transition-all transform hover:scale-[1.02]"
          >
            Sign up
          </button>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Já tem conta?{' '}
              <button
                onClick={() => navigate('/login')}
                className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                Acessar agora!
              </button>
            </p>
          </div>

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

export default Signup;