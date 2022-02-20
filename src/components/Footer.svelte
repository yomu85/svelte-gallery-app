<footer>
  <div>
    <a href="https://github.com/yomu85/svelte-gallery-app">GitHub Repo.</a>
  </div>
  <div>
    <a href="https://github.com/yomu85">@{new Date().getFullYear()} Yomu85</a>
  </div>
</footer>

<style lang="scss">
  footer {
    padding: 70px;
    text-align: center;
    a {
      color: $color--white-10;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>