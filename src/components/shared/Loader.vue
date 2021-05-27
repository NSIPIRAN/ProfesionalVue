<template>
 <div class="container">
  <div class="loader-wrapper">
    <div class="loader "></div>
  </div>
 </div>
    
</template>

<style lang="scss">
.loader-wrapper {
    background: #fff;
    transition: opacity .3s;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    padding: 2em;
        .loader {
            height: 80px;
            width: 80px;
            
        }
}
</style>