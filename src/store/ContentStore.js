import { makeAutoObservable } from "mobx";

export default class ContentStore{
    constructor() {
        this._posts = []
        this._stories = []
        makeAutoObservable(this)
    }

    setPosts(posts){
        this._posts = posts
    }

    setStories(stories){
        this._stories = stories
    }

    get posts() {
        return this._posts
    }
    get stories() {
        return this._stories
    }
}