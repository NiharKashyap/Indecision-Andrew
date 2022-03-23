console.log('Running')


// JSX - JavaScript XML


const app = {
  title:'Indecision App',
  subtitle:'This starts indecision app',
  option: []

}


const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option)
  {
    app.option.push(option);
    e.target.elements.option.value = ''
    renderApp();    
  }
};

const removeAll = () => {
  app.option = [];
  renderApp();
}


const appRoot = document.getElementById('app');

const onMakeDecision = () =>
{
  const randomNum = Math.floor(Math.random() * app.option.length);
  const option = app.option[randomNum];
  alert(option);
};


const renderApp = () => 
{
  const template = (
<div>
  <h1>{app.title}</h1>
  {app.subtitle && <p>{app.subtitle}</p>}
  {app.option.length>0 ? 'Here are your options' : 'No Option'}
  <button disabled = {app.option.length===0} onClick={onMakeDecision}>What Should I do</button>
  <button onClick={removeAll}>Remove All</button>
  <ol>
  {
    app.option.map((option) => {
      return <li key={option}>{option}</li>;
    })
  }
  </ol>
  <form onSubmit={onFormSubmit}>
    <input type="text" name='option'/>
    <button>Add Option</button>
  </form>
</div>
);


ReactDOM.render(template, appRoot);

};

renderApp();