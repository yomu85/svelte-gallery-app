<script>
  import { link, push } from 'svelte-spa-router'
  import active from 'svelte-spa-router/active'
  import Logo from '~/components/Logo.svelte'

  const menus = [
    {
      href: '/',
      name: 'Search'
    },
    {
      href: '/info/0',
      name: 'Info',
      path: '/info/*'
    },
    {
      href: '/about',
      name: 'About',
      path: /^\/about/
    }
  ]
</script>

<header>
  <Logo />
  <nav>
    <ul>
      {#each menus as {href, name, path} (name)}
        <li>
          <a 
            use:link
            use:active={path}
            {href}>
            {name}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
  <div class="user"
    on:click={event=> {
      console.log(event)
      push('/about?name=Svelte&email= &phone= &blog=https://svelte.dev&image=%2Fassets%2Fk_white.png')
    }}>
    <img src="/assets/k_white.png" alt="User">
  </div>
</header>

<style lang="scss">
  header {
    padding: 20px 40px;
    background-color: $color--black-90;
    position: sticky;
    top:0;
    z-index: 9;
    display:flex;
    align-items: flex-end;
    @media #{$mobile} {
      padding: 14px 20px;
    }
    nav {
      @media #{$mobile}{
        display:none;
      }
      margin-left: 40px;
      ul {
        display: flex;
        li {
          margin-left: 10px;
          &:first-child{
            margin-left:0;
          }
          a {
            font-size: 14px;
            font-weight: 700;
            color: $color--white-50;
            text-decoration: none;
          }
        }
      }
    }
    .user {
      width: 40px;
      height: 40px;
      padding: 6px;
      box-sizing: border-box;
      border-radius: 50%;
      background-color: $color--area;
      cursor: pointer;
      position:absolute;
      top:0;
      bottom:0;
      right:40px;
      margin:auto;
      transition: .4s;
      @media #{$mobile} {
        right:20px;
      }
      &:hover {
        background-color: lighten($color--area, 20%);
      }
      img {
        width: 100%;
      }
    }
  }
  header :global(a.active) {
    color: $color--primary !important;
  }
</style>