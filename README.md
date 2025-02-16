# React useEffect Infinite Loop Bug
This repository demonstrates a common React bug: an infinite loop caused by improperly using the useEffect hook. The bug occurs because the count state variable is updated within the useEffect callback without any dependency array to control when the effect runs.  This leads to a continuous loop of state updates and re-renders.

The solution shows how to correctly use the dependency array to resolve this issue and prevent unexpected behavior.