class IndecisionApp extends React.Component
{

  render()
  {


  const title = 'Indecision'
  const subtitle = 'Put your life in the hands of a computer'
  const options = ['Item One', 'Item Two', 'Item three']

    return(
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options}/>
        <AddOption />
      </div> 
    );
  }
}  


class Header extends React.Component
{
  render()
  {
    return (
        <div>
          <h1>Indecision</h1>
          <h2></h2>
        </div>
      );
  }
}

class Action extends React.Component
{
  handlePick()
  {
    alert('Handle Pick');
  }

  render() {
  return (
    <div>
      <button onClick={this.handlePick}>What should I do?</button>
    </div>
    );
  }
}

class Options extends React.Component
{
  constructor (props){
    super(props);
    this.handleRemoveAll=this.handleRemoveAll.bind(this);
  }
  handleRemoveAll()
  {
    console.log(this.props.options);
  }
  render()
  {
    return(
      <div>
      {
        this.props.options.map((option) => <Option key={option} optionText={option} /> )
      }
      <button onClick={this.handleRemoveAll}>Remove All</button>
      </div>
    );
  }
}

class Option extends React.Component
{
  render()
  {
    return(
      <div>
        Option:
        {this.props.optionText}
      </div>
      );
  }
  
}


class AddOption extends React.Component
{
  handleAddOption(e)
  {
    e.preventDefault();
    const val = e.target.option.value;
    
    if (val.trim())
    {
      alert(val)  
    }
    
  }

  render()
  {
    return(
      <div>
        <form onSubmit={this.handleAddOption}>
        <input type="text" name="option" />
        <button>Add Option</button>
        </form>
      </div>
    );
  }
}


//Options -> Options componenet here
// AddOption -> AddOption Component here



ReactDOM.render(<IndecisionApp /> , document.getElementById('app'));