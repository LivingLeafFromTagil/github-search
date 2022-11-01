import { makeAutoObservable } from "mobx";

export class UserStore{
  constructor() {
    this._user = {};
    this._repos = {};
    this._searchError = {};
    makeAutoObservable(this);
  }

  setUser(user) {
    this._user = user;
  }

  setRepos(repos) {
    this._repos = repos;
  }

  get info() {
    return this._user;
  }

  get repos() {
    return this._repos;
  }
}