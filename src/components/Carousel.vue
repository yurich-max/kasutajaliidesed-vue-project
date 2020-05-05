<template>
    <b-container fluid="" class="p-0">
        <div>
            <b-carousel
                    id="carousel"
                    :interval="5000"
                    controls
                    indicators
                    class="d-none d-sm-none d-md-block"
                    >

                <!-- Text slide -->
                <b-carousel-slide
                        caption=""
                        text=""
                        img-src="https://i.postimg.cc/MTk8FdvG/carousel.png">
                    <h1 class="pb-5"> 🍣 => 👍! Just try it😄</h1>
                </b-carousel-slide>

                <!-- Slide -->
                <b-carousel-slide
                        caption="We just can't describe is using words!"
                        text="That's why we'll use emoji🍆"
                        img-src="https://i.postimg.cc/qMCvBb3p/carousel-Copy1.png">
                    <h1>🥰👍🍣💖💖💖</h1>
                </b-carousel-slide>

            </b-carousel>
        </div>
    </b-container>
</template>

<script>
    export default {
        name: 'Carousel',
        props: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
