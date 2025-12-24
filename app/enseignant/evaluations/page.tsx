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
  MagnifyingGlassIcon,
  FunnelIcon,
  EyeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

export default function TeacherEvaluations() {
  const menuItems = [
    { label: 'Dashboard', icon: <ChartBarIcon className="w-5 h-5" /> },
    { label: 'Mes évaluations', icon: <DocumentTextIcon className="w-5 h-5" />, active: true },
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
          <h1 className="text-3xl font-bold mb-8">Mes Évaluations</h1>

          <Card className="mb-6">
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px]">
                <label className="block mb-2 text-sm font-medium text-gray-700">Période</label>
                <div className="input cursor-default">Semestre 1</div>
              </div>
              <div className="flex-1 min-w-[200px]">
                <label className="block mb-2 text-sm font-medium text-gray-700">Matière</label>
                <div className="input cursor-default">Toutes</div>
              </div>
              <div className="flex-2 min-w-[200px]">
                <label className="block mb-2 text-sm font-medium text-gray-700">Rechercher</label>
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-gray" />
                  <input
                    type="text"
                    className="input pl-10"
                    value="Rechercher..."
                    readOnly
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Note</th>
                    <th>Commentaires</th>
                    <th>Sentiment</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>15/12/2024</td>
                    <td><strong>4.5/5</strong></td>
                    <td>12</td>
                    <td><Badge variant="success">Positif</Badge></td>
                    <td>
                      <button className="btn btn-outline text-sm px-3 py-1.5 h-auto flex items-center gap-1">
                        <EyeIcon className="w-4 h-4" />
                        Voir
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>10/12/2024</td>
                    <td><strong>3.8/5</strong></td>
                    <td>8</td>
                    <td><Badge variant="warning">Neutre</Badge></td>
                    <td>
                      <button className="btn btn-outline text-sm px-3 py-1.5 h-auto flex items-center gap-1">
                        <EyeIcon className="w-4 h-4" />
                        Voir
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>05/12/2024</td>
                    <td><strong>4.7/5</strong></td>
                    <td>15</td>
                    <td><Badge variant="success">Positif</Badge></td>
                    <td>
                      <button className="btn btn-outline text-sm px-3 py-1.5 h-auto flex items-center gap-1">
                        <EyeIcon className="w-4 h-4" />
                        Voir
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>28/11/2024</td>
                    <td><strong>4.2/5</strong></td>
                    <td>10</td>
                    <td><Badge variant="success">Positif</Badge></td>
                    <td>
                      <button className="btn btn-outline text-sm px-3 py-1.5 h-auto flex items-center gap-1">
                        <EyeIcon className="w-4 h-4" />
                        Voir
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>20/11/2024</td>
                    <td><strong>3.5/5</strong></td>
                    <td>6</td>
                    <td><Badge variant="danger">Négatif</Badge></td>
                    <td>
                      <button className="btn btn-outline text-sm px-3 py-1.5 h-auto flex items-center gap-1">
                        <EyeIcon className="w-4 h-4" />
                        Voir
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <button className="p-2 border border-gray-300 rounded-lg bg-white text-text-gray cursor-default">
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
              <button className="px-4 py-2 border border-primary bg-primary text-white rounded-lg font-medium">1</button>
              <button className="px-4 py-2 border border-gray-300 bg-white text-text-gray rounded-lg cursor-default">2</button>
              <button className="px-4 py-2 border border-gray-300 bg-white text-text-gray rounded-lg cursor-default">3</button>
              <button className="p-2 border border-gray-300 rounded-lg bg-white text-text-gray cursor-default">
                <ChevronRightIcon className="w-5 h-5" />
              </button>
              <span className="ml-4 text-text-gray">Page 1 sur 3</span>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}
