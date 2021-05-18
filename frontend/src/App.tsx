import React from 'react';
import './App.css';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Button } from '@zendeskgarden/react-buttons';
import { Field, Label, Hint, Input, Message } from '@zendeskgarden/react-forms';


function App() {
  return (
    <ThemeProvider>
      <form>
        <Field>
          <Label>Example Text Input</Label>
          <Hint>Hint text</Hint>
          <Input placeholder="Accepts all native input props" />
          <Message>Default message styling</Message>
        </Field>
      </form>

      <Button>Smartybox</Button>
    </ThemeProvider>
  );
}

export default App;
