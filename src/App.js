import logo from './logo.svg';
import './App.css';
import Counter from './Conmponents/Counter';
import  {connect,Provider} from 'react-redux';
import {createStore} from 'redux';
import counter from './Reducers/counter';

const store = createStore(counter)

const stateToPropertyMappter = state => (
  {value: state.value}
)

const dispatcherToPropertyMapper = dispatcher => (
  {
    plus: () => dispatcher ({type:'plus'}),
    minus: () => dispatcher ({type:'minus'}),
    reset: () => dispatcher ({type:'reset'})
  }
)

const CounterContainer = connect(
  stateToPropertyMappter,dispatcherToPropertyMapper
)(Counter)

function App() {
  return (
    <Provider store={store}>
   <CounterContainer />
   </Provider>
  );
}

export default App;
