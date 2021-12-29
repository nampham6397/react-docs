// The React useCallback Hook returns a memoized callback function
// only runs when one of its dependencies update

import { useCallback } from "react";
// Everytime App re-render, by using useCallback() the function is called one time
// So Chart is not re-rendered
const App = () => {
    const handleChartTypeChange = useCallback((type) => {}, [])
    return <Chart onTypeChange={handleChartTypeChange} />
} 

 // The React useMemo Hook returns a memoized value
 // The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value 
 // and useCallback returns a memoized function

// Everytime App re-render, by using useMemo() it only created the array one time
// So chart is not re-rendered
const App = () => {
    const data = useMemo(() => [1, 2, 3], [])
    return <Chart data={data} />
} 