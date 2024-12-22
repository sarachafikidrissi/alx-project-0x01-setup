import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";
import React from "react";


const Users: React.FC<{users: UserProps[]}> = ({ users }) => {
    return (
        <div className="flex flex-col h-screen">
        <Header />
        <main className="p-4">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Users</h1>
            <button
              className="bg-blue-700 px-4 py-2 rounded-full text-white"
            >
              Add User
            </button>
          </div>
  
          <div className="grid grid-cols-3 gap-4 mt-4">
            {users.map((user) => (
              <div key={user.id} className="p-4 border rounded-lg">
                <h3 className="text-xl font-semibold">{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.phone}</p>
              </div>
            ))}
          </div>
        </main>
  
        
      </div>
    )



}
export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()

    return {
        props: {
            users
        }
    }
}

export default Users;