# React 18 useEffect Cleanup Issue with setInterval

This repository demonstrates a subtle bug related to useEffect cleanup and setInterval in React 18.  The issue stems from the combination of automatic batching of state updates and the timing of component unmounting.

## Problem Description
The provided `MyComponent` uses `setInterval` to update a counter every second.  The `useEffect` hook includes a cleanup function to `clearInterval` to prevent memory leaks. However, under certain conditions (fast unmounts),  `clearInterval` might not be called in time, resulting in a memory leak.

## Solution
The solution involves using `useRef` to store the interval ID and checking if the component is still mounted before calling `clearInterval`.
