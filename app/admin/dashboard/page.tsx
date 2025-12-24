'use client';

import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import {
  ChartBarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ChartBarSquareIcon,
  Cog6ToothIcon,
  UserIcon,
  DocumentCheckIcon,
  ExclamationTriangleIcon,
  PlusIcon,
  ArrowDownTrayIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

export default function AdminDashboard() {
  const menuItems = [
    { label: 'Dashboard', icon: <ChartBarIcon className="w-5 h-5" />, active: true },
    { label: 'Utilisateurs', icon: <UserGroupIcon className="w-5 h-5" /> },
    { label: 'Formulaires', icon: <DocumentTextIcon className="w-5 h-5" /> },
    { label: 'Rapports', icon: <ChartBarSquareIcon className="w-5 h-5" /> },
    { label: 'Configuration', icon: <Cog6ToothIcon className="w-5 h-5" /> },
  ];

  return (
    <div>
      <Header userName="Administrateur" />
      <div className="flex min-h-[calc(100vh-4rem)]">
        <Sidebar items={menuItems} />
        <main className="flex-1 p-6 lg:p-8 max-w-7xl mx-auto w-full">
          <h1 className="text-3xl font-bold mb-8">Tableau de Bord Administrateur</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <UserIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-text-gray">Total utilisateurs</p>
                  <h2 className="text-2xl font-bold">1,234</h2>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <DocumentCheckIcon className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="text-sm text-text-gray">Total évaluations</p>
                  <h2 className="text-2xl font-bold">5,678</h2>
                </div>
              </div>
            </Card>
            <Card>
              <div>
                <p className="text-sm text-text-gray mb-2">Taux complétion</p>
                <h2 className="text-2xl font-bold mb-2">87%</h2>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '87%' }}></div>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <ExclamationTriangleIcon className="w-6 h-6 text-danger" />
                </div>
                <div>
                  <p className="text-sm text-text-gray">Alertes</p>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold">3</h2>
                    <Badge variant="danger">Nouveau</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Évaluations par mois</h2>
            <div className="flex items-end gap-2 h-64">
              <div className="flex-1 bg-primary rounded-t" style={{ height: '40%' }}></div>
              <div className="flex-1 bg-primary rounded-t" style={{ height: '60%' }}></div>
              <div className="flex-1 bg-primary rounded-t" style={{ height: '80%' }}></div>
              <div className="flex-1 bg-primary rounded-t" style={{ height: '70%' }}></div>
              <div className="flex-1 bg-primary rounded-t" style={{ height: '90%' }}></div>
              <div className="flex-1 bg-primary rounded-t" style={{ height: '100%' }}></div>
              <div className="flex-1 bg-primary rounded-t" style={{ height: '85%' }}></div>
              <div className="flex-1 bg-primary rounded-t" style={{ height: '75%' }}></div>
              <div className="flex-1 bg-primary rounded-t" style={{ height: '65%' }}></div>
              <div className="flex-1 bg-primary rounded-t" style={{ height: '55%' }}></div>
              <div className="flex-1 bg-primary rounded-t" style={{ height: '45%' }}></div>
              <div className="flex-1 bg-primary rounded-t" style={{ height: '50%' }}></div>
            </div>
            <div className="flex justify-between mt-4 text-xs text-text-gray">
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
              <span>Nov</span>
              <span>Déc</span>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <h2 className="text-2xl font-bold mb-6">Alertes</h2>
              <div className="space-y-3">
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-danger">
                  <h3 className="font-semibold mb-1">Taux de complétion faible</h3>
                  <p className="text-sm text-text-gray">
                    Le module "Réseaux" a un taux de complétion de seulement 45%
                  </p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-warning">
                  <h3 className="font-semibold mb-1">Évaluation en retard</h3>
                  <p className="text-sm text-text-gray">
                    L'évaluation de Prof. Martin Dubois est en retard de 3 jours
                  </p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-danger">
                  <h3 className="font-semibold mb-1">Problème technique</h3>
                  <p className="text-sm text-text-gray">
                    Signalement d'un problème d'accès pour 5 utilisateurs
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold mb-6">Actions rapides</h2>
              <div className="grid grid-cols-2 gap-3">
                <button className="btn btn-primary flex items-center justify-center gap-2">
                  <PlusIcon className="w-4 h-4" />
                  Créer formulaire
                </button>
                <button className="btn btn-primary flex items-center justify-center gap-2">
                  <ArrowDownTrayIcon className="w-4 h-4" />
                  Générer rapport
                </button>
                <button className="btn btn-primary flex items-center justify-center gap-2">
                  <UserGroupIcon className="w-4 h-4" />
                  Gérer utilisateurs
                </button>
                <button className="btn btn-primary flex items-center justify-center gap-2">
                  <WrenchScrewdriverIcon className="w-4 h-4" />
                  Configurer
                </button>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
