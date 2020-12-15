/**
 * React introduction
 */
 
/**
 
 @Component({
	selector: 'app-header',
	template: `
		<header (click)="clickHeader.emit('hello')">
			<h1>
				hello header
			</h1>
		</header> 	
	`
 })
 export class Header {
	 @Input('message')
	 myMessage : string;
	 
	 @Output()
	 clickHeader: EventEmitter<string> = new EventEmitter()
	 
 }
 
 */
 
/*
React.createElement(
	
)
*/

// props => { message: '', foo: 10, clickCb }
function Header(props) {
	
	const handleClick = () => {
		props.clickCb('hello');
	}
	
	return (
		<header onClick={handleClick}>
			<h1>
				hello header {Math.random()} {props.message}
			</h1>
		</header> 
	)
	
}

/**

@Component({
	selector: 'app-root'
	template: `
		<h1>
			{{ showMessage }}
		</h1>
		<app-header [message]="sayHello()" (clickHeader)="displayMessage($event)" ></app-header>
	`
})
export class AppComponent {
	showMessage: string = 'foo bar';
	
	constructor(...) {}
	
	sayHello() {
		return 'hello world';
	}
	
	displayMessage(msg) {
		this.showMessage = msg;
	}
}

 */
 

function App() {
	const [showMessage, setShowMessage] = React.useState('foo bar');
	
	// react has manual change detection and will not trigger cd if this variable
	// chage
	// we need to create a special variables called state variables
	// let showMessage = 'foo bar';
	
	const sayHello = () => {
		return 'hello world';
	}
	
	const handleClick = (message) => {
		console.log(message);
		// showMessage = message;
		setShowMessage(message);
	}
	
	return (
		<div>
			<h1>
				{showMessage}
			</h1>
			<Header message={sayHello()} foo={10} clickCb={handleClick} />
			
			<TodoList />
		</div>
	)
}


// no DI built in in react.


/**
main.ts

@NgModule({
	bootstrap: [AppComponent]
})
export class AppModule

platformBrowserDynamic().bootstrapModule(AppModule)
 */
 
 
/**

@Component({
	template: `
		<ul>
			<li *ngFor="..."></li>
		</ul>
	`,
	...
})
export class TodoList implements OnInit {
	todoList$: Observable<any>
	
	constructor(private _http: HttpClient) {}
	
	ngOnInit() {
		//
		[
			{id: 1, title: '...', description}	
		]
		//
		this.todoList$ = this._http.get('....')
	}
}

 */
 

function TodoList() {
	const [todoList, setTodoList] = React.useState([]);
	
	React.useEffect(() => {
		fetch('http://nztodo.herokuapp.com/api/tasks/?format=json')
			.then((response) => {
				return response.json()
			})
			.then((json) => {
				setTodoList(json);
				// [{title: '...'}, {...}] => <li>{title}</li>
			})
	}, [])
	
	return (
		<ul>
			{
				todoList.map((singleTodoObject) => {
					return (
						<li key={singleTodoObject.id}>
							{singleTodoObject.title}
						</li>
					)
				})  
			}
		</ul>
	)
	
}

 
ReactDOM.render(
	<App />,
	document.getElementById('container')
)