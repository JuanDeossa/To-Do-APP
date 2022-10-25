import React from "react";
import { AppUI } from "./AppUI.js";
import { TaskProvider } from "../TodoContext/index.js";

function App() {
  return (
    <TaskProvider>
      <AppUI/>
    </TaskProvider>
  );
}

export {App}

