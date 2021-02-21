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

    async getRankGroups() {
        return await axios.get(this.url + 'ranks/groups')
    }

    async getAwards() {
        return await axios.get(this.url + 'awards')
    }

    async getAwardGroups() {
        return await axios.get(this.url + 'awards/groups')
    }

    async getTrainings() {
        return await axios.get('training')
    }

    async getTrainingGroups() {
        return await axios.get(this.url + 'training/groups')
    }

    async getUnits() {
        return await axios.get(this.url + 'units')
    }

    async getUnitGroups() {
        return await axios.get(this.url + 'units/groups')
    }

    async getPositions() {
        return await axios.get(this.url + 'positions')
    }

    async getEvents() {
        return await axios.get(this.url + 'events')
    }

    async getEvent(event) {
        return await axios.get(this.url + 'events/' + event)
    }

    async getAnnouncements() {
        return await axios.get(this.url + 'announcements')
    }
}