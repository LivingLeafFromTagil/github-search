import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Context } from "../..";
import { NavigationButton, UserRepo } from "../../components";

export const UserPage = observer(() => {
  const {user} = useContext(Context);

  const repos = user.repos.filter(elem => elem.private === false).map((elem, index) => {
    return(
      <UserRepo 
        key={index}
        name={elem.name}
        language={elem.language}
        description={elem.description}
        stars={elem.stargazers_count}
        repoObj={elem}
      />
    )
  });

  return(
    <>
      <div className="flex justify-around mt-3">
        <header className="h-min w-1/4 text-center">
          <img className="inline h-80" src={user.info.avatar_url} alt="#avatar" />
          <p className="text-2xl">User login: <span className="font-bold">{user.info.login}</span></p>
        </header>
        <main className="w-3/4">
          <p className="font-bold">Repos ({user.info.public_repos}): </p>
          <table className="w-full">
            <thead>
              <tr>
                <td className="p-3 border-r border-b border-black">Name</td>
                <td className="p-3 border-r border-b border-black">Language</td>
                <td className="p-3 border-r border-b border-black">Description</td>
                <td className="p-3 border-b border-black">Stars</td>
              </tr>
            </thead>
            <tbody>
              {repos}
            </tbody>
          </table>
        </main>
      </div>
      <footer className="mb-6 mt-6 text-center">
        <NavigationButton location='/' text='Back'/>
      </footer>
    </>
  )
});