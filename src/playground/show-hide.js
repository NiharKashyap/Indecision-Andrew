let show = true

const toggle_disp = () =>
{
	show = !show;
	render();
};


const appRoot = document.getElementById('app');


const render = () =>
{
	const jsx = (

		<div>
			<h1>Toggle</h1>
			<button onClick={toggle_disp}>{show==true ? "Hide" : "Show" }</button>
			{show && <p>This text will be hidden</p>}
		</div>

	);

	ReactDOM.render(jsx, appRoot);
}

render();

