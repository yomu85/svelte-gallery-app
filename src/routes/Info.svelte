<script>
  import { push } from 'svelte-spa-router'
  import Loader from '~/components/Loader.svelte'
  import { searchInfoWidthId, theInfo, loading  } from '~/store/info'

  export let params = {}

  searchInfoWidthId(params.id)
</script>

<div class="container">
  {#if $loading}
    <div class="skeleton-loader">
      <div class="poster"></div>
      <div class="skeletons">
        <div class="skeleton title"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
      </div>
      <Loader 
      scale="1" 
      absolute={true}
      fixed={false} />
    </div>
  {:else}
    <div class="info-details">
      <div 
        style="background-image: url({$theInfo.download_url});"
        class="poster">
      </div>
      <div class="specs">
        <div class="title">
          {$theInfo.author}
        </div>
        <div>
          <h3>Id</h3>
          {$theInfo.id}
        </div>
        <div>
          <h3>Url</h3>
          <a href={$theInfo.url} target="_blank">{$theInfo.url}</a>
        </div>
        <div>
          <h3>Download Url</h3>
          <a href={$theInfo.download_url} target="_blank">{$theInfo.download_url}</a>
        </div>
        <div>
          <h3>Size</h3>
          <span class="size">{$theInfo.width}px * {$theInfo.height}px</span>
        </div>
        <div>
          <button 
            class="btn"
            on:click={event=> {
              push('/')
            }}>
            go back
          </button>
        </div>
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  .skeleton-loader {
    display: flex;
    .poster {
      @media #{$mobile} {
        display:none;
      }
    }
    .skeletons {
      flex:1;
      .skeleton {
        width: 100%;
        height: 100px;
        background-color: $color--area;
        border-radius: 8px;
        margin-top: 20px;
        &:first-child {
          margin-top: 0;
        }
        &.title {
          height: 100px;
        }
        &.etc {
          width: 40%;
          height: 50px;
        }
      }
    }
  }
  .info-details {
    color: $color--white-50;
    display: flex;
    @media #{$mobile} {
      display: block;
    }
  }
  .poster {
    position: relative;
    flex-shrink: 0;
    width: 500px;
    height: calc(500px*3px/2px);
    border-radius: 10px;
    margin-right: 70px;
    background-color: $color--area;
    background-position: center;
    background-size: cover;
    @media #{$tablet} {
      width: 300px;
      height: calc(300px*3px/2px);
      margin-right: 30px;
    }
    @media #{$mobile} {
      display: block;
      margin-bottom: 50px;
    }
  }
  .specs {
    .title {
      font-family: 'Oswald', sans-serif;
      font-size: 70px;
      color: $color--white;
      line-height: 1;
      margin-bottom: 30px;
      @media #{$mobile} {
        font-size: 50px;
      }
    }
    h3 {
      color: $color--white;
      margin: 24px 0 6px;
    }
    a {
      color: $color--white;
    }
    .size {
      color: $color--primary;
    }
    .btn {
      height: 40px;
      min-width: 150px;
      margin-top: 20px;
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
  }
</style>