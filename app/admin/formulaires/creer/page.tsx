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
  PlusIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

export default function CreateForm() {
  const menuItems = [
    { label: 'Dashboard', icon: <ChartBarIcon className="w-5 h-5" /> },
    { label: 'Utilisateurs', icon: <UserGroupIcon className="w-5 h-5" /> },
    { label: 'Formulaires', icon: <DocumentTextIcon className="w-5 h-5" />, active: true },
    { label: 'Rapports', icon: <ChartBarSquareIcon className="w-5 h-5" /> },
    { label: 'Configuration', icon: <Cog6ToothIcon className="w-5 h-5" /> },
  ];

  return (
    <div>
      <Header userName="Administrateur" />
      <div className="flex min-h-[calc(100vh-4rem)]">
        <Sidebar items={menuItems} />
        <main className="flex-1 p-6 lg:p-8 max-w-7xl mx-auto w-full">
          <h1 className="text-3xl font-bold mb-8">Création de Formulaire</h1>

          <Card className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Informations générales</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Titre</label>
                <input
                  type="text"
                  className="input"
                  value="Évaluation - Algorithmes et Structures de Données"
                  readOnly
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
                <textarea
                  className="textarea"
                  readOnly
                  value="Formulaire d'évaluation pour le cours d'Algorithmes et Structures de Données. Ce formulaire permet aux étudiants d'évaluer la qualité de l'enseignement, la clarté des explications et la pertinence du contenu."
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Enseignant</label>
                  <div className="input cursor-default">Sélectionner un enseignant...</div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Statut</label>
                  <div className="flex items-center gap-3">
                    <div className="toggle"></div>
                    <span className="text-sm text-text-gray">Actif</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Date début</label>
                  <input
                    type="date"
                    className="input"
                    value="2024-12-01"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Date fin</label>
                  <input
                    type="date"
                    className="input"
                    value="2024-12-31"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Questions du formulaire</h2>
              <button className="btn btn-primary flex items-center gap-2">
                <PlusIcon className="w-4 h-4" />
                Ajouter une question
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-5 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start">
                  <div className="flex-1 mr-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="input w-48 cursor-default">Choix multiple</div>
                      <div className="flex items-center gap-2">
                        <div className="checkbox checked"></div>
                        <label className="text-sm">Obligatoire</label>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="input mb-3"
                      value="Comment évaluez-vous la clarté des explications de l'enseignant ?"
                      readOnly
                    />
                    <div className="space-y-2">
                      <input type="text" className="input" value="Très clair" readOnly />
                      <input type="text" className="input" value="Assez clair" readOnly />
                      <input type="text" className="input" value="Peu clair" readOnly />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="btn btn-outline text-sm px-3 py-1.5 h-auto flex items-center gap-1">
                      <PencilIcon className="w-4 h-4" />
                      Modifier
                    </button>
                    <button className="btn btn-danger text-sm px-3 py-1.5 h-auto flex items-center gap-1">
                      <TrashIcon className="w-4 h-4" />
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-5 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start">
                  <div className="flex-1 mr-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="input w-48 cursor-default">Note (slider)</div>
                      <div className="flex items-center gap-2">
                        <div className="checkbox checked"></div>
                        <label className="text-sm">Obligatoire</label>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="input"
                      value="Notez la qualité du contenu du cours (1 = Très mauvais, 5 = Excellent)"
                      readOnly
                    />
                  </div>
                  <div className="flex gap-2">
                    <button className="btn btn-outline text-sm px-3 py-1.5 h-auto flex items-center gap-1">
                      <PencilIcon className="w-4 h-4" />
                      Modifier
                    </button>
                    <button className="btn btn-danger text-sm px-3 py-1.5 h-auto flex items-center gap-1">
                      <TrashIcon className="w-4 h-4" />
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-5 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start">
                  <div className="flex-1 mr-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="input w-48 cursor-default">Texte libre</div>
                      <div className="flex items-center gap-2">
                        <div className="checkbox"></div>
                        <label className="text-sm">Obligatoire</label>
                      </div>
                    </div>
                    <textarea
                      className="textarea min-h-[60px]"
                      readOnly
                      value="Avez-vous des commentaires supplémentaires à ajouter ?"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button className="btn btn-outline text-sm px-3 py-1.5 h-auto flex items-center gap-1">
                      <PencilIcon className="w-4 h-4" />
                      Modifier
                    </button>
                    <button className="btn btn-danger text-sm px-3 py-1.5 h-auto flex items-center gap-1">
                      <TrashIcon className="w-4 h-4" />
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex gap-3 mt-8 justify-end">
            <button className="btn btn-outline flex items-center gap-2">
              <XMarkIcon className="w-4 h-4" />
              Annuler
            </button>
            <button className="btn btn-outline flex items-center gap-2">
              <EyeIcon className="w-4 h-4" />
              Prévisualiser
            </button>
            <button className="btn btn-primary">Sauvegarder</button>
          </div>
        </main>
      </div>
    </div>
  );
}
