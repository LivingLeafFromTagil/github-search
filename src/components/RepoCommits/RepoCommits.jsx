import React from "react";

export const RepoCommits = (props) => {
  return(
    <tr className="odd:bg-slate-200">
      <td className="p-3 border-r border-black">{props.author}</td>
      <td className="p-3 border-r border-black max-w-2xl">{props.comment}</td>
      <td className="p-3 border-r border-black">{props.hash}</td>
      <td className="p-3">{props.date}</td>
    </tr>
  )
}