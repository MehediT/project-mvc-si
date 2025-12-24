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
  PlusIcon,
  ArrowUpTrayIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  TrashIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

export default function UserManagement() {
  const menuItems = [
    { label: 'Dashboard', icon: <ChartBarIcon className="w-5 h-5" /> },
    { label: 'Utilisateurs', icon: <UserGroupIcon className="w-5 h-5" />, active: true },
    { label: 'Formulaires', icon: <DocumentTextIcon className="w-5 h-5" /> },
    { label: 'Rapports', icon: <ChartBarSquareIcon className="w-5 h-5" /> },
    { label: 'Configuration', icon: <Cog6ToothIcon className="w-5 h-5" /> },
  ];

  const users = [
    { name: 'Jean Dupont', email: 'jean.dupont@example.com', role: 'Étudiant', department: 'Informatique', active: true },
    { name: 'Marie Martin', email: 'marie.martin@example.com', role: 'Étudiant', department: 'Informatique', active: true },
    { name: 'Pierre Bernard', email: 'pierre.bernard@example.com', role: 'Étudiant', department: 'Mathématiques', active: true },
    { name: 'Sophie Laurent', email: 'sophie.laurent@example.com', role: 'Enseignant', department: 'Informatique', active: true },
    { name: 'Martin Dubois', email: 'martin.dubois@example.com', role: 'Enseignant', department: 'Informatique', active: true },
    { name: 'Paul Moreau', email: 'paul.moreau@example.com', role: 'Enseignant', department: 'Mathématiques', active: false },
    { name: 'Admin System', email: 'admin@example.com', role: 'Admin', department: 'Administration', active: true },
    { name: 'Luc Petit', email: 'luc.petit@example.com', role: 'Étudiant', department: 'Mathématiques', active: true },
    { name: 'Emma Durand', email: 'emma.durand@example.com', role: 'Étudiant', department: 'Informatique', active: false },
    { name: 'Julie Robert', email: 'julie.robert@example.com', role: 'Enseignant', department: 'Mathématiques', active: true },
  ];

  const getRoleBadge = (role: string) => {
    if (role === 'Admin') return <Badge variant="danger">Admin</Badge>;
    if (role === 'Enseignant') return <Badge variant="info">Enseignant</Badge>;
    return <Badge variant="success">Étudiant</Badge>;
  };

  return (
    <div>
      <Header userName="Administrateur" />
      <div className="flex min-h-[calc(100vh-4rem)]">
        <Sidebar items={menuItems} />
        <main className="flex-1 p-6 lg:p-8 max-w-7xl mx-auto w-full">
          <h1 className="text-3xl font-bold mb-8">Gestion des Utilisateurs</h1>

          <Card className="mb-6">
            <div className="flex flex-wrap gap-3">
              <button className="btn btn-primary flex items-center gap-2">
                <PlusIcon className="w-4 h-4" />
                Ajouter utilisateur
              </button>
              <button className="btn btn-outline flex items-center gap-2">
                <ArrowUpTrayIcon className="w-4 h-4" />
                Importer CSV
              </button>
              <div className="flex-1 min-w-[200px]">
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-gray" />
                  <input
                    type="text"
                    className="input pl-10"
                    placeholder="Rechercher un utilisateur..."
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
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Rôle</th>
                    <th>Département</th>
                    <th>Statut</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={index}>
                      <td><strong>{user.name}</strong></td>
                      <td>{user.email}</td>
                      <td>{getRoleBadge(user.role)}</td>
                      <td>{user.department}</td>
                      <td>
                        <div className={`toggle ${user.active ? '' : 'inactive'}`}></div>
                      </td>
                      <td>
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
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <button className="p-2 border border-gray-300 rounded-lg bg-white text-text-gray cursor-default">
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
              <button className="px-4 py-2 border border-primary bg-primary text-white rounded-lg font-medium">1</button>
              <button className="px-4 py-2 border border-gray-300 bg-white text-text-gray rounded-lg cursor-default">2</button>
              <button className="p-2 border border-gray-300 rounded-lg bg-white text-text-gray cursor-default">
                <ChevronRightIcon className="w-5 h-5" />
              </button>
              <span className="ml-4 text-text-gray">Page 1 sur 2</span>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}
