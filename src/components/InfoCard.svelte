<script>
  import { link } from 'svelte-spa-router'
  import Loader from '~/components/Loader.svelte'

  export let sInfo
  
  let thumImg = sInfo.download_url
  //썸네일로 사이즈 변경
  let _size = thumImg.split('/').reverse()[1]+'/'+thumImg.split('/').reverse()[0]
  
  thumImg = thumImg.replace(_size, '200/300')

  //로딩 체크
  let imageLoading = true

  if (sInfo.download_url === '') {
    imageLoading = false;
  } else {
    const img = document.createElement('img')
    img.src = thumImg
    img.addEventListener('load', ()=> {
      imageLoading = false
    })
  }
</script>

<a 
  use:link
  href={`/info/${sInfo.id}`}
  class="card">
  {#if imageLoading}
    <Loader 
      scale=".5" 
      absolute={true}
      fixed={false} />
  {/if}
  <div
   class="poster"
   style="background-image: url({thumImg});">
   {#if sInfo.download_url === ''}
    IMG <br>
    N/A
   {/if}
  </div>
  <div class="textBox">
    <div
      class="poster"
      style="background-image: url({thumImg});"></div>
    <div class="size">{sInfo.width} * {sInfo.height}</div>
    <div class="author">{sInfo.author}</div>
  </div>
</a>

<style lang="scss">
  .card {
    display: block;
    width: 200px;
    height: 300px;
    margin: 10px;
    border-radius: 6px;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    &:hover {
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 6px solid $color--primary;
        box-sizing: border-box;
      }
    }
    .poster {
      width: 100%;
      height: 100%;
      background-color: $color--area;
      background-position: center;
      background-size: cover;
      display:flex;
      justify-content: center;
      align-items: center;
      font-family: 'Oswald', sans-serif;
      color: $color--white-5;
      font-size: 20px;
      text-align: center;
    }
    .textBox {
      width: 100%;
      height: 66px;
      padding: 14px;
      box-sizing: border-box;
      overflow: hidden;
      position: absolute;
      bottom: 0;
      left: 0;
      .poster {
        position: absolute;
        bottom: 0;
        left: 0;
        transform: scale(2);
        filter: blur(5px);
        &::after{
          content: "";
          background-color: $color--black-50;
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 200%;
        }
      }
      .size {
        position: relative;
        color: $color--primary;
        font-size: 12px;
      }
      .author {
        position: relative;
        font-size: 15px;
        font-family: 'Oswald', sans-serif;
        color: $color--white;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
</style>