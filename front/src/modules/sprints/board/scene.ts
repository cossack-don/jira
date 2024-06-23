import {useStoreSprints} from "@/modules/sprints/useStoreSprints";


export const useScene = () => {
    const storeSprints = useStoreSprints()

    return {
        type: 'container',
        props: {
            orientation: 'horizontal',
        },
        children: storeSprints.stateSprints,
    };
}