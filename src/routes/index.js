import Home from './Home.svelte'
import Info from './Info.svelte'
import About from './About.svelte'
import NotFound from './NotFound.svelte'

export default {
  '/': Home,
  '/info/:id': Info,
  '/about': About,
  '*' : NotFound
}