import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faPlus, faCircleArrowDown, faShuffle, faBackwardStep, faForwardStep, faArrowRotateRight, faList, faDesktop, faVolumeLow } from '@fortawesome/free-solid-svg-icons';

import { faHeart, faFolder, faCirclePlay } from '@fortawesome/free-regular-svg-icons';

/* add icons to the library */
library.add(faPlus, faCircleArrowDown, faHeart, faFolder, faShuffle, faBackwardStep, faForwardStep, faCirclePlay, faArrowRotateRight, faList, faDesktop, faVolumeLow)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')