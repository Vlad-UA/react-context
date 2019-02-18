# Context

## What for?
Context is designed to share data that can be considered “global” for a tree of React components.
1. locale preference (or preferred language) 
2. UI theme
3. current authenticated user 
4. theme

**Often instead of Context we can use Redux or graphql.**

## What is Context doing?
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

## Tips
1. Use separate file for creation Context -- React.createContext({})<br>
See problem #1

## Re-render
https://reactjs.org/docs/context.html#contextprovider<br>
All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes. The propagation from Provider to its descendant consumers is not subject to the shouldComponentUpdate method, so the consumer is updated even when an ancestor component bails out of the update.

Changes are determined by comparing the new and old values using the same algorithm as `Object.is`.


## How to get context?
1. [Context.Consumer](https://reactjs.org/docs/context.html#contextconsumer)

```javascript
<MyContext.Consumer>
  {value => {/* render something based on the context value */}}
</MyContext.Consumer>
```

2. [Class.contextType] (https://reactjs.org/docs/context.html#classcontexttype)
```javascript
class MyClass extends React.Component {
  static contextType = MyContext;
  render() {
    let value = this.context;
    /* render something based on the value */
  }
}
```


## Links
1. React - Context https://reactjs.org/docs/context.html
2. Video:
    (RU) https://youtu.be/vc1shGHGBj0?t=159
    (EN) https://school.reactpatterns.com/courses/the-context-api/lectures/5535725
3. React - Context LEGACY https://reactjs.org/docs/legacy-context.html

## Problems
1. [16.6 Context API not working in class component](https://github.com/facebook/react/issues/13969)


## Consuming Multiple Contexts
```javascript
// File context/them-context.js
//
// Theme context, default to light theme
const ThemeContext = React.createContext('light');

// File context/user-context.js
//
// Signed-in user context
const UserContext = React.createContext({
  name: 'Guest',
});

// File index App.js
//
class App extends React.Component {
  render() {
    const {signedInUser, theme} = this.props;

    // App component that provides initial context values
    return (
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={signedInUser}>
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

// File layout.js
//
function Layout() {
  return (
    <div>
      <Sidebar />
      <Content />
    </div>
  );
}

// File content.js
//
// A component may consume multiple contexts
function Content() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
            <ProfilePage user={user} theme={theme} />
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}
```
