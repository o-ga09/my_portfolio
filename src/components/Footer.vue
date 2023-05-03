<template>
    <footer class="w-full bg-yellow-200">
        <div class="flex justify-center">
            <a href="https://twitter.com/o_ga09">
                <svg-icon class="mx-10" type="mdi" :path="twitterIcon"></svg-icon>
            </a>

            <a href="https://github.com/o-ga09">
                <svg-icon class="mx-10" type="mdi" :path="githubIcon"></svg-icon>
            </a>
            
        </div>
        <p>gopher designed by Renée French</p>
        <p>&copy; 2023 @o-ga09 All Right Reserved</p>
    </footer>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiTwitter } from '@mdi/js';
import { mdiGithub } from '@mdi/js';

export default {
    components: {
		SvgIcon
	},
    name: 'Footer',
    data() {
        return{
            twitterIcon: mdiTwitter,
            githubIcon: mdiGithub,
        }
    }
}
</script>
