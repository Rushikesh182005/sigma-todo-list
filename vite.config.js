import { react } from "@babel/types";
import { defaults } from "browserslist";
import { defineConfig } from "vite";
import React from "vitejs/plugin-react";

//https://vitejs.devconfig/
export default defineConfig({
    plugins: [react()],
    base: "/sigma-todo-list/",
})