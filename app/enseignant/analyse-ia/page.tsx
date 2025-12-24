import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import {
  ChartBarIcon,
  DocumentTextIcon,
  CpuChipIcon,
  TrophyIcon,
  Cog6ToothIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  SparklesIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';

export default function AIAnalysis() {
  const menuItems = [
    { label: 'Dashboard', icon: <ChartBarIcon className="w-5 h-5" /> },
    { label: 'Mes évaluations', icon: <DocumentTextIcon className="w-5 h-5" /> },
    { label: 'Analyse IA', icon: <CpuChipIcon className="w-5 h-5" />, active: true },
    { label: 'Badges', icon: <TrophyIcon className="w-5 h-5" /> },
    { label: 'Paramètres', icon: <Cog6ToothIcon className="w-5 h-5" /> },
  ];

  return (
    <div>
      <Header userName="Prof. Martin Dubois" userRole="Enseignant" />
      <div className="flex min-h-[calc(100vh-4rem)]">
        <Sidebar items={menuItems} />
        <main className="flex-1 p-6 lg:p-8 max-w-7xl mx-auto w-full">
          <h1 className="text-3xl font-bold mb-8">Analyse IA des Évaluations</h1>

          <Card className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Résumé IA</h2>
            <div className="mb-6 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                L'analyse des évaluations récentes révèle une tendance globalement positive avec une moyenne de 4.2/5. 
                Les étudiants apprécient particulièrement la structure du cours et la disponibilité de l'enseignant. 
                Les points d'amélioration identifiés concernent principalement la clarté de certaines explications et 
                le besoin d'exercices pratiques supplémentaires.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Les commentaires montrent une satisfaction générale concernant la pédagogie et l'approche méthodologique. 
                Cependant, quelques étudiants ont exprimé le besoin d'exemples plus concrets pour certains concepts abstraits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-success flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5" />
                  Points forts
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Excellente disponibilité et réactivité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Structure du cours claire et bien organisée</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Support de cours complet et détaillé</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-danger flex items-center gap-2">
                  <ExclamationTriangleIcon className="w-5 h-5" />
                  Points d'amélioration
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ExclamationTriangleIcon className="w-5 h-5 text-danger flex-shrink-0 mt-0.5" />
                    <span>Clarifier certains concepts avec plus d'exemples</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ExclamationTriangleIcon className="w-5 h-5 text-danger flex-shrink-0 mt-0.5" />
                    <span>Augmenter le nombre d'exercices pratiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ExclamationTriangleIcon className="w-5 h-5 text-danger flex-shrink-0 mt-0.5" />
                    <span>Adapter le rythme pour certains étudiants</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <h2 className="text-2xl font-bold mb-6">Analyse de sentiment</h2>
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-success via-success to-danger mb-6" 
                     style={{ background: 'conic-gradient(#10B981 0% 65%, #EF4444 65% 85%, #F59E0B 85% 100%)' }}></div>
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="w-3 h-3 bg-success rounded mx-auto mb-1"></div>
                    <span className="text-sm">Positif 65%</span>
                  </div>
                  <div className="text-center">
                    <div className="w-3 h-3 bg-danger rounded mx-auto mb-1"></div>
                    <span className="text-sm">Négatif 20%</span>
                  </div>
                  <div className="text-center">
                    <div className="w-3 h-3 bg-warning rounded mx-auto mb-1"></div>
                    <span className="text-sm">Neutre 15%</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold mb-6">Tendances</h2>
              <div className="h-48 relative">
                <svg viewBox="0 0 400 160" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#2563EB" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polyline
                    points="20,120 60,100 100,90 140,85 180,80 220,75 260,70 300,65 340,60 380,55"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="3"
                  />
                  <polygon
                    points="20,120 60,100 100,90 140,85 180,80 220,75 260,70 300,65 340,60 380,55 380,160 20,160"
                    fill="url(#lineGradient)"
                  />
                  <circle cx="20" cy="120" r="4" fill="#2563EB" />
                  <circle cx="60" cy="100" r="4" fill="#2563EB" />
                  <circle cx="100" cy="90" r="4" fill="#2563EB" />
                  <circle cx="140" cy="85" r="4" fill="#2563EB" />
                  <circle cx="180" cy="80" r="4" fill="#2563EB" />
                  <circle cx="220" cy="75" r="4" fill="#2563EB" />
                  <circle cx="260" cy="70" r="4" fill="#2563EB" />
                  <circle cx="300" cy="65" r="4" fill="#2563EB" />
                  <circle cx="340" cy="60" r="4" fill="#2563EB" />
                  <circle cx="380" cy="55" r="4" fill="#2563EB" />
                </svg>
                <div className="flex justify-between mt-2 text-xs text-text-gray">
                  <span>Jan</span>
                  <span>Fév</span>
                  <span>Mar</span>
                  <span>Avr</span>
                  <span>Mai</span>
                  <span>Juin</span>
                  <span>Juil</span>
                  <span>Août</span>
                  <span>Sep</span>
                  <span>Oct</span>
                </div>
              </div>
            </Card>
          </div>

          <section>
            <h2 className="text-2xl font-bold mb-6">Recommandations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold">Améliorer les explications</h3>
                  <Badge variant="danger">Priorité haute</Badge>
                </div>
                <p className="text-sm text-text-gray mb-4">
                  Ajouter plus d'exemples concrets pour clarifier les concepts abstraits mentionnés dans les évaluations.
                </p>
                <button className="btn btn-primary w-full flex items-center justify-center gap-2">
                  <PlusIcon className="w-4 h-4" />
                  Ajouter au plan
                </button>
              </Card>
              <Card>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold">Exercices pratiques</h3>
                  <Badge variant="warning">Priorité moyenne</Badge>
                </div>
                <p className="text-sm text-text-gray mb-4">
                  Créer davantage d'exercices pratiques pour renforcer l'apprentissage des étudiants.
                </p>
                <button className="btn btn-primary w-full flex items-center justify-center gap-2">
                  <PlusIcon className="w-4 h-4" />
                  Ajouter au plan
                </button>
              </Card>
              <Card>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold">Adapter le rythme</h3>
                  <Badge variant="warning">Priorité moyenne</Badge>
                </div>
                <p className="text-sm text-text-gray mb-4">
                  Considérer des sessions de révision pour les étudiants ayant des difficultés.
                </p>
                <button className="btn btn-primary w-full flex items-center justify-center gap-2">
                  <PlusIcon className="w-4 h-4" />
                  Ajouter au plan
                </button>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
