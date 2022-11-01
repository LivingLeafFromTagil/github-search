import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../..";

export const UserRepo = observer((props) => {

  const {user, repo} = useContext(Context);

  const navigate = useNavigate()

  const onRepoSelect = () => {
    repo.setRepo(props.repoObj);
    navigate(`/user/${user.info.login}/${repo.info.name}`);
  }

  return(
    <tr className="odd:bg-slate-200">
      <td 
        className="p-3 border-r border-black hover:text-orange-400 cursor-pointer"
        onClick={onRepoSelect}
        >
          {props.name}
        </td>
      <td className="p-3 border-r border-black">{props.language}</td>
      <td className="p-3 border-r border-black">{props.description}</td>
      <td className="p-3">{props.stars}</td>
    </tr>
  )
});