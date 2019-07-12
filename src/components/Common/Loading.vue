<template>
    <div class="loader">
        <div class="loader-item"></div>
        <div class="loader-item"></div>
        <div class="loader-item"></div>
        <div class="loader-item"></div>
        <div class="loader-item"></div>
    </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style scoped>
    .loader {
        width: 300px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loader-item {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #fff;
        margin: 10px;
        box-shadow: 0px 0px 10px 4px #fffd7c;
        animation: bounce 4s cubic-bezier(0.6, -0.28, 0.79, 1.63) infinite;
    }
    .loader-item:nth-child(1) {
        animation-delay: -.7s;
    }
    .loader-item:nth-child(2) {
        animation-delay: -1s;
    }
    .loader-item:nth-child(3) {
        animation: none;
    }
    .loader-item:nth-child(4) {
        animation-delay: -1s;
    }
    .loader-item:nth-child(5) {
        animation-delay: -.7s;
    }

    @keyframes bounce {
        5% {
            transform: translateY(40px);
        }
        10% {
            transform: translateY(-40px);
        }
        15% {
            transform: translateY(30px);
        }
        20% {
            transform: translateY(-30px);
        }
        25% {
            transform: translateY(20px);
        }
        30% {
            transform: translateY(-20px);
        }
        35% {
            transform: translateY(15px);
        }
        40% {
            transform: translateY(-15px);
        }
        45% {
            transform: translateY(10px);
        }
        50% {
            transform: translateY(-10px);
        }
        55% {
            transform: translateY(8px);
        }
        60% {
            transform: translateY(-8px);
        }
        65% {
            transform: translateY(6px);
        }
        70% {
            transform: translateY(-6px);
        }
        80% {
            transform: translateY(4px);
        }
        90% {
            transform: translateY(-4px);
        }
        100% {
            transform: translateY(0);
        }
    }
</style>
