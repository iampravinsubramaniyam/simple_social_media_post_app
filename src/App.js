import './App.css';
import {useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Posts from './Posts.js';
import Missing from './Missing';
import Footer from './Footer.js'
import {format} from 'date-fns';

function App() {
	const [title,setTitle] = useState('');
	const [body,setBody] = useState('');
	const navigate = useNavigate();

	const [posts, setPosts] = useState(JSON.parse(localStorage.getItem("userPosts")) || [])
	const [search, setSearch] = useState('');

	const handleNewPost = (e) =>{
		e.preventDefault();
		const dateTime = format(new Date(),'MMMM dd, yyyy pp');

		const id = posts.length?posts[posts.length-1].id+1:1;
		
		const createObj = {id:id,title:title,datetime:dateTime,body: body,}

		posts.reverse();
		const updatedPosts = [...posts,createObj];
		setPosts(updatedPosts.reverse());
		localStorage.setItem("userPosts",JSON.stringify(updatedPosts.reverse()))
		setBody('');
		setTitle('');
		navigate('/');

	}


	const handleDelete = (id) =>{
		const postUpdate = posts.filter((post)=>post.id !== id);

		setPosts(postUpdate);
		localStorage.setItem("userPosts",JSON.stringify(postUpdate))
		navigate('/');
	}

	return (
		<div className="App">
			<div className = "AppNav">
				<Header
					title = "Postify"
				/>
				<Nav
					search = {search}
					setSearch = {setSearch}
				/>
			</div>

			<div className = "AppBody">
				<Routes>
					<Route path = '/' />
						<Route  index element = {<Home
							posts = {posts.filter((items)=>items.body.toLowerCase().includes(search.toLowerCase()))}
							search = {search}
						/>}/>
					<Route/>


					<Route path = "post/:id" element = {<PostPage
						posts={posts}
						handleDelete={handleDelete}
					/>}/>

					<Route path = '/newposts' 
						element = {<NewPost
						handleNewPost = {handleNewPost}
						title = {title}
						setTitle = {setTitle}
						body = {body}
						setBody = {setBody}
					/>}/>

					<Route path = '/about' element = {<About/>}/>
					<Route path = '*' element = {<Missing/>}/>

				</Routes>
			</div>


			<Footer/>
		</div>
	);
}

export default App;
