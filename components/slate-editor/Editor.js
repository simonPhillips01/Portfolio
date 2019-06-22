import React from 'react';
import { Editor } from 'slate-react'
import { Value } from 'slate'

// Create our initial value...
const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            text: 'A line of text in a paragraph.',
          },
        ],
      },
    ],
  },
});

export default class SlateEditor extends React.Component {
    // Set the initial value when the app is first constructed.
    state = {
      value: initialValue,
      isLoaded: false
    }

    componentDidMount() {
        this.setState({isLoaded: true});
    }

    // On change, update the app's React state with the new editor value.
    onChange = ({ value }) => {
      this.setState({ value })
    }

    onKeyDown = (event, editor, next) => {
        // Return with no changes if the keypress is not '&'
        if (event.key !== '&') return next()

        // Prevent the ampersand character from being inserted.
        event.preventDefault()
        
        // Change the value by inserting 'and' at the cursor's position.
        editor.insertText('and')
    }

    // Render the editor.
    render() {
        const { isLoaded } = this.state;

      return (
          <React.Fragment>
            { isLoaded &&
            <Editor value={this.state.value}
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown} />
            }
          </React.Fragment>
      )
    }
  }