import { observer } from "mobx-react-lite";
import React, { useContext, useState, useCallback } from "react";
import { useEffect } from "react";
import { Context } from "../..";
import { getCommits } from "../../api";
import { NavigationButton, RepoCommits } from "../../components";

//страница коммитов репозитория
export const RepoPage = observer(() => {
  const {user, repo} = useContext(Context);
  const [commits, setCommits] = useState([]);
  
  //против лишней отрисовки
  const useCommits = useCallback(async() => {
    const data = await getCommits(user.info.login, repo.info.name);
    setCommits(data);
  }, []);

  useEffect(() => {
      useCommits();
  }, [useCommits]);

  const elements = commits.map((commit, index) => {
    try {
      const iso = new Date(commit.commit.author.date);
      commit.commit.author.date = `${iso.getFullYear()}-${iso.getMonth() < 9 ? `0${iso.getMonth() + 1}`
      : iso.getMonth() + 1}-${iso.getDate() < 10 ? `0${iso.getDate()}`
      : iso.getDate()}`
      return(
        <RepoCommits
          key={index}
          author={commit.author.login}
          comment={commit.commit.message}
          hash={commit.sha}
          date={commit.commit.author.date}
        />
      )
    } catch (error) {
      return(
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      )
    }
  });

  return(
    <>
        {
          !elements.length &&
            (<header className="text-center mb-2 mt-2">
              <p className="text-3xl">Loading...</p>
            </header>)
        }
        {
          elements.length !== 0 &&
           (<main className="m-3">
              <table className="w-full">
                <thead>
                  <tr>
                    <td className="p-3 border-r border-b border-black">Author</td>
                    <td className="p-3 border-r border-b border-black">Comment</td>
                    <td className="p-3 border-r border-b border-black">Hash</td>
                    <td className="p-3 border-b border-black">Date</td>
                  </tr>
                </thead>
                <tbody>
                  {elements}
                </tbody>
              </table>
            </main>)
        }
      <footer className="mb-6 mt-6 text-center">
        <NavigationButton location={`/user/${user.info.login}`} text='Back'/>
      </footer>
    </>
  )
});