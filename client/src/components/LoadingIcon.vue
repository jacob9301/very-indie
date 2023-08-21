<script setup></script>

<template>
    <div>
      <div class="icon">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <div class="bar4"></div>
        <div class="bar5"></div>
      </div>
    </div>
</template>

<style scoped>
  .icon {
    margin: 100px auto;
    width: 50px;
    height: 40px;
    text-align: center;
    font-size: 10px;
  }

  .icon>div {
    background-color: #1DB954;
    height: 100%;
    width: 6px;
    display: inline-block;
    margin: 0 2px;

    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
    animation: sk-stretchdelay 1.2s infinite ease-in-out;
  }

  .icon .bar2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .icon .bar3 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  .icon .bar4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  .icon .bar5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  @-webkit-keyframes sk-stretchdelay {
    0%,
    40%,
    100% {
      -webkit-transform: scaleY(0.4)
    }
    20% {
      -webkit-transform: scaleY(1.0)
    }
  }

  @keyframes sk-stretchdelay {
    0%,
    40%,
    100% {
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1.0);
      -webkit-transform: scaleY(1.0);
    }
  }

</style>