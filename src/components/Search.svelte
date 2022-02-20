<script>
  import { loadInfo, addInfo } from '~/store/info'
  
  let page = 1
  let number = 10

  loadInfo({
    page,
    number
  })

  function viewMore() {
    page++;
    addInfo({
      page,
      number
    })
  }
</script>

<!-- <div class="search">
  <div class="text-field">
    <input 
      bind:value={author}
      placeholder="Search for the author's name"
      type="text" 
      on:keydown={event => {
        event.key === 'Enter' && apply()
      }}/>
  </div>

  <button 
    class="btn"
    on:click={apply}>
    Apply
  </button>
</div> -->

<button 
  class="btn more"
  on:click={viewMore}>
  more
</button>

<style lang="scss">
  .search {
    display: grid;
    grid-template-columns: 1fr 120px;
    grid-gap: 10px;
    @media #{$mobile} {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 50px);
    }
    .text-field {
      display: inline-block;
      height: 50px;
      input {
        width: 100%;
        height: 100%;
        background-color: $color--area;
        outline: none;
        border: none;
        padding:0 20px;
        box-sizing: border-box;
        font-size: 14px;
        color: $color--white-60;
        border-radius: 4px;
        &::placeholder {
          color: $color--white-30;
        }
      }
    }
  }
  .btn {
      height: 50px;
      padding: 0 20px;
      border: none;
      outline: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 700;
      color: $color--black;
      background-color: $color--primary;
      transition: .4s;

      &:hover {
        background-color: darken($color--primary, 10%);
      }
  }
  .btn.more {
    margin-top: 20px;
    width: 100%;
  }
</style>