export class Heart {
    constructor(
        public fullHeart: boolean,
        public urlFullHeart: string = './assets/full_heart.png',
        public urlEmptyHeart: string= './assets/empty_heart.png') { }

    public showHeart(): string {
        if (this.fullHeart) {
            return this.urlFullHeart
        } else {
            return this.urlEmptyHeart
        }
    }
}