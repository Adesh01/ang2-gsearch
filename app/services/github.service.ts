import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
	private username: string;
	private client_id = 'cf92cca300f22b996cfa';
	private client_secret = 'afa0bef9a9afd8a593de9437827c47752594a91f';

	constructor(private _http: Http) {
		console.log('Github Service Ready...');
		this.username ='bradtraversy';
	}

	getUser(){
		return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
		.map(res => res.json());
	}

	getRepos(){
		return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
		.map(res => res.json());
	}

	updateUser(username:string){
		this.username = username;
	}


}