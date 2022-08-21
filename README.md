# cc

Super simple utility for conditional classes. No dependencies, just 10 LOC.

## Usage

### Install

```bash
npm install @allwqre/cc
```

### React

```jsx
import cc from '@allwqre/cc';

function App() {
  const [someState, setSomeState] = useState(false);

  return <div onClick={() => setSomeState(prev => !prev)} className={cc('someClass', someState && 'classWhenTrue')}>Hello World</div>;
}
```
