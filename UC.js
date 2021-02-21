class UnitCommander {
    constructor(url) {
        if (typeof url == 'string')
            this.url = url + '/api/'
        else
            throw new Error('URL Must be a String!')
    }

    async getPlayer(steam64) {
        let player = await axios.get(this.url + 'profiles/sid/' + steam64)
        return player;
    }

    async getRanks() {
        return await axios.get(this.url + 'ranks')
    }
}