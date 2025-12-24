import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Card from '@/components/Card';
import {
  ChartBarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ChartBarSquareIcon,
  Cog6ToothIcon,
  ArrowDownTrayIcon,
  DocumentArrowDownIcon,
} from '@heroicons/react/24/outline';

export default function Reports() {
  const menuItems = [
    { label: 'Dashboard', icon: <ChartBarIcon className="w-5 h-5" /> },
    { label: 'Utilisateurs', icon: <UserGroupIcon className="w-5 h-5" /> },
    { label: 'Formulaires', icon: <DocumentTextIcon className="w-5 h-5" /> },
    { label: 'Rapports', icon: <ChartBarSquareIcon className="w-5 h-5" />, active: true },
    { label: 'Configuration', icon: <Cog6ToothIcon className="w-5 h-5" /> },
  ];

  return (
    <div>
      <Header userName="Administrateur" />
      <div className="flex min-h-[calc(100vh-4rem)]">
        <Sidebar items={menuItems} />
        <main className="flex-1 p-6 lg:p-8 max-w-7xl mx-auto w-full">
          <h1 className="text-3xl font-bold mb-8">Génération de Rapports</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <h2 className="text-2xl font-bold mb-6">Paramètres du rapport</h2>
              <div className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Type de rapport</label>
                  <div className="input cursor-default">Rapport global des évaluations</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Période début</label>
                    <input
                      type="date"
                      className="input"
                      value="2024-09-01"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Période fin</label>
                    <input
                      type="date"
                      className="input"
                      value="2024-12-31"
                      readOnly
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-3 text-sm font-medium text-gray-700">Départements</label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="checkbox checked"></div>
                      <label>Informatique</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="checkbox checked"></div>
                      <label>Mathématiques</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="checkbox"></div>
                      <label>Physique</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="checkbox"></div>
                      <label>Chimie</label>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block mb-3 text-sm font-medium text-gray-700">Format</label>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <div className="radio-input checked"></div>
                      <label>PDF</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="radio-input"></div>
                      <label>Excel</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="radio-input"></div>
                      <label>CSV</label>
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary w-full flex items-center justify-center gap-2">
                  <DocumentArrowDownIcon className="w-4 h-4" />
                  Générer le rapport
                </button>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold mb-6">Prévisualisation</h2>
              <div className="p-6 bg-bg-gray rounded-lg min-h-[400px] border-2 border-dashed border-gray-300">
                <h3 className="mb-4 text-text-gray font-semibold">Aperçu du rapport</h3>
                <div className="text-sm text-text-gray space-y-3 leading-relaxed">
                  <p>
                    <strong>Rapport Global des Évaluations</strong><br />
                    Période: 01/09/2024 - 31/12/2024
                  </p>
                  <p>
                    <strong>Résumé exécutif:</strong><br />
                    - Total d'évaluations: 5,678<br />
                    - Taux de complétion: 87%<br />
                    - Note moyenne globale: 4.2/5
                  </p>
                  <p>
                    <strong>Par département:</strong><br />
                    - Informatique: 3,245 évaluations (moyenne: 4.3/5)<br />
                    - Mathématiques: 2,433 évaluations (moyenne: 4.1/5)
                  </p>
                  <p>
                    <strong>Recommandations:</strong><br />
                    - Améliorer le taux de complétion pour le module Réseaux<br />
                    - Augmenter les sessions de feedback pour les enseignants
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card>
            <h2 className="text-2xl font-bold mb-6">Historique des rapports</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-4 bg-bg-gray rounded-lg">
                <div>
                  <h3 className="font-semibold mb-1">Rapport global - Semestre 1</h3>
                  <p className="text-sm text-text-gray">
                    Généré le 15/12/2024 - Format: PDF
                  </p>
                </div>
                <button className="btn btn-primary flex items-center gap-2">
                  <ArrowDownTrayIcon className="w-4 h-4" />
                  Télécharger
                </button>
              </div>
              <div className="flex justify-between items-center p-4 bg-bg-gray rounded-lg">
                <div>
                  <h3 className="font-semibold mb-1">Rapport par département - Informatique</h3>
                  <p className="text-sm text-text-gray">
                    Généré le 10/12/2024 - Format: Excel
                  </p>
                </div>
                <button className="btn btn-primary flex items-center gap-2">
                  <ArrowDownTrayIcon className="w-4 h-4" />
                  Télécharger
                </button>
              </div>
              <div className="flex justify-between items-center p-4 bg-bg-gray rounded-lg">
                <div>
                  <h3 className="font-semibold mb-1">Rapport mensuel - Novembre 2024</h3>
                  <p className="text-sm text-text-gray">
                    Généré le 01/12/2024 - Format: PDF
                  </p>
                </div>
                <button className="btn btn-primary flex items-center gap-2">
                  <ArrowDownTrayIcon className="w-4 h-4" />
                  Télécharger
                </button>
              </div>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}
