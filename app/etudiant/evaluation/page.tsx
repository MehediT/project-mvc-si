import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import {
  ChartBarIcon,
  DocumentTextIcon,
  ChartBarSquareIcon,
  InformationCircleIcon,
  BookmarkIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';

export default function FillEvaluation() {
  const menuItems = [
    { label: 'Dashboard', icon: <ChartBarIcon className="w-5 h-5" /> },
    { label: 'Mes évaluations', icon: <DocumentTextIcon className="w-5 h-5" />, active: true },
    { label: 'Statistiques', icon: <ChartBarSquareIcon className="w-5 h-5" /> },
  ];

  return (
    <div>
      <Header userName="Jean Dupont" userRole="Étudiant" />
      <div className="flex min-h-[calc(100vh-4rem)]">
        <Sidebar items={menuItems} />
        <main className="flex-1 p-6 lg:p-8 max-w-7xl mx-auto w-full">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Prof. Martin Dubois</h1>
            <p className="text-lg text-text-gray mb-4">Algorithmes et Structures de Données</p>
            <div>
              <p className="text-sm text-text-gray mb-2">Progression: 50%</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '50%' }}></div>
              </div>
            </div>
          </div>

          <Card className="mb-8">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl font-semibold">Question 1</h3>
                <Badge variant="danger" className="text-xs">Obligatoire</Badge>
              </div>
              <p className="mb-4 text-gray-700">
                Comment évaluez-vous la clarté des explications de l'enseignant ?
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="radio-input checked"></div>
                  <label className="cursor-default">Très clair</label>
                </div>
                <div className="flex items-center gap-2">
                  <div className="radio-input"></div>
                  <label className="cursor-default">Assez clair</label>
                </div>
                <div className="flex items-center gap-2">
                  <div className="radio-input"></div>
                  <label className="cursor-default">Peu clair</label>
                </div>
                <div className="flex items-center gap-2">
                  <div className="radio-input"></div>
                  <label className="cursor-default">Pas clair du tout</label>
                </div>
              </div>
            </div>
          </Card>

          <Card className="mb-8">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-3">Question 2</h3>
              <p className="mb-4 text-gray-700">
                Notez la qualité du contenu du cours (1 = Très mauvais, 5 = Excellent)
              </p>
              <div className="py-5">
                <div className="slider mb-2">
                  <div className="slider-track" style={{ width: '60%' }}></div>
                  <div className="slider-thumb" style={{ left: '60%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-text-gray mb-2">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
                <p className="text-center font-semibold">3/5</p>
              </div>
            </div>
          </Card>

          <Card className="mb-8">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-3">Question 3</h3>
              <p className="mb-4 text-gray-700">
                Avez-vous des commentaires supplémentaires à ajouter ?
              </p>
              <textarea
                className="textarea"
                readOnly
                value="Le cours est très intéressant et bien structuré. Les exercices pratiques sont pertinents et aident à mieux comprendre les concepts."
              />
            </div>
          </Card>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-center">
            <div className="flex items-center justify-center gap-2 text-primary">
              <InformationCircleIcon className="w-5 h-5" />
              <p className="text-sm font-medium">Cette évaluation est anonyme</p>
            </div>
          </div>

          <div className="flex gap-3 justify-end">
            <button className="btn btn-outline flex items-center gap-2">
              <BookmarkIcon className="w-4 h-4" />
              Sauvegarder comme brouillon
            </button>
            <button className="btn btn-primary flex items-center gap-2">
              <PaperAirplaneIcon className="w-4 h-4" />
              Soumettre l'évaluation
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
