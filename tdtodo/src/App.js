import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { Fragment, useEffect, useState } from "react"; // Ajout de useState
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
	// let loaded = false;
	const [loaded, setLoaded] =useState(false);
	//  Ajout d'un state qui contient quelques tâches
	const [todos, setTodos] = useState([
		// { done: false, description: "Trouver un job" },
		// { done: true, description: "Apprendre React.JS" },
		// { done: true, description: "Découvrir Formacitron" },
	]);

	useEffect(() => {
		if (loaded) 
			localStorage.setItem("todos", JSON.stringify(todos));
	}); //Sauve tous changements.

	useEffect(() => {
		const tmpTodos = JSON.parse(localStorage.getItem("todos") || "[]"); // si localStorage.getItem retourne null, JSON.parse revoit un [] vide
		setTodos(tmpTodos);
		setLoaded(true);
	}, []); // L'ajout tableau vide fait que useEffect ne s'execute qu'au démarrage.

	const addTodo = (todo) => {
		const tmpTodos = [...todos];
		tmpTodos.push({ done: false, description: todo });
		setTodos(tmpTodos);
	};

	const deleteTodo = (index) => {
		const tmpTodos = [...todos];
		tmpTodos.splice(index, 1);
		setTodos(tmpTodos);
	};

	const toggleTodo = (index) => {
		const tmpTodos = [...todos];
		tmpTodos[index].done = !tmpTodos[index].done;
		setTodos(tmpTodos);
	};

	return (
		<>
			<Header todos={todos} />

			<main>
				<Form addTodo={addTodo} />

				<List todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
			</main>

			<Footer />
		</>
	);
}

export default App;
