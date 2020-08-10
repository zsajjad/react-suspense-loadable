# React Suspense Loadable

React Suspense based loadable wrapper component

[![npm](https://img.shields.io/npm/dm/react-suspense-loadable.svg)](https://www.npmjs.com/package/react-suspense-loadable)

## Installation

```bash
npm i react-suspense-loadable
```

## Usage

```javascript
import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
```
