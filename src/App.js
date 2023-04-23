import './App.css'
import PostsList from './features/posts/PostsList'
import AddPostForm from './features/posts/AddPostForm'
// import Counter from './features/counter/Counter'

// function App () {
//   return (
//     <main className='App'>
//       <Counter />
//     </main>
//   )
// }
function App () {
  return (
    <main className='App'>
      <AddPostForm />
      <PostsList />
    </main>
  )
}

export default App
