
This is a simple calculator with kittens. Enjoy!

Expected props: An object specifying the operators and their corresponding functions.

Example usage:

```javascript
export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        config: {
            operators: {
                '+': function(a, b) { return a + b },
                '-': function(a, b) { return a - b }
            }
        }
    }
  }
  
  render() {
    return (
      <div>
        <KittenCalculator {...this.state.config}/>
      </div>
    );
  }
}
```
