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
  ArrowTrendingUpIcon,
  EyeIcon,
  ChartBarSquareIcon,
  UserGroupIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

export default function TeacherDashboard() {
  const menuItems = [
    { label: 'Dashboard', icon: <ChartBarIcon className="w-5 h-5" />, active: true },
    { label: 'Mes évaluations', icon: <DocumentTextIcon className="w-5 h-5" /> },
    { label: 'Analyse IA', icon: <CpuChipIcon className="w-5 h-5" /> },
    { label: 'Badges', icon: <TrophyIcon className="w-5 h-5" /> },
    { label: 'Paramètres', icon: <Cog6ToothIcon className="w-5 h-5" /> },
  ];

  return (
    <div>
      <Header userName="Prof. Martin Dubois" userRole="Enseignant" />
      <div className="flex min-h-[calc(100vh-4rem)]">
        <Sidebar items={menuItems} />
        <main className="flex-1 p-6 lg:p-8 max-w-7xl mx-auto w-full">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

          <Card className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Moyenne globale</h2>
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-bold text-primary">4.2/5</span>
                  <Badge variant="success" className="text-sm px-3 py-1.5 flex items-center gap-1">
                    <ArrowTrendingUpIcon className="w-4 h-4" />
                    +0.3
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex items-end gap-2 h-40">
              <div className="flex-1 bg-primary rounded-t" style={{ height: '60%' }}></div>
              <div className="flex-1 bg-primary rounded-t" style={{ height: '80%' }}></div>
              <div className="flex-1 bg-primary rounded-t" style={{ height: '45%' }}></div>
              <div className="flex-1 bg-primary rounded-t" style={{ height: '90%' }}></div>
              <div className="flex-1 bg-primary rounded-t" style={{ height: '70%' }}></div>
              <div className="flex-1 bg-primary rounded-t" style={{ height: '55%' }}></div>
            </div>
          </Card>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Évaluations récentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <div className="mb-3">
                  <p className="text-sm text-text-gray mb-2">15/12/2024</p>
                  <h3 className="text-xl font-semibold mb-2">Note: 4.5/5</h3>
                  <p className="text-sm text-text-gray">12 commentaires</p>
                </div>
                <Badge variant="success">Positif</Badge>
              </Card>
              <Card>
                <div className="mb-3">
                  <p className="text-sm text-text-gray mb-2">10/12/2024</p>
                  <h3 className="text-xl font-semibold mb-2">Note: 3.8/5</h3>
                  <p className="text-sm text-text-gray">8 commentaires</p>
                </div>
                <Badge variant="warning">Neutre</Badge>
              </Card>
              <Card>
                <div className="mb-3">
                  <p className="text-sm text-text-gray mb-2">05/12/2024</p>
                  <h3 className="text-xl font-semibold mb-2">Note: 4.7/5</h3>
                  <p className="text-sm text-text-gray">15 commentaires</p>
                </div>
                <Badge variant="success">Positif</Badge>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Actions rapides</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="btn btn-primary flex items-center justify-center gap-2">
                <EyeIcon className="w-5 h-5" />
                Voir toutes
              </button>
              <button className="btn btn-primary flex items-center justify-center gap-2">
                <CpuChipIcon className="w-5 h-5" />
                Analyser IA
              </button>
              <button className="btn btn-primary flex items-center justify-center gap-2">
                <UserGroupIcon className="w-5 h-5" />
                Comparer pairs
              </button>
              <button className="btn btn-primary flex items-center justify-center gap-2">
                <TrophyIcon className="w-5 h-5" />
                Badges
              </button>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Recommandations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <div className="flex items-start gap-3">
                  <SparklesIcon className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Améliorer les explications</h3>
                    <p className="text-sm text-text-gray">
                      Plusieurs étudiants ont mentionné que certains concepts pourraient être mieux expliqués avec des exemples concrets.
                    </p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start gap-3">
                  <SparklesIcon className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Augmenter les exercices pratiques</h3>
                    <p className="text-sm text-text-gray">
                      Les étudiants apprécient les exercices pratiques. En ajouter davantage pourrait améliorer la compréhension.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
