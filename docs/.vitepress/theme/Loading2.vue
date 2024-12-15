<template>
    <div>
        <div class="loading">
            <span style="--i:1;"></span>
            <span style="--i:2;"></span>
            <span style="--i:3;"></span>
            <span style="--i:4;"></span>
            <span style="--i:5;"></span>
            <span style="--i:6;"></span>
            <span style="--i:7;"></span>
            <span style="--i:8;"></span>
            <span style="--i:9;"></span>
            <span style="--i:10;"></span>
        </div>
        <!-- <div>吾生也有涯，而知也无涯。以有涯随无涯，殆已。</div> -->
    </div>
  
</template>

<style scoped>
.loading{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
span{
    width: 6px;
    height: 25px;
    background-color: var(--vp-loading-color);
    margin-left: 3px;
    transform: scaleY(0);
    animation: animate 1s linear infinite;
    animation-delay: calc(0.1s * var(--i));
}
@keyframes animate{
    0%,100%{
        transform: scaleY(0);
    }
    50%{
        transform: scaleY(1.5);
    }
}
</style>