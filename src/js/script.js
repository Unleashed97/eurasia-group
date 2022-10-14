import * as customFunctions from './modules/functions.js'

// vendors
import Swiper, { Navigation, Pagination } from 'swiper'

// init Swiper:
const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],

    // Optional parameters
    direction: 'horizontal',
    loop: true,

    spaceBetween: 40,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-btn--next',
        prevEl: '.swiper-btn--prev',
    },
})
