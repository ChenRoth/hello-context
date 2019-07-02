import React from 'react';
import './App.css';
import { TodoList } from './components/TodoList/TodoList';

export const { Provider: ColorProvider, Consumer: ColorConsumer } = React.createContext('green');

class App extends React.Component<any> {
    // line 7 is equivalent to this:
    // constructor(props: any) {
    //     super(props);

    //     this.state = {
    //         color: 'green'
    //     };
    // }

    render() {
        return (
            <div className="App">
                <ColorProvider value={'red'}>
                    <TodoList />
                </ColorProvider>
            </div>
        );
    }
}

export default App;
