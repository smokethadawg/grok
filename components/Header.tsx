"use client"

import { useSession, signIn, signOut } from "next-auth/client"

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Modular Website</h1>
        <nav>
          {session ? (
            <div className="flex items-center space-x-4">
              <span>Welcome, {session.user?.name}</span>
              <button onClick={() => signOut()} className="bg-red-500 px-4 py-2 rounded">Logout</button>
            </div>
          ) : (
            <button onClick={() => signIn("github")} className="bg-blue-500 px-4 py-2 rounded">Login with GitHub</button>
          )}
        </nav>
      </div>
    </header>
  )
}