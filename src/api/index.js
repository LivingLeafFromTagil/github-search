import axios from "axios"

const host = axios.create({
  baseURL: 'https://api.github.com',
})

export const getUser = async(login) => {
  const {data} = await host.get(`/users/${login}`);
  return data;
};

export const getUserRepos = async(login) => {
  const {data} = await host.get(`/users/${login}/repos?per_page=100`);
  return data;
};

export const getCommits = async(login, repo) => {
  const {data} = await host.get(`/repos/${login}/${repo}/commits`);
  return data;
};