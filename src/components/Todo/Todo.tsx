import * as React from 'react';
import { ColorConsumer } from '../../App';

export class Todo extends React.Component<any> {
    public render() {
        const { text } = this.props;
        return (
            <ColorConsumer>
                {color => <p style={{ color }}>{text}</p>}
            </ColorConsumer>
        )
    }
}

