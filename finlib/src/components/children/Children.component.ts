import {Component, Vue} from 'vue-property-decorator';

@Component
export default class ChildrenComponent extends Vue {
    public created(): void {
        Promise.resolve();
    }
}
