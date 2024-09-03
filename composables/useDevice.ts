import { useMediaQuery } from '@vueuse/core'
import { useRouter } from '#app'
import { onMounted } from 'vue'

function resetScroll() {
    const viewPortDesktop = document.getElementById('view-port-desktop')
    const viewPortMobile = document.getElementById('view-port-mobile')
    if (viewPortDesktop) viewPortDesktop.scrollTop = 0
    if (viewPortMobile) viewPortMobile.scrollTop = 0
}

export function useDevice() {

    const isMobile = useMediaQuery('(max-width: 800px)')

    const navigatePush = (url: string) => useRouter().push(url).then(resetScroll)

    const navigateReplace = (url: string) => useRouter().replace(url).then(resetScroll)

    function resizeRedirect({ mobile, desktop }: { mobile?: string, desktop?: string }) {

        const resolve = (value: boolean) => {
            if(mobile) value ? navigateReplace(mobile) : { }
            if(desktop) value ? { } : navigateReplace(desktop)
        }    

        onMounted(() => resolve(isMobile.value))
        watch(isMobile, (value) => resolve(value))
    }

    return { resizeRedirect, navigatePush, navigateReplace }
}