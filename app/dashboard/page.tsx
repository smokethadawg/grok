"use client"

import { useState } from 'react'

export default function Dashboard() {
  const [modules, setModules] = useState([
    { id: 1, name: 'User Profile', enabled: true },
    { id: 2, name: 'GitHub Storage', enabled: true },
    { id: 3, name: 'Analytics', enabled: false },
    { id: 4, name: 'Notifications', enabled: false },
  ])

  const toggleModule = (id: number) => {
    setModules(modules.map(module =>
      module.id === id ? { ...module, enabled: !module.enabled } : module
    ))
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map(module => (
          <div key={module.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">{module.name}</h2>
            <div className="flex items-center justify-between">
              <span className={`px-2 py-1 rounded text-sm ${module.enabled ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {module.enabled ? 'Enabled' : 'Disabled'}
              </span>
              <button
                onClick={() => toggleModule(module.id)}
                className={`px-4 py-2 rounded ${module.enabled ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white`}
              >
                {module.enabled ? 'Disable' : 'Enable'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">GitHub Integration</h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Connect your GitHub account to enable storage and authentication features.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
            Connect GitHub
          </button>
        </div>
      </div>
    </div>
  )
}