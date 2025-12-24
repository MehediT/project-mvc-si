import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import {
  ChartBarIcon,
  DocumentTextIcon,
  ChartBarSquareIcon,
  ClockIcon,
  CheckCircleIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline';

export default function StudentDashboard() {
  const menuItems = [
    { label: 'Dashboard', icon: <ChartBarIcon className="w-5 h-5" />, active: true },
    { label: 'Mes évaluations', icon: <DocumentTextIcon className="w-5 h-5" /> },
    { label: 'Statistiques', icon: <ChartBarSquareIcon className="w-5 h-5" /> },
  ];

  return (
    <div>
      <Header userName="Jean Dupont" userRole="Étudiant" />
      <div className="flex min-h-[calc(100vh-4rem)]">
        <Sidebar items={menuItems} />
        <main className="flex-1 p-6 lg:p-8 max-w-7xl mx-auto w-full">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Évaluations en attente</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <div className="mb-3">
                  <h3 className="text-lg font-semibold mb-2">Prof. Martin Dubois</h3>
                  <p className="text-sm text-text-gray">Algorithmes et Structures de Données</p>
                </div>
                <div className="mb-4 flex items-center gap-2 text-sm text-text-gray">
                  <ClockIcon className="w-4 h-4" />
                  <span>Date limite: <strong>25/12/2024</strong></span>
                </div>
                <button className="btn btn-primary">Remplir</button>
              </Card>

              <Card>
                <div className="mb-3">
                  <h3 className="text-lg font-semibold mb-2">Prof. Sophie Laurent</h3>
                  <p className="text-sm text-text-gray">Base de Données</p>
                </div>
                <div className="mb-4 flex items-center gap-2 text-sm text-text-gray">
                  <ClockIcon className="w-4 h-4" />
                  <span>Date limite: <strong>28/12/2024</strong></span>
                </div>
                <button className="btn btn-primary">Remplir</button>
              </Card>

              <Card>
                <div className="mb-3">
                  <h3 className="text-lg font-semibold mb-2">Prof. Pierre Moreau</h3>
                  <p className="text-sm text-text-gray">Réseaux et Sécurité</p>
                </div>
                <div className="mb-4 flex items-center gap-2 text-sm text-text-gray">
                  <ClockIcon className="w-4 h-4" />
                  <span>Date limite: <strong>30/12/2024</strong></span>
                </div>
                <button className="btn btn-primary">Remplir</button>
              </Card>

              <Card>
                <div className="mb-3">
                  <h3 className="text-lg font-semibold mb-2">Prof. Marie Bernard</h3>
                  <p className="text-sm text-text-gray">Intelligence Artificielle</p>
                </div>
                <div className="mb-4 flex items-center gap-2 text-sm text-text-gray">
                  <ClockIcon className="w-4 h-4" />
                  <span>Date limite: <strong>02/01/2025</strong></span>
                </div>
                <button className="btn btn-primary">Remplir</button>
              </Card>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Mes évaluations soumises</h2>
            <div className="flex flex-col gap-3">
              <Card>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Prof. Martin Dubois - Algorithmes</h3>
                    <p className="text-sm text-text-gray">Soumise le 15/12/2024</p>
                  </div>
                  <Badge variant="success">Soumise</Badge>
                </div>
              </Card>
              <Card>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Prof. Sophie Laurent - Base de Données</h3>
                    <p className="text-sm text-text-gray">Soumise le 10/12/2024</p>
                  </div>
                  <Badge variant="success">Soumise</Badge>
                </div>
              </Card>
              <Card>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Prof. Pierre Moreau - Réseaux</h3>
                    <p className="text-sm text-text-gray">Soumise le 05/12/2024</p>
                  </div>
                  <Badge variant="success">Soumise</Badge>
                </div>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Brouillons</h2>
            <div className="flex flex-col gap-3">
              <Card>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Prof. Marie Bernard - Intelligence Artificielle</h3>
                    <p className="text-sm text-text-gray">Dernière modification: 20/12/2024</p>
                  </div>
                  <button className="btn btn-outline flex items-center gap-2">
                    <PencilSquareIcon className="w-4 h-4" />
                    Reprendre
                  </button>
                </div>
              </Card>
              <Card>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Prof. Jean Petit - Développement Web</h3>
                    <p className="text-sm text-text-gray">Dernière modification: 18/12/2024</p>
                  </div>
                  <button className="btn btn-outline flex items-center gap-2">
                    <PencilSquareIcon className="w-4 h-4" />
                    Reprendre
                  </button>
                </div>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
