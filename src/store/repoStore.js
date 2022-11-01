import { makeAutoObservable } from "mobx";

export class RepoStore{
  constructor() {
    this._repo = {};
    this._commits = [];
    makeAutoObservable(this);
  }

  setRepo(repo) {
    this._repo = repo;
  }

  setCommits(commits) {
    this._commits = commits;
  }

  get info() {
    return this._repo;
  }

  get commits() {
    return this._commits;
  }
}
