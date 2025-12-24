import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/24/solid';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700">
      <div className="card w-full max-w-md p-10">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <AcademicCapIcon className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">ÉvalPro</h1>
          <p className="text-text-gray">Système d'évaluation des enseignants</p>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center">Connexion</h2>

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input"
            value="etudiant@example.com"
            readOnly
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            className="input"
            value="••••••••"
            readOnly
          />
        </div>

        <button className="btn btn-primary w-full mb-4">
          Se connecter
        </button>

        <div className="text-center">
          <span className="text-primary text-sm cursor-default">
            Mot de passe oublié ?
          </span>
        </div>
      </div>
    </div>
  );
}
