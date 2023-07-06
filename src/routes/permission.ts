import { isNavigationFailure } from 'vue-router';
import { router } from './routes.module';

const whiteList: string[] = [];

router.beforeEach((to, from, next) => {
    if (whiteList.includes(to.path)) {
        next();
    }
    else {
        next();
    }
});

router.afterEach((to, from, failure) => {
});
