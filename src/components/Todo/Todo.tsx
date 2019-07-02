import * as React from 'react';
import { StyleConsumer } from '../../App';

export class Todo extends React.Component<any> {
    public render() {
        const { text } = this.props;
        return (
            <StyleConsumer>
                {style => <p style={style}>{text}</p>}
            </StyleConsumer>
        )
    }
}

