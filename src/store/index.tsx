import { makeAutoObservable } from "mobx";
// import { observer } from "mobx-react-lite"		/* в данном случае не нужен */
import simpleDDP from 'simpleddp';
import ws from 'isomorphic-ws';
import { simpleDDPLogin } from 'simpleddp-plugin-login';		/* используем для авторизации */

class BackEnd {
	server: any;

	constructor() {
		makeAutoObservable(this);

		let opts = {
			endpoint: "ws://cloud.astrapos.ru/websocket",
			SocketConstructor: ws,
			reconnectInterval: 3000
		};

		this.server = new simpleDDP(opts, [simpleDDPLogin]);

		(async () => {
			let userAuth = await this.server.login
				({
					password: '1234',
					user: {
						username: '9049915511'
					}
				})

			console.log('userAuth', userAuth)

			this.server.collection('products').onChange(({ prev, next }: { prev: any, next: any }) => {
				console.log('previus user data', prev);
				console.log('previus user data', next);
			})

			this.server.collection('products').onChange((a: any) => {
				console.log('previus user data', a);
				console.log('previus user data', a);
			})
		})();
	}

	async fetch() {
		let userSub = this.server.subscribe("products");
		await userSub.ready();
	};
}

export default BackEnd;
